import React from 'react';

function Home(props) {
    console.log(props)
    return (
        <div className="home-container">
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img
                        src="https://www.imagineonline.store/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg?v=1694605184&width=823"
                        alt="iPhone"
                    />
                    <div className="text-wrapper">
                        <span className="item-name">I-Phone</span>
                        <span className="item-price">Price: $1000.00</span>
                    </div>
                </div>
                <div className="btn-wrapper">
                    <button
                        className="action-btn"
                        onClick={() => props.addToCartHandler({ price: 1000, name: 'iPhone 11' })}
                    >
                        Add To Cart
                    </button>
                    {props.data && props.data.length > 0 && (
                        <button className="action-btn remove-btn" onClick={() => props.removeFromCartHandler()}>
                            Remove
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
