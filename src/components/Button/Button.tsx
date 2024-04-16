import React, { FunctionComponent, useContext } from 'react';
import styles from "./Button.module.css";
import ScreenSize from '../../utils/ScreenSize';
import { AppContext } from '../../app/context/AppContextProvider';

interface ButtonProps {
    btnWidth: string
    iconState: boolean
    icon?: any
    iconLabel?: string
    iconSizeDS?: number
    iconSizeTB?: number
    iconSizeMB?: number
    label: string
    href?: string
    handle?: () => void
}

export default function Button({
    btnWidth,
    iconState,
    icon,
    iconLabel, 
    iconSizeDS,
    iconSizeTB, 
    iconSizeMB, 
    label, 
    href,
    handle
}:ButtonProps) {
    ScreenSize();
    const {isMb, isTb, setBtnState, product, setCart} = useContext(AppContext);

    const handleAddToCart = () => {
        product > 0 ? setBtnState(false) : setBtnState(true);
        setCart(product);
    }
    
    return(
        <a className={styles.buttonContainer} href={href}
            style={{maxWidth: btnWidth}}
            onClick={handle}
        >
            {
                iconState &&
                <span className={styles.icon}
                    style={{width: isMb ? iconSizeMB : isTb ? iconSizeTB: iconSizeDS}}
                >
                    <img src={icon} alt={iconLabel} />
                </span>
            }
            <p className={styles.title}>{label}</p>
        </a>
    )
}