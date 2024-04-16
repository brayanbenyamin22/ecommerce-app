import React, { useContext } from 'react';
import { AppContext } from '../../app/context/AppContextProvider';
import styles from "./Product.module.css";
import plusBtn from "./assets/icon-plus.svg";
import minusBtn from "./assets/icon-minus.svg";
import cartIcon from "./assets/icon-cart.svg";
import ScreenSize from '../../utils/ScreenSize';
import Button from '../Button/Button';

export default function Product() {
    ScreenSize();
    const {isMb, isTb, btnState, setBtnState,product, setProduct, cart, setCart} = useContext(AppContext);

    /* const [product, setProduct] = useState(0); */
    const handleAddProduct = (state: boolean) => {
        const condition = state ? product + 1 : (product > 0 ? product - 1 : 0)
        const productAmount = (!btnState || cart > 0) ? product : condition;
        setProduct(productAmount);
    }

    const handleAddToCart = () => {
        product > 0 ? setBtnState(false) : setBtnState(true);
        setCart(product);
    }
    /* Antigua Manera */
    /* const handleAddProduct = (state: boolean) => {
        const condition = state ? product + 1 : (product > 0 ? product - 1 : 0)
        const productAmount = btnState ? condition : product;
        setProduct(productAmount);
    } */
    return (
        <section className={styles.productContainer}
            style={{maxWidth: isMb ? 360 : isTb ? 390 : 390}}
        >
            <h2 className={styles.companyName}>SNEAKERS COMPANY</h2>
            <h1 className={styles.productName}>Fall Limited Edition<br/>Sneakers</h1>
            <p className={styles.productDescription}>
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
            </p>
            <div className={styles.productPriceContainer}>
                <div className={styles.productPrice}>
                    <p className={styles.priceNow}>$125.00</p>
                    <span className={styles.discount}>50%</span>
                </div>
                <span className={styles.priceBefore}>$250.00</span>
            </div>
            <div className={styles.productBtnContainer}>
                <div className={styles.addProductBtn}
                    style={{maxWidth: isMb ? 360 : isTb ? 150 : 150}}
                >
                    <span className={styles.btn} onClick={() => {handleAddProduct(false)}}>
                        <img src={minusBtn} alt="minus button" />
                    </span>
                    <p className={styles.productAmount}>{product}</p>
                    <span className={styles.btn} onClick={() => {handleAddProduct(true)}}>
                        <img src={plusBtn} alt="plus button" />
                    </span>
                </div>
                <Button 
                    btnWidth={isMb ? "360px" : isTb ? "230px" : "230px"}
                    iconState={true}
                    icon={cartIcon}
                    iconLabel='cart'
                    iconSizeDS={16}
                    iconSizeTB={16}
                    iconSizeMB={16}
                    label='Add to cart'
                    handle={() => handleAddToCart()}
                />
            </div>
        </section>
    );
}

