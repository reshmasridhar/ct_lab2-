import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { data } from "../../data/data";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/features/cartSlice';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import ImageModal from './ImageModal';
import Review from './Review';
import './Product.css';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState()
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const productDetail = data.find((item) =>
            +item.id === +id
        );
        setProduct(productDetail)
    }, [id])

    const handleThumbnailClick = (image) => {
        setSelectedImage(image);
        setModalOpen(true); 
    };
    const closeModal = () => {
        setModalOpen(false); // Close the modal
    };

    return (
        <div className="product page-container">
            <div className="pt-5 back-shop">
                <h6 className="mb-0"><Link to="/shop"><HiOutlineArrowNarrowLeft />Back to Shop</Link></h6>
            </div>
            <div className="row">
                <div data-aos="fade-up" className="col-12 col-md-7 p-5">
                    <img src={product?.image} alt="product" className='w-100' />
                </div>
                <div className="col-12 col-md-5 p-5 product-info">
                    <h2 data-aos="fade-left">{product?.title}</h2>
                    <span data-aos="fade-left" className='product-category'>{product?.category}</span>
                    <p data-aos="fade-left">{product?.content}</p>
                    <p data-aos="fade-left">{product?.weight}</p>
                    <p data-aos="fade-left">{product?.length}</p>
                    <p data-aos="fade-left">{product?.height}</p>
                    <p data-aos="fade-left">{product?.width}</p>
                    <p data-aos="fade-left">{product?.size}</p>
                    <div data-aos="fade-left" className="product-prices d-flex pb-2">
                        {product?.oldPrice ? (<><del className='product-price pe-2'>₹{product?.oldPrice}.00</del><span className='product-price'>₹{product?.price}.00</span></>) : (<span className='product-price'>₹{product?.price}.00</span>)}
                    </div>
                    <button data-aos="fade-left" className='general-button' onClick={() => dispatch(addToCart(product))}>Add to cart</button>
                </div>
            </div>

            <div className="row">
            <h3 data-aos="fade-up" className='text-center part-title'></h3>
            <div className="additional-images">
                    {product?.additionalImages && product.additionalImages.length > 0 ? (
                        product.additionalImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Product Image ${index}`}
                                onClick={() => handleThumbnailClick(image)}
                            />
                        ))
                    )  : (
                        <p>No additional images available</p>
                    )}
                </div>
            </div>
            <br></br><br></br>
            <div className="row">
                <div className="reviews">
                <h3 data-aos="fade-up" className='text-center part-title'>Customer Reviews</h3>
                    {product?.reviews && product.reviews.length > 0 ? (
                        product.reviews.map((review) => (
                            <Review
                                key={review.id}
                                name={review.userName}
                                rating={review.rating}
                                comment={review.comment}
                            />
                        ))
                    ) : (
                        <p>No reviews available</p>
                    )}
                </div>
            </div>

            {isModalOpen && (
                <ImageModal image={selectedImage} closeModal={closeModal} />
            )}
        </div>
    )
}

export default Product;