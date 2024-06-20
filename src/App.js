import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import LoginRegister from './components/LoginRegister';
import ProductsComponent from './components/ProductComponent';
import Cart from './components/Cart';
import axios from 'axios';
import url from './url';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        if (isAuthenticated) {
            fetchCart();
        }
    }, [isAuthenticated]);

    const fetchCart = () => {
        const userToken = sessionStorage.getItem('userToken');
        if (userToken) {
            axios.get(`${url}/cart/fetch`)
                .then((response) => {
                    const userCartItems = response.data.filter(item => item.u_name === userToken);
                    setCartItems(userCartItems);
                })
                .catch((error) => {
                    console.log('Error fetching cart:', error);
                });
        }
    }

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('userToken');  // Remove user token on logout
        setCartItems([]);  // Clear cart items on logout
    };

    const addToCart = (product) => {
        const userToken = sessionStorage.getItem('userToken');
        if (!userToken) return;

        axios.get(`${url}/cart/fetch`)
            .then((response) => {
                const userCartItems = response.data.filter(item => item.u_name === userToken);
                const existingItem = userCartItems.find(item => item.p_id === product.p_id);
                if (existingItem) {
                    handleUpdateCart(product, existingItem.quantity + 1);
                } else {
                    axios.post(`${url}/cart/insert`, {
                        p_id: product.p_id,
                        p_name:product.p_name,
                        p_img: product.p_img,
                        p_cost: product.p_cost,
                        u_name: userToken,
                        quantity: 1
                    }).then(() => {
                        fetchCart();
                    }).catch((error) => {
                        console.log('Error adding to cart:', error);
                    });
                }
            })
            .catch((error) => {
                console.log('Error fetching cart:', error);
            });
    }

    const handleUpdateCart = (product, quantity) => {
        const userToken = sessionStorage.getItem('userToken');
        if (!userToken) return;

        axios.get(`${url}/cart/fetch`)
            .then((response) => {
                const userCartItems = response.data.filter(item => item.u_name === userToken);
                const existingItem = userCartItems.find(item => item.p_id === product.p_id);
                if (existingItem) {
                    if (quantity <= 0) {
                        handleRemoveFromCart(product);
                    } else {
                        axios.put(`${url}/cart/update`, {
                            p_id: product.p_id,
                            u_name: userToken,
                            quantity
                        }).then(() => {
                            fetchCart();
                        }).catch((error) => {
                            console.log('Error updating cart:', error);
                        });
                    }
                }
            })
            .catch((error) => {
                console.log('Error fetching cart:', error);
            });
    }

    const handleRemoveFromCart = (product) => {
        const userToken = sessionStorage.getItem('userToken');
        if (!userToken) return;

        axios.get(`${url}/cart/fetch`)
            .then((response) => {
                const userCartItems = response.data.filter(item => item.u_name === userToken);
                const existingItem = userCartItems.find(item => item.p_id === product.p_id);
                if (existingItem) {
                    axios.delete(`${url}/cart/delete`, {
                        data: {
                            p_id: product.p_id,
                            u_name: userToken
                        }
                    }).then(() => {
                        fetchCart();
                    }).catch((error) => {
                        console.log('Error removing from cart:', error);
                    });
                }
            })
            .catch((error) => {
                console.log('Error fetching cart:', error);
            });
    }

    const getCartQuantity = (product) => {
        const userToken = sessionStorage.getItem('userToken');
        const item = cartItems.find(item => item.p_id === product.p_id && item.u_name === userToken);
        return item ? item.quantity : 0;
    }

    const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Router>
            <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} cartItemCount={cartItemCount} />
            <Routes>
                <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<LoginRegister setIsAuthenticated={(auth) => { setIsAuthenticated(auth); setCartItems([]); }} />} />
                <Route path="/products" element={isAuthenticated ? <ProductsComponent addToCart={addToCart} getCartQuantity={getCartQuantity} handleUpdateCart={handleUpdateCart} /> : <Home isAuthenticated={isAuthenticated} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} fetchCart={fetchCart} handleUpdateCart={handleUpdateCart} handleRemoveFromCart={handleRemoveFromCart} />} />
            </Routes>
        </Router>
    );
};

export default App;
