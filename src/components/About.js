import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is imported

export default class Aboutus extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="jumbotron bg-light text-center">
          <h1 className="display-4">Welcome to E-Commerce Website</h1>
          <p className="lead">We provide top-notch products and services to our valued customers.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <section className="mb-4">
              <h2>About Us</h2>
              <p>Founded in 2024, Our Company is committed to delivering high-quality products and services.</p>
            </section>

            <section className="mb-4">
              <h2>Our Values</h2> 
              <ul>
                <li>Integrity</li>
                <li>Customer Focus</li>
                <li>Innovation</li>
                <li>Teamwork</li>
              </ul>
            </section>

            <section className="mb-4" >
              <h2>Contact Us</h2>
              <p>Email: contact@ecommerce.com</p>
              <p>Phone: +91 9876543210</p>
              <p>Address: Pune, Maharashtra, India</p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
