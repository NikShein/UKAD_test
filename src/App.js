import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import './App.css';

import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import Products from './pages/Products/Products';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';


function App() {

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const productCards = [];

  useEffect(() => {
    setTimeout(() => {
      fetch('https://api.thedogapi.com/v1/breeds?limit=8&page=0')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoader(false);
      })
    }, 2000)
      
    }, []
  )
  data.map((card, index) => {
      productCards.push(
        <ProductCard
          key={index}
          image={card.image.url}
          category={card.breed_group}
          name={card.name}
        />
      )
      return productCards;
  })

  return (
    <div className="App">
      <Header/>
      <Route path='/' exact  render={()=><Home loader={loader} productCards={productCards}/>}/>
      <Route path='/products' render={()=><Products loader={loader} productCards={productCards}/>}/>
      <Footer/>
      
    </div>
  );
}

export default App;
