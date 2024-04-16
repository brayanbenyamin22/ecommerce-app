import { useContext } from "react";
import { AppContext } from "../app/context/AppContextProvider";
import useHasHydrated from "../hooks/useHasHydrated";

const ScreenSize = () => {
    const {setIsMb, setIsTb} = useContext(AppContext);

    const hasHydrated = useHasHydrated();
    const screenWidth = !hasHydrated ? 425 : window?.innerWidth;
    const isTablet = screenWidth <= 860 && screenWidth > 425;
    const isMobile = screenWidth <= 550;
    setIsMb(isMobile);
    setIsTb(isTablet);
}

export default ScreenSize;
