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

      <div className="flex justify-center gap-3 mt-5">
       <button
          onClick={() => setActiveTab('Products')}
          className={`w-40 rounded-full text-xl font-bold py-2 ${
            activeTab === 'Products'
              ? 'text-white bg-gradient-to-r from-purple-600 to-blue-600'
              : 'bg-white text-purple-400 border'
          }`}
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab('Cart')}
          className={`w-40 rounded-full text-xl font-bold py-2 ${
            activeTab === 'Cart'
              ? 'text-white bg-gradient-to-r from-purple-600 to-blue-600'
              : 'text-blue-400 border bg-white  '
          }`}
        >
          Cart ({carts.length})
        </button>
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
