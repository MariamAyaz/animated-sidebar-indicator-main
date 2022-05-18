import { Form, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
import React, { Component } from 'react';
import axios from 'axios';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

class ContactUs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            description: '',
            location: '',
            locationLink: '',
            phoneNumber1: '',
            phoneNumber2: '',
            phoneNumber3: '',
            timings1: '',
            timings2: '',
            timings3: '',
            facebook: '',
            instagram: '',
            twitter: '',
            skype: '',
            email: '',
        }
    }

    componentDidMount() {

        axios.get('http://localhost:4000/ContactUs/')
            .then(response => {
                if (response.data) {
                    this.setState({
                        description: response.data.description,
                        location: response.data.location,
                        locationLink: response.data.locationLink,
                        phoneNumber1: response.data.phoneNumber1,
                        phoneNumber2: response.data.phoneNumber2,
                        phoneNumber3: response.data.phoneNumber3,
                        timings1: response.data.timings1,
                        timings2: response.data.timings2,
                        timings3: response.data.timings3,
                        facebook: response.data.facebook,
                        instagram: response.data.instagram,
                        twitter: response.data.twitter,
                        skype: response.data.skype,
                        email: response.data.email,
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    submitForm = (e) => {
        e.preventDefault();
        if (this.state.location.length > 5 && this.state.description.length > 50 && this.state.phoneNumber1.length > 5 && this.state.phoneNumber2.length > 5 && this.state.phoneNumber3.length > 5 && this.state.locationLink.length > 5 && this.state.timings1.length > 1 && this.state.timings2.length > 1 && this.state.timings3.length > 1 && this.state.facebook.length > 5 && this.state.twitter.length > 5 && this.state.instagram.length > 5 && this.state.skype.length > 5 && this.state.email.length > 5) {
            const ContactUs =
            {
                description: this.state.description,
                location: this.state.location,
                locationLink: this.state.locationLink,
                phoneNumber1: this.state.phoneNumber1,
                phoneNumber2: this.state.phoneNumber2,
                phoneNumber3: this.state.phoneNumber3,
                timings1: this.state.timings1,
                timings2: this.state.timings2,
                timings3: this.state.timings3,
                facebook: this.state.facebook,
                instagram: this.state.instagram,
                twitter: this.state.twitter,
                skype: this.state.skype,
                email: this.state.email,
            };
            console.log(ContactUs);
            axios.post('http://localhost:4000/ContactUs/update', ContactUs)
                .then(res => alert("Updation Successfull"))
                .catch(res => alert("An unexpected Error occured" + res.data));
        }
        else {
            alert("Make sure all fields are filled with sufficient length data");
        }
        // window.location = '/';
    }

    handleSave = ({ name }) => {
        alert(name);
    };

    render() {
        return <div>
            <Form onSubmit={this.submitForm}>
                <h1 className='text-primary mb-5 text-center bg-white rounded p-4 me-5'>Contact Information</h1>
                <div className=' ps-5 pt-5 pb-5 me-5 mb-5 bg-white rounded'>

                    <h3 className='text-primary mb-5'>Address and Contact Information</h3>
                    <React.Fragment>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm={3}>
                                <strong>
                                    Office Address:
                                </strong>
                            </Form.Label>
                            <Col sm={8}>
                                <EditText
                                    type="text"
                                    placeholder="Enter Address"
                                    onSave={value => { this.setState({ location: value.value }) }}
                                    defaultValue={this.state.location}
                                    showEditButton
                                    editButtonContent={<i class='bx bx-sm bx-pencil'></i>}
                                />
                            </Col>
                        </Form.Group>
                    </React.Fragment>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={3}>
                            <strong>
                                Office location on Map:
                            </strong>
                        </Form.Label>
                        <Col sm={8}>
                            <EditText
                                type="text"
                                placeholder="Paste google map's link of office location here"
                                onSave={value => { this.setState({ locationLink: value.value }) }}
                                defaultValue={this.state.locationLink}
                                showEditButton
                                editButtonContent={<i class='bx bx-sm bx-pencil'></i>}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={3}>
                            <strong>
                                Description:
                            </strong>
                        </Form.Label>
                        <Col sm={8}>
                            <EditTextarea
                                type="text"
                                placeholder="Description"
                                defaultValue={this.state.description}
                                onSave={value => { this.setState({ description: value.value }) }}
                                style={{ border: '1px solid #999' }}
                            />
                        </Col>
                    </Form.Group>


                    <h3 className='mb-4 text-primary mb-5 mt-5 '>Phone Numbers</h3>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={3}>
                            <strong>
                                Phone Number (Primary):
                            </strong>
                        </Form.Label>
                        <Col sm={8}>
                            <EditText
                                type="text"
                                placeholder="Phone No 1"
                                defaultValue={this.state.phoneNumber1}
                                onSave={value => { this.setState({ phoneNumber1: value.value }) }}
                                showEditButton
                                editButtonContent={<i class='bx bx-sm bx-pencil'></i>}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={3}>
                            <strong>
                                Phone Number (Secondry):
                            </strong>
                        </Form.Label>
                        <Col sm={8}>
                            <EditText
                                type="text"
                                placeholder="Phone No 2"
                                onSave={value => { this.setState({ phoneNumber2: value.value }) }}
                                defaultValue={this.state.phoneNumber2}
                                showEditButton
                                editButtonContent={<i class='bx bx-sm bx-pencil'></i>}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-5" >
                        <Form.Label column sm={3}>
                            <strong>
                                Phone Number (Alternate):
                            </strong>
                        </Form.Label>
                        <Col sm={8}>
                            <EditText
                                type="text"
                                placeholder="Phone No 3"
                                defaultValue={this.state.phoneNumber3}
                                onSave={value => { this.setState({ phoneNumber3: value.value }) }}
                                showEditButton
                                editButtonContent={<i class='bx bx-sm bx-pencil'></i>}
                            />
                        </Col>
                    </Form.Group>

                    <h3 className='text-primary mb-4 mt-5'>Timing</h3>
                    <Row className="mb-5 ms-2">
                        <Form.Group as={Col} md={3} controlId="formGridCity">
                            <Form.Label>
                                <strong>Monday to Saturday:
                                </strong>
                            </Form.Label>
                            <EditText
                                defaultValue={this.state.timings1}
                                onSave={value => { this.setState({ timings1: value.value }) }}
                                style={{ border: '1px solid #999' }}
                            />
                        </Form.Group>

                        <Form.Group as={Col} md={{ span: 3, offset: 1 }} controlId="formGridState">
                            <Form.Label>
                                <strong>
                                    Friday:
                                </strong>
                            </Form.Label>
                            <EditText
                                defaultValue={this.state.timings2}
                                onSave={value => { this.setState({ timings2: value.value }) }}
                                style={{ border: '1px solid #999' }}
                            />
                        </Form.Group>

                        <Form.Group as={Col} md={{ span: 3, offset: 1 }} controlId="formGridZip">
                            <Form.Label>
                                <strong>Sunday:
                                </strong>
                            </Form.Label>
                            <EditText
                                defaultValue={this.state.timings3}
                                onSave={value => { this.setState({ timings3: value.value }) }}
                                style={{ border: '1px solid #999' }}
                            />
                        </Form.Group>
                    </Row>

                    <h3 className='text-primary mb-4 mt-5'>Social Media Links</h3>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={2}>
                            <strong>
                                Facebook:
                            </strong>
                        </Form.Label>
                        <Col sm={9}>
                            <EditText
                                type="text"
                                defaultValue={this.state.facebook}
                                placeholder="Paste Facebook profile link here"
                                onSave={value => { this.setState({ facebook: value.value }) }}
                                showEditButton
                                editButtonContent={<i class='bx bx-sm bx-pencil'></i>}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={2}>
                            <strong>
                                Instagram:
                            </strong>
                        </Form.Label>
                        <Col sm={9}>
                            <EditText
                                type="text"
                                defaultValue={this.state.instagram}
                                placeholder="Paste Instagram profile link here"
                                onSave={value => { this.setState({ instagram: value.value }) }}
                                showEditButton
                                editButtonContent={<i class='bx bx-sm bx-pencil'></i>}
                            />
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={2}>
                            <strong>
                                Twitter:
                            </strong>
                        </Form.Label>
                        <Col sm={9}>
                            <EditText
                                type="text"
                                defaultValue={this.state.twitter}
                                placeholder="Paste Twitter profile link here"
                                onSave={value => { this.setState({ twitter: value.value }) }}
                                showEditButton
                                editButtonContent={<i class='bx bx-sm bx-pencil'></i>}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={2}>
                            <strong>
                                Skype:
                            </strong>
                        </Form.Label>
                        <Col sm={9}>
                            <EditText
                                type="text"
                                defaultValue={this.state.skype}
                                placeholder="Paste Skype profile link here"
                                onSave={value => { this.setState({ skype: value.value }) }}
                                showEditButton
                                editButtonContent={<i class='bx bx-sm bx-pencil'></i>}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={2}>
                            <strong>
                                Email Address:
                            </strong>
                        </Form.Label>
                        <Col sm={9}>
                            <EditText
                                type="text"
                                defaultValue={this.state.email}
                                placeholder="Paste Email address here"
                                onSave={value => { this.setState({ email: value.value }) }}
                                showEditButton
                                editButtonContent={<i class='bx bx-sm bx-pencil'></i>}
                            />
                        </Col>
                    </Form.Group>

                    <div className='text-end mt-5 me-5 mt-5 mb-3'>
                        <Button className='btn btn-primary btn-md me-4 ps-4 pe-4' type="submit">
                            Save
                        </Button>
                    </div>

                </div>
            </Form>
        </div>
    }
}

export default ContactUs;