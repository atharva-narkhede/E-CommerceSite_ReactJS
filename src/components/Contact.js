import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Contactus extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
        alert('Message sent successfully!');
    }

    render() {
        const { name, email, message } = this.state;

        return (
            <div className="container mt-5">
                <div className="jumbotron bg-light text-center">
                    <h1 className="display-4">Contact Us</h1>
                    <p className="lead">We'd love to hear from you. Please fill out the form below to get in touch.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group mb-4">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={message}
                                    onChange={this.handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
