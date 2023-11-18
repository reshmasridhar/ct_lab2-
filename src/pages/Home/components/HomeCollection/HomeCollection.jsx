import React from 'react'
import HomeCollectionItem from '../HomeCollectionItem/HomeCollectionItem'

const HomeCollection = () => {
    return (
        <div className="home-collection">
            <div className="page-container">
            <h3 data-aos="fade-up" className='text-center part-title'>__________Our Collections__________</h3>
                <HomeCollectionItem
                    image='https://cdn.caratlane.com/media/static/images/V4/2023/Shaya/11-NOV/Responsive/01/Responsive_01.jpg'
                    title='Hey There!!!'
                    comment='Sunshine,vacations,weddingd and more.Life is overflowing and your jewellery box should follow sit!'
                    reverse={false}
                />
                <HomeCollectionItem
                    image='https://banner.caratlane.com/live-images/d428cdb36feb4a9dbbb2308b597b5310.jpg'
                    title='Adaa jewels!'
                    comment='A one of a kind collection thats as unique as you are!!'
                    reverse={true}
                />
                <HomeCollectionItem
                    image='https://banner.caratlane.com/live-images/475e329d82e4458fa8aafc9663bb8ea6.jpg'
                    title='Fluttering Elegance!'
                    comment='Adorn yourself with the delicate elegance of butterfly-inspired jewels that flutter with grace and beauty!'
                    reverse={false}
                />
            </div>
        </div>
    )
}

export default HomeCollection