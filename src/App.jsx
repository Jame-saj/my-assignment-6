import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Rating from './components/Rating';
import Pricing from './components/backside/Pricing';
import ThreeSteps from './components/backside/ThreeSteps';
import Workflow from './components/backside/Workflow';
import Footer from './components/backside/Footer';
import Products from './components/functionality/Products';

const getProducts = async () => {
  const res = await fetch('/data.json');
  return res.json();
};
const productsPromise = getProducts();

function App() {
  return (
    <>
      {/* <Navbar />
      <Banner />
      <Rating />
      <ThreeSteps/>
      <Pricing/>
      <Workflow/>
      <Footer/> */}
      <Products productsPromise={productsPromise} />
    </>
  );
}

export default App;
