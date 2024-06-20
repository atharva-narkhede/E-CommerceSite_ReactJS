// import React from 'react';
// import axios from 'axios';
// import url from '../url';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

// const categories = [
//     "groceries",
//     "home-decoration",
//     "kitchen-accessories",
//     "laptops",
//     "mens-shirts",
//     "mens-shoes",
//     "mens-watches",
//     "mobile-accessories",
//     "motorcycle",
//     "skin-care"
// ];

// const responsive = {
//     superLargeDesktop: {
//         breakpoint: { max: 4000, min: 3000 },
//         items: 5
//     },
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 3
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 2
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1
//     }
// };

// export default class ProductsComponent extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             products: [],
//             status: '',
//             expanded: {}
//         };
//     }

//     componentDidMount() {
//         this.setState({
//             status: 'Loading...'
//         });
//         axios.get(url + '/products/fetch')
//             .then((posRes) => {
//                 this.setState({
//                     products: posRes.data,
//                     status: ''
//                 });
//             }, (errRes) => {
//                 console.log(errRes);
//                 this.setState({
//                     status: 'Error fetching data'
//                 });
//             });
//     }

//     toggleExpand = (index) => {
//         this.setState((prevState) => ({
//             expanded: {
//                 ...prevState.expanded,
//                 [index]: !prevState.expanded[index]
//             }
//         }));
//     }

//     groupProductsByCategory() {
//         const { products } = this.state;
//         const grouped = {};

//         categories.forEach(category => {
//             grouped[category] = products.filter(product => product.p_cat === category);
//         });

//         return grouped;
//     }

//     render() {
//         const containerStyle = {
//             marginTop: '20px'
//         };

//         const cardStyle = {
//             border: '1px solid #ddd',
//             borderRadius: '10px',
//             width: '300px',
//             margin: '10px',
//             padding: '20px',
//             boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
//             textAlign: 'center',
//             overflow: 'hidden',
//             position: 'relative',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-between'
//         };

//         const imageStyle = {
//             width: '60%',
//             height: 'auto',
//             margin: '0 auto'
//         };

//         const buttonStyle = {
//             backgroundColor: '#007bff',
//             color: '#fff',
//             padding: '10px',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             marginTop: '10px'
//         };

//         const descStyle = {
//             maxHeight: '50px',
//             overflow: 'hidden',
//             textOverflow: 'ellipsis'
//         };

//         const groupedProducts = this.groupProductsByCategory();

//         return (
//             <div className='container'>
//                 <div style={{ color: '#17a2b8', fontSize: '2rem', textAlign: 'center' }}>All Products</div>
//                 {
//                     categories.map((category, index) => (
//                         <div key={index} style={containerStyle}>
//                             <h2>{category}</h2>
//                             <Carousel responsive={responsive}>
//                                 {
//                                     groupedProducts[category].map((product, index) => (
//                                         <div key={index} style={cardStyle}>
//                                             <img
//                                                 src={product.p_img}
//                                                 alt={product.p_name}
//                                                 style={imageStyle}
//                                             />
//                                             <h4>{product.p_name}</h4>
//                                             <div style={this.state.expanded[index] ? {} : descStyle}>
//                                                 {product.p_desc}
//                                             </div>
//                                             {product.p_desc.length > 50 && (
//                                                 <button
//                                                     className="btn btn-link"
//                                                     onClick={() => this.toggleExpand(index)}
//                                                     style={{ padding: 0, marginTop: '10px' }}
//                                                 >
//                                                     {this.state.expanded[index] ? 'Show Less' : 'Learn More'}
//                                                 </button>
//                                             )}
//                                             <p><strong>Price: </strong>₹{product.p_cost}</p>
//                                             {this.props.getCartQuantity(product) > 0 ? (
//                                                 <div>
//                                                     <button style={buttonStyle} onClick={() => this.props.handleUpdateCart(product, this.props.getCartQuantity(product) - 1)}>-</button>
//                                                     <span style={{ margin: '0 10px' }}>{this.props.getCartQuantity(product)}</span>
//                                                     <button style={buttonStyle} onClick={() => this.props.handleUpdateCart(product, this.props.getCartQuantity(product) + 1)}>+</button>
//                                                 </div>
//                                             ) : (
//                                                 <button style={buttonStyle} onClick={() => this.props.addToCart(product)}>Add to Cart</button>
//                                             )}
//                                         </div>
//                                     ))
//                                 }
//                             </Carousel>
//                         </div>
//                     ))
//                 }
//                 <h3 className='text-info' style={{ textAlign: 'center' }}>{this.state.status}</h3>
//             </div>
//         );
//     }
// }

