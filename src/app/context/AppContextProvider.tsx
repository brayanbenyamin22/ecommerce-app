import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorageItem } from '../../utils/localStorageUtils';

interface AppContextProps {
/*     mostrarAnuncio: boolean;
    setMostrarAnuncio: React.Dispatch<React.SetStateAction<boolean>>; */
    isMb: boolean;
    setIsMb: React.Dispatch<React.SetStateAction<boolean>>;
    isTb: boolean;
    setIsTb: React.Dispatch<React.SetStateAction<boolean>>;
    image: number;
    setImage: React.Dispatch<React.SetStateAction<number>>;
    imageIndex: number;
    setImageIndex: React.Dispatch<React.SetStateAction<number>>;
    changeImage: boolean;
    setChangeImage: React.Dispatch<React.SetStateAction<boolean>>;
    itemSelected: number;
    setItemSelected: React.Dispatch<React.SetStateAction<number>>;
    btnState: boolean;
    setBtnState: React.Dispatch<React.SetStateAction<boolean>>;
    product: number;
    setProduct: React.Dispatch<React.SetStateAction<number>>;
    cart: number;
    setCart: React.Dispatch<React.SetStateAction<number>>;
    cartState: boolean;
    setCartState: React.Dispatch<React.SetStateAction<boolean>>;
    sliderTabState: boolean;
    setSliderTabState: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue: AppContextProps = {
    isMb: false,
    setIsMb: () => {},
    isTb: false,
    setIsTb: () => {},
    image: 0,
    setImage: () => {},
    imageIndex: 0,
    setImageIndex: () => {},
    changeImage: true,
    setChangeImage: () => {},
    itemSelected: 0,
    setItemSelected: () => {},
    btnState: true,
    setBtnState:() => {},
    product: 0,
    setProduct:() => {},
    cart: 0,
    setCart:() => {},
    cartState: false,
    setCartState:() => {},
    sliderTabState: false,
    setSliderTabState: () => {},
}

const AppContext = createContext(defaultValue);

const AppContextProvider = ({children}: {children: React.ReactNode}) => {
    
    const [isMb, setIsMb] = useState(false);
    const [isTb, setIsTb] = useState(false);
    const [image, setImage] = useState(0); 
    const [imageIndex, setImageIndex] = useState(0);

    const [changeImage, setChangeImage] = useState(false); /* Animación */
    const [itemSelected, setItemSelected] = useState(0);
    const [btnState, setBtnState] = useState(true);

    const [product, setProduct] = useState(0);

    //#Local Storage Mode
    /* const [cart, setCart] = useState(() => {
        const storedCart = getLocalStorageItem('product');
        return storedCart ? parseInt(storedCart, 10) : 0;
    });

    useEffect(() => {
        localStorage.setItem('product', cart.toString());
    }, [cart]); */
    
    const [cart, setCart] = useState(0);
    const [cartState, setCartState] = useState(false);
    const [sliderTabState, setSliderTabState] = useState(false);
    return (
        <AppContext.Provider value={{ 
            isMb, setIsMb,
            isTb, setIsTb,
            image, setImage,
            imageIndex, setImageIndex,
            changeImage, setChangeImage,
            itemSelected, setItemSelected,
            btnState, setBtnState,
            product, setProduct,
            cart, setCart,
            cartState, setCartState,
            sliderTabState, setSliderTabState    
        }}>
            {children}
        </AppContext.Provider>
    );
}

export {AppContextProvider, AppContext};