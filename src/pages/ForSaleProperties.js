import { Form, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
import React, { Component } from 'react';
import axios from 'axios';
import { EditText, EditTextarea } from 'react-edit-text';
import { Link } from 'react-router-dom';
// import AddAgent from './AddAgent';
// import EditAgent from './EditAgent';
import 'react-edit-text/dist/index.css';
import '../style.css';

const Property = props =>
(
    <div>
        <h3 className='text-primary text-center mb-4 mt-4 mb-5'><strong>Property# {props.count} </strong></h3>

        <Col sm={{ span: 10, offset: 1 }} className="text-center " style={{ 'background-color': 'rgba(192, 192, 192, 0.25)' }}>
            <div className="single-product-wrap style-2">
                <div className="thumb">
                    <img style={{ width: "330px", height: "248px" }} src={props.property.MainImage} alt="img" />
                    <div className="product-wrap-details">
                        <div className="media">
                            <div className="media-body">
                                <h6 style={{ textAlign: "center" }}>
                                    {props.property.Owner}
                                </h6>
                                <p>
                                    <i className='bx bxs-map'></i>
                                    {" "}{props.property.Address}
                                </p>
                            </div>
                            <a className="fav-btn float-right" href="#">
                                <i className="far fa-heart" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="product-details-inner">
                    <h4>
                    </h4>
                    <ul className="meta-inner">
                        <li>
                            <i className='bx bxs-map'></i>
                            {props.property.City}
                        </li>
                        <li>
                            <span className='text-success'>For Sale</span>
                        </li>
                    </ul>
                    <p className=''>{props.property.PropertyTagline}</p>
                    <span className="price text-success">$ {props.property.Price}</span>
                </div>
                <div className="ms-5 product-meta-bottom style-2">
                    <div className='ms-5'>
                    <span>
                        {props.property.Bedrooms} <span>Bedrooms</span>
                    </span>
                    <span className="border-none ms-2">
                        {props.property.Bathrooms} <span>Bathrooms </span>
                    </span>
                    <span>
                        {props.property.AreaSqFt} <span>sqft</span>
                    </span>
                    </div>
                </div>

                <div className='text-center ms-2 mt-4 mb-2'>
                    <Link to={"../Admin/ForSaleProperties/Edit/Property/" + props.property._id} className="btn ps-3 pe-3 btn-primary">
                        edit
                    </Link>
                    <a href="" onClick={() => { props.deleteProperty(props.property._id); }} className="btn ps-2 pe-2 btn-primary ms-3">
                        delete
                    </a>
                </div>

                <br />
            </div>
        </Col>
        <br /><br /><br />
    </div>
)

export default class ForSaleProperties extends Component {
    constructor(props) {
        super(props);

        this.deleteProperty = this.deleteProperty.bind(this);

        this.state = {
            Properties: []
        };
    }


    componentDidMount() {
        axios.get('http://localhost:4000/ForSaleProperties/')
            .then(response => {
                this.setState({
                    Properties: response.data
                })
            })
            .catch((error) => {
                alert(error);
            })
    }


    deleteProperty(id) {
        axios.delete('http://localhost:4000/ForSaleProperties/delete-forSaleProperty/' + id)
            .then(res => alert("Property removed successfully"))
            .catch(res => alert(res.data));
        this.setState({
            Properties: this.state.Properties.filter(p => p._id !== id)
        })
    }

    PropertyList() {
        let count=0;
        return this.state.Properties.map(currentproperty => {
            return <Property property={currentproperty} deleteProperty={this.deleteProperty} key={currentproperty._id} count={count++}/>;
        })
    }


    render() {
        return (
            <div>
                <h1 className='text-primary mb-5 text-center bg-white rounded p-4 me-5 ps-5'>For Sale Properties</h1>
                <div className=' ps-5 pt-5 pb-5 me-5 mb-5 rounded bg-white'>

                    <div className='text-end me-5 mb-5'>
                        <Link to={"../Admin/ForSaleProperties/AddNew/"} className="btn btn-primary mb-4">
                            Add Property +
                        </Link>
                    </div>

                    {
                        this.PropertyList()
                    }
                </div>
            </div>
        )
    }
}
