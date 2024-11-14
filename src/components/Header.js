import React from 'react';

function Header(props) {
    return (
        <header className="header-container">
            <div className="header-title">My E-Commerce Store</div>
            <div className="cart-container">
                <div className="add-to-cart">
                    <span className="cart-count">{props.data.length}</span>
                    <img
                        className="cart-icon"
                        src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"
                        alt="Cart"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
