import React, { useContext } from 'react';
import './globals.css';
import Navbar from "../components/Navbar/Navbar";
import { AppContext, AppContextProvider } from './context/AppContextProvider';
import Slider from '../components/Slider/Slider';
import Layout from './Layout';
import Product from '../components/Product/Product';
import SliderTab from '../components/SliderTab/SliderTab';

export default function App() {
  const {sliderTabState} = useContext(AppContext);

  return (
    <AppContextProvider>
      <Layout>
        <SliderTab />
        <Navbar />
        <Slider handleTabState={true} />
        <Product />
      </Layout>
    </AppContextProvider>
  );
}