import React from 'react';
import axios from 'axios';
import url from '../url';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const categories = [
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care"
];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default class ProductsComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
            status: '',
            expanded: {}
        };
    }

    componentDidMount() {
        this.setState({
            status: 'Loading...'
        });
        axios.get(url + '/products/fetch')
            .then((posRes) => {
                this.setState({
                    products: posRes.data,
                    status: ''
                });
            }, (errRes) => {
                console.log(errRes);
                this.setState({
                    status: 'Error fetching data'
                });
            });
    }

    toggleExpand = (index) => {
        this.setState((prevState) => ({
            expanded: {
                ...prevState.expanded,
                [index]: !prevState.expanded[index]
            }
        }));
    }

    groupProductsByCategory() {
        const { products } = this.state;
        const grouped = {};

        categories.forEach(category => {
            grouped[category] = products.filter(product => product.p_cat === category);
        });

        return grouped;
    }

    render() {
        const containerStyle = {
            marginTop: '20px'
        };

        const cardStyle = {
            border: '1px solid #ddd',
            borderRadius: '10px',
            width: '300px',
            margin: '10px',
            padding: '20px',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            textAlign: 'center',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        };

        const imageStyle = {
            width: '60%',
            height: 'auto',
            margin: '0 auto'
        };

        const buttonStyle = {
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px'
        };

        const descStyle = {
            maxHeight: '50px',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        };

        const groupedProducts = this.groupProductsByCategory();

        return (
            <div className='container'>
                <div style={{ color: '#17a2b8', fontSize: '2rem', textAlign: 'center' }}>All Products</div>
                {
                    categories.map((category, index) => (
                        <div key={index} style={containerStyle}>
                            <h2>{category}</h2>
                            <Carousel responsive={responsive}>
                                {
                                    groupedProducts[category].map((product, index) => (
                                        <div key={index} style={{ ...cardStyle, ...responsive.cardStyle }}>
                                            <img
                                                src={product.p_img}
                                                alt={product.p_name}
                                                style={{ ...imageStyle, ...responsive.imageStyle }}
                                            />
                                            <h4>{product.p_name}</h4>
                                            <div style={this.state.expanded[index] ? {} : descStyle}>
                                                {product.p_desc}
                                            </div>
                                            {product.p_desc.length > 50 && (
                                                <button
                                                    className="btn btn-link"
                                                    onClick={() => this.toggleExpand(index)}
                                                    style={{ padding: 0, marginTop: '10px' }}
                                                >
                                                    {this.state.expanded[index] ? 'Show Less' : 'Learn More'}
                                                </button>
                                            )}
                                            <p><strong>Price: </strong>₹{product.p_cost}</p>
                                            {this.props.getCartQuantity(product) > 0 ? (
                                                <div>
                                                    <button style={buttonStyle} onClick={() => this.props.handleUpdateCart(product, this.props.getCartQuantity(product) - 1)}>-</button>
                                                    <span style={{ margin: '0 10px' }}>{this.props.getCartQuantity(product)}</span>
                                                    <button style={buttonStyle} onClick={() => this.props.handleUpdateCart(product, this.props.getCartQuantity(product) + 1)}>+</button>
                                                </div>
                                            ) : (
                                                <button style={buttonStyle} onClick={() => this.props.addToCart(product)}>Add to Cart</button>
                                            )}
                                        </div>
                                    ))
                                }
                            </Carousel>
                        </div>
                    ))
                }
                <h3 className='text-info' style={{ textAlign: 'center' }}>{this.state.status}</h3>
            </div>
        );
    }
}
