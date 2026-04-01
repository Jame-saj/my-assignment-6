import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Rating from './components/Rating';
import Pricing from './components/backside/Pricing';
import ThreeSteps from './components/backside/ThreeSteps';
import Workflow from './components/backside/Workflow';
import Footer from './components/backside/Footer';
import Products from './components/functionality/Products';
import Cart from './components/functionality/Cart'
import { useState } from 'react';

const getProducts = async () => {
  const res = await fetch('/data.json');
  return res.json();
};
const productsPromise = getProducts();

function App() {
  const [activeTab, setActiveTab] = useState("Products");
  const[carts, setCarts]=useState([])
  return (
    <>
      <Navbar />
      <Banner />
      <Rating />
      <div className="tabs tabs-box justify-center bg-transparent gap-3">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-xl font-bold w-40"
          aria-label="Products"
          onClick={() => setActiveTab('Products')}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab text-xl font-bold rounded-full w-40"
          aria-label={`cart(${carts.length})`}
          onClick={() => setActiveTab('Cart')}
        />
      </div>
      {activeTab === 'Products' && (
        <Products
          carts={carts}
          setCarts={setCarts}
          productsPromise={productsPromise}
        />
      )}
      {activeTab === 'Cart' && <Cart carts={carts} setCarts={setCarts} />}

      <ThreeSteps />
      <Pricing />
      <Workflow />
      <Footer />
    </>
  );
}

export default App;
