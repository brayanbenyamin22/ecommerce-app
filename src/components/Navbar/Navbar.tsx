import { useContext, useState } from 'react';
import styles from './Navbar.module.css';
import ScreenSize from '../../utils/ScreenSize';
import { AppContext } from '../../app/context/AppContextProvider';
import hamburguer from "./assets/icons/icon-menu.svg";
import cross from "./assets/icons/icon-close.svg";
import logo from "./assets/icons/logo.svg";
import cartIcon from "./assets/icons/icon-cart.svg";
import profile from "./assets/image-avatar.png";
import Cart from '../Cart/Cart';

const NAV_ITEMS = [ 
    { label: "Collections", id: "collections"},
    { label: "Men", id: "men"},
    { label: "Women", id: "women"},
    { label: "About", id: "about"},
    { label: "Contact", id: "contact"}
];

export default function Navbar() {
    ScreenSize();
    const {isMb, isTb, btnState , cart, cartState , setCartState} = useContext(AppContext);
    const [itemHovered, setItemHovered] = useState("");
    const [itemActive, setItemActive] = useState("Collections");
    
    const handleItemClick = (label: string | any) => {
        setItemActive(label);
    }

    const [toggleMenu, setToggleMenu] = useState(false);

    const menuStyle = {display: isTb ? (!toggleMenu ? `${setTimeout(() => {'none'}, 0.6)}` : 'flex') : 'flex'}
    
    const conditionCart = (cart > 0) || !btnState;
    
    /* console.log(`Notification ${product}`); */
    const handleCartState = () => {
        setCartState(!cartState);
    }
    return (
        <nav className={styles.navbarContainer}>
            {(isMb || isTb) && 
                <span className={styles.menu}
                    style={{width: isMb ? 20 : isTb ? 25: ""}}
                >
                    <img src={hamburguer} alt='hamburguer' 
                        onClick={() => {setToggleMenu(true)}}
                    />
                </span>
            }
            {isMb && <Cart />}
            <section className={styles.navbarContent}>
                <section className={styles.navbarSides}>
                    <section className={styles.navbarLeftSide}>
                        <span className={styles.logo}
                            style={{width: isMb ? 130 : isTb ? 150: 150}}
                        >
                            <img src={logo} alt='sneakers logo' />
                        </span>
                        <ul className={`${styles.navItemsContainer}
                            ${toggleMenu ? styles.menuOpen : styles.menuClose}
                        `}
                            style={menuStyle}
                        > 
                            {/* === Cross === */}
                            {(isMb || isTb) && 
                                <div className={styles.menuBar}>
                                    <span className={styles.cross}
                                        style={{height: isMb ? 20 : isTb ? 25: ""}}
                                    >
                                        <img src={cross} alt='cross' 
                                            onClick={() => {setToggleMenu(false)}}
                                        />
                                    </span>
                                </div>
                            }
                            {
                                NAV_ITEMS.map((item, key) => {
                                    return(
                                        <li key={key} className={`${styles.navbarItem}
                                            ${itemActive === item.label ? styles.navbarItemActive : "" }
                                            ${itemHovered === item.label ? styles.navbarItemHovered : ""}
                                        `}>
                                            <a
                                                className={styles.itemLabel}
                                                href={`#${item.id}`} 
                                                onClick={() => {handleItemClick(item.label)}}
                                                onMouseEnter={()  => {setItemHovered(item.label)}}
                                                onMouseLeave={()  => {setItemHovered("")}}
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </section>
                    <section className={styles.navbarRightSide}>
                        <span className={`${styles.cartIcon}
                            ${conditionCart && styles.cartProductAdded}
                        `}
                            style={{height: isMb ? 20 : isTb ? 22: 22}}
                            onClick={()=>{handleCartState()}}
                        >
                            {(conditionCart) ? <span className={styles.notification}>{cart}</span> : ""}
                            <img src={cartIcon} alt='cart icon logo' />
                        </span>
                        <span className={styles.profile}
                            style={{
                                width: isMb ? 35 : isTb ? 50: 50,
                                height: isMb ? 35 : isTb ? 50: 50
                            }}
                        >
                            <img src={profile} alt='profile pic' />
                        </span>
                    </section>
                </section>
                {(!isMb) && <Cart />}
            </section>
            {toggleMenu &&  
                <div className={`${styles.overlay}
                    ${toggleMenu ? styles.menuOpenBg : styles.menuCloseBg}
                `} 
                    onClick={() => {setToggleMenu(false)}}
                    style={menuStyle}
                >
                </div>
            }
            {
                cartState && 
                    <div className={styles.cartOverlay} onClick={() => setCartState(false)}></div>
            }
        </nav>
    );
}

