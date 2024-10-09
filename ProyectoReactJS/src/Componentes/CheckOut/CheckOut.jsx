import React from 'react'
import { useState, useContext } from 'react'
import { cartContext } from '../../context/CartContext/CartProvider'
import { collection,updateDoc, addDoc, getDoc, doc, getFirestore } from 'firebase/firestore'
import CartDetail from '../CartDetail/CartDetail'

const CheckOut = () => {
    const {cart, getTotal, getTotalProducts, clearCart} = useContext(cartContext);

    const[nombre,setNombre] = useState("");
    const[celular,setCelular] = useState("");
    const[email,setEmail] = useState("");
    const[emailconfirm,setEmailconfirm] = useState("");
    const[error,setError] = useState("");
    const[orderId,setOrderId] = useState("");



    const handleForm = (e) => {
        console.log("Hi");
        e.preventDefault();
        if(!nombre || !celular || !email || !emailconfirm){
            setError("Por favor completa todos los campos");
            return;
        }
        if(email !== emailconfirm){
            setError("Los emails no coinciden");
            return;
        }
        const db= getFirestore();
        const order={
            items: cart.map((product)=> ({
                id:product.product.id,
                name: product.product.nombre,
                quantity: product.product.quantity,
            })),
            total: getTotal(),
            date: new Date(),
            nombre,
            celular,
            email,
            emailconfirm
        };
        Promise.all(
            order.items.map(async(productOrder)=>{
                const productRef=doc(db,"item", productOrder.id);
                const productDoc=await getDoc(productRef);
                const stock=productDoc.data().stock;
                await updateDoc(productRef, {
                    stock: stock - productOrder.quantity,
                });
            })
        )
            .then(()=>{
                addDoc(collection(db, "orders"), order)
                .then((docRef)=> {
                    setOrderId(docRef.id);
                    clearCart();
                })
                .catch((error)=>{
                    console.log("Error adding document:", error);
                    setError("No se pudo generar la orden, inténtelo nuevamente")
                })
            })
            .catch((error)=>{
                console.log("Error updating stock", error);
                setError("No se puede actualizar el stock, inténtelo nuevamente");
            });
    };
    

    return (
        <div>
            <h2>Ingrese sus datos</h2>
            <div>
                {cart.map((product)=>(
                    <div key={product.id}>
                        <p>{product.nombre}</p>
                        <p>{product.quantity}</p>
                        <hr />
                    </div>
                ))}
            </div>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="">Nombre completo</label>
                    <input type="text" onChange={(e)=> setNombre(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Celular</label>
                    <input type="number" onChange={(e)=> setCelular(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Email de confirmación</label>
                    <input type="email" onChange={(e)=> setEmailconfirm(e.target.value)}/>
                </div>

                <button type='submit'>Generar orden de compra</button>
                
                {error && <p>{error}</p>}
                {orderId &&(
                    <p>Gracias por tu compra! Tu número de orden es: {orderId}{""} </p>
                )}
            </form>
        </div>
    )
}

export default CheckOut