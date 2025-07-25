import React, { useEffect, useState } from 'react';
import classes from './Results.module.css';
import Layout from '../../Components/Layout/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../../Components/Product/ProductCard';
import { productUrl } from '../../Api/EndPoints';

function Results() {
  const [results, setResults] = useState([]); 
  const [isLoading, setIsLoading] = useState(false); 
  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false); 
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/ {categoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {isLoading ? (
            <p>Loading...</p> 
          ) : results.length === 0 ? (
            <p>Opps! No products found for "{categoryName}".</p>
          ) : (
            results.map((product) => (
              <ProductCard
                key={product.id} 
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Results;
