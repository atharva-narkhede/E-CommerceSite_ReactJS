import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ({ isAuthenticated }) => {
    const [wish, setWish] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const date = new Date().getHours();
        //console.log(date)
        if (date < 12) {
            setWish('Good Morning');
        } else if (date < 16) {
            setWish('Good Afternoon');
        } else if (date < 20) {
            setWish('Good Evening');
        } else {
            setWish('Good Night');
        }
    }, []);

    const handleBuyNowClick = () => {
        if (isAuthenticated) {
            navigate('/products');
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="container mt-5">
            <div className="jumbotron text-center">
                <h1 className="display-4">
                    {isAuthenticated
                        ? `${wish}, ${sessionStorage.getItem('name')}!`
                        : 'Welcome User!'}
                </h1>
                <p className="lead">Your one-stop shop for all your needs.</p>
                <hr className="my-4" />
            </div>

            <section className="mt-5">
                <h2 className="text-center mb-4">Featured Products</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm h-100">
                            <img src="https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/thumbnail.png" className="card-img-top" alt="Headphones" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Headphones</h5>
                                <p className="card-text">Experience high-fidelity sound with these premium headphones. Perfect for music lovers and audiophiles.</p>
                                <button className="btn btn-primary mt-auto" onClick={handleBuyNowClick}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm h-100">
                            <img src="https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/thumbnail.png" className="card-img-top" alt="Amazon Echo Plus" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Amazon Echo Plus</h5>
                                <p className="card-text">Control your smart home devices with the Echo Plus. Comes with a built-in hub and Alexa for hands-free convenience.</p>
                                <button className="btn btn-primary mt-auto" onClick={handleBuyNowClick}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm h-100">
                            <img src="https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png" className="card-img-top" alt="Apple AirPods" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Apple AirPods</h5>
                                <p className="card-text">Enjoy wireless freedom with Apple AirPods. Perfect for on-the-go listening with seamless device connectivity.</p>
                                <button className="btn btn-primary mt-auto" onClick={handleBuyNowClick}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
