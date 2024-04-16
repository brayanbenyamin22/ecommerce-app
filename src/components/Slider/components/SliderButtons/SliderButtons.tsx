import React, {useContext, useState} from 'react';
import styles from "./SliderButtons.module.css";
import btn from "../../assets/icons/icon-previous.svg";
import { AppContext } from '../../../../app/context/AppContextProvider';
import { SLIDER_ITEMS } from '../../assets/info';

interface SliderBtnsProps {
    handleOptions?: boolean;
}
export default function SliderButtons({handleOptions}: SliderBtnsProps) {
    const {isMb, isTb, image, setImage, imageIndex, setImageIndex, setChangeImage, sliderTabState} = useContext(AppContext);
    /* const [nextImg, setNextImg] = useState(0);
    const [prevImg, setPrevImg] = useState(0); */
    const handleChangeImage = () => {
        setChangeImage(true);
        setTimeout(() => {setChangeImage(false)}, 0.3)
    };

    const handleSelectNewImage = (state: boolean) => {
        const index = handleOptions ? image : imageIndex;
        const condition =  state ? index < SLIDER_ITEMS.length - 1 : index > 0;
        const nextIndex = 
            state ? (condition ? index + 1 : 0) 
            : (condition ? index - 1 : SLIDER_ITEMS.length - 1);
            handleOptions ? setImage(nextIndex) : setImageIndex(nextIndex);
        handleChangeImage();
    }
    /* console.log(`IMAGE ${image}`);
    console.log(`IMAGE INDEX ${imageIndex}`); */
    return (
        <div className={styles.sliderButtons}>
            <span className={styles.button} onClick={() => {handleSelectNewImage(false)}}>
                <img src={btn} alt="left button" />
            </span>
            <span className={`${styles.button} ${styles.btnRight}`} onClick={() => {handleSelectNewImage(true)}}>
                <img src={btn} alt="right button" />
            </span>
        </div>
    );
}

