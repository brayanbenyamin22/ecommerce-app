import React, { useContext } from 'react';
import styles from "./SliderTab.module.css";
import Slider from '../Slider/Slider';
import { AppContext } from '../../app/context/AppContextProvider';
import closeIcon from "./assets/icon/icon-close.svg";
import ScreenSize from '../../utils/ScreenSize';

export default function SliderTab() {
    ScreenSize();
    const {isMb, isTb, sliderTabState, setSliderTabState, setImage, imageIndex} = useContext(AppContext);

    const handleClose = () => {
        setSliderTabState(false);
        setImage(imageIndex);
    }
    return (
        <section className={`
            ${styles.sliderTabContainer} 
            ${sliderTabState ? styles.sliderOpen : styles.sliderClose}
        `}>
            <div className={styles.sliderTabContent}>
                <span className={styles.closeIcon}
                    style={{width: isMb ? 50 : isTb ? 25 : 20}}
                    onClick={() => {handleClose()}}
                >
                    <img src={closeIcon} alt="close icon" />
                </span>
                <Slider 
                    handleTabState={false}
                    imageSize={425}
                />
            </div>
            <div className={styles.overlay}></div>
        </section>
    );
}

