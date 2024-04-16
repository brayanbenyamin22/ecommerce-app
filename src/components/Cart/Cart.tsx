import React, { useContext } from 'react';
import styles from "./Cart.module.css";
import { AppContext } from '../../app/context/AppContextProvider';
import Button from '../Button/Button';
import productImg from "./assets/img/image-product-1-thumbnail.jpg";
import deleteIcon from "./assets/icon/icon-delete.svg";

export default function Cart() {
    
    const {isMb, isTb, setProduct, cart, setCart ,cartState, setBtnState } = useContext(AppContext);
    const productPrice = 125.00;
    const productAmount = () => {
        const amount = productPrice * cart;
        return amount.toFixed(2);
    }
    const handleDelete = () => {
        setCart(0);
        setProduct(0);
        setBtnState(true);
    }
    return (
        <section className={`${styles.cartContainer} ${cartState ? styles.cartOpen : styles.cartClose}`}>
            {/* <div className={styles.cartContent}> */}
                <p className={styles.hero}>Cart</p>
                <div className={styles.cartItemsContainer}>
                    {
                        (cart > 0 )
                        ? <>
                            <article className={styles.cartProductAdded}>
                                <span className={styles.productImg}
                                    style={{width: isMb ? 45 : isTb ? 45 : 45}}
                                >
                                    <img src={productImg} alt="product" />
                                </span>
                                <span className={styles.cartProductDetails}>
                                    <p>Fall Limited Edition Sneakers</p>
                                    <p>{`$${productPrice.toFixed(2)} x ${cart}`} <b style={{color: "black"}}>{`$${productAmount()}`}</b></p>
                                </span>
                                <span className={styles.delete}
                                    style={{width: isMb ? 15 : isTb ? 15 : 15}}
                                    onClick={() => {handleDelete()}}
                                >
                                    <img src={deleteIcon} alt="delete icon" />
                                </span>
                            </article>
                            <Button
                                btnWidth={"100%"}
                                iconState={false}
                                label='Checkout' 
                            />
                        </>
                        : <p className={styles.cartEmpty}>Your cart is empty.</p>
                    }
                </div>
            {/* </div> */}
        </section>
    )
}