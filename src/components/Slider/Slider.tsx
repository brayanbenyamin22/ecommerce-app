import { useContext } from 'react';
import styles from "./Slider.module.css";
import { SLIDER_ITEMS } from './assets/info';
import ScreenSize from '../../utils/ScreenSize';
import { AppContext } from '../../app/context/AppContextProvider';
import SliderButtons from './components/SliderButtons/SliderButtons';

interface SliderProps {
    handleTabState?: boolean
    buttonState?: boolean
    imageSize?: number
}

export default function Slider({handleTabState, buttonState, imageSize = 360}:SliderProps) {
    ScreenSize();
    const { 
        isMb, isTb, 
        image, setImage,
        imageIndex, setImageIndex, 
        changeImage, setChangeImage, 
        setSliderTabState, sliderTabState 
    } = useContext(AppContext); 
    /* const [imageIndex, setImageIndex] = useState(0); */

    const handleChangeImage = () => {
        setChangeImage(true);
        setTimeout(() => {setChangeImage(false)}, 0.3)
    };
    
    const handleOptions = (e:number) => {
        handleTabState ? setImage(e) : setImageIndex(e);
        /* handleTabState &&  */handleChangeImage() 
    } 
    const handleSliderTab = () => {
        const condition = (!isMb && !isTb);
        condition ? (handleTabState && setSliderTabState(true)) : setSliderTabState(false);
    }
    const index = (!isMb && !isTb) ? (handleTabState ? image : imageIndex) : imageIndex;
    
    const conditionCI = !handleTabState && sliderTabState ? changeImage : (!sliderTabState && changeImage);
    return (
      <div className={styles.sliderContainer}>
        <div className={`${styles.productImage} 
            ${conditionCI ? styles.productChange : styles.productInView}`
        }
            style={{ 
                width: isMb ? "100%": isTb ? 400 : imageSize,
                cursor: !handleTabState ? "default" : "pointer"
            }}
            onClick={() => {handleSliderTab()}}
        >
            {((!isMb || !isTb) && !handleTabState) && <SliderButtons />}
            <img src={SLIDER_ITEMS[index].img} alt="img1" />
        </div>
        {/* Selectores */}
        {
            (isMb || isTb) 
            ?(
                <SliderButtons />
            )
            : (
                <ul className={`${styles.selectorContainer}
                    ${!handleTabState && styles.sliderTab}
                `}>
                    {
                        SLIDER_ITEMS.map((item, i) => {
                            return(
                                <li className={`${styles.options} 
                                    ${sliderTabState ? styles.optionBgOff : ""}
                                    ${index === i && styles.optionSelected}
                                `} 
                                    key={i}
                                    style={{ width: isMb ? 50: isTb ? 50 : 75}}
                                    onClick={(()=> handleOptions(item.index))}
                                >
                                    <img src={item.thumbnail} alt={`img${i + 1}`} />
                                </li>
                            )
                        })
                    }
                </ul>
            )
        }
      </div>  
    );
}

