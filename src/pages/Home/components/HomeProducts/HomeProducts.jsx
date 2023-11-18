import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import "./homeProducts.scss";
import { data } from "../../../../data/data";
const HomeProducts = () => {
    return (
         <div className="home-products page-container">
             <h3 data-aos="fade-up" className='text-center part-title'>__________Our Brands__________</h3>
             <div className="collections-page">
      
      <div className="collection-image-row">
      <Link to="/" className="collection-image-link">
        <img src="https://banner.caratlane.com/live-images/3f896306b25e42b8827aaa3cc25002c4.jpg" alt="row 1" />
      </Link>
      <Link to="/" className="collection-image-link">
        <img src="https://banner.caratlane.com/live-images/99cf3ea232394593988c2fb675189905.jpg" alt="row 2" />
      </Link>
      
    </div>
    <br></br>
    <div className="collection-image-row">
      <Link to="/" className="collection-image-link">
        <img src="https://banner.caratlane.com/live-images/d428cdb36feb4a9dbbb2308b597b5310.jpg" alt="row 1" />
      </Link>
      <Link to="/" className="collection-image-link">
        <img src="https://banner.caratlane.com/live-images/3d10ee0e90bf477791a6293021684d53.jpg" alt="row 2" />
      </Link>
      
    </div>
    </div>
             <div data-aos="fade-up" className="divider-part">
                 <div className="divider"></div>
             </div>
         <div className="row">
                 {data.slice(1, 13).map((item) => (
                    <ProductCard
                     key={item.id}
                        item={item}
                         image={item.image}
                         title={item.title}
                         category={item.category}
                         price={item.price}
                         oldPrice={item.oldPrice}
                     />
                ))}
            </div>
        </div>
    )
}

export default HomeProducts;