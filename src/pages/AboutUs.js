import { Form, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
import React, { Component } from 'react';
import axios from 'axios';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

class AboutUs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            description: '',
            title1: '',
            title2: '',

            list1: '',
            list2: '',
            list3: '',
            list4: '',
            list5: '',
            list6: '',
            list7: '',

            SellProperty: '',
            DailyApartment: '',
            FamilyHouse: '',

            testimonial: '',
            ClientSay: '',
            line1: '',
            say1: '',
            say2: '',

            ClientName1: '',
            ClientName2: '',
            ClientPosition1: '',
            ClientPosition2: '',
        }
    }

    componentDidMount() {

        axios.get('http://localhost:4000/AboutUs/')
            .then(response => {
                if (response.data) {
                    this.setState({
                        description: response.data.description,
                        title1: response.data.title1,
                        title2: response.data.title2,

                        list1: response.data.list1,
                        list2: response.data.list2,
                        list3: response.data.list3,
                        list4: response.data.list4,
                        list5: response.data.list5,
                        list6: response.data.list6,
                        list7: response.data.list7,

                        SellProperty: response.data.SellProperty,
                        DailyApartment: response.data.DailyApartment,
                        FamilyHouse: response.data.FamilyHouse,

                        testimonial: response.data.testimonial,
                        ClientSay: response.data.ClientSay,
                        line1: response.data.line1,
                        say1: response.data.say1,
                        say2: response.data.say2,

                        ClientName1: response.data.ClientName1,
                        ClientName2: response.data.ClientName2,
                        ClientPosition1: response.data.ClientPosition1,
                        ClientPosition2: response.data.ClientPosition2,

                    });
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    submitForm = (e) => {
        e.preventDefault();
        if (this.state.description.length > 50 && this.state.list1.length > 5 && this.state.list2.length > 5 && this.state.list3.length > 5 && this.state.list4.length > 5 && this.state.list5.length > 5 && this.state.list6.length > 5 && this.state.list7.length > 5 && this.state.title1.length > 10 && this.state.title2.length > 5 && this.state.SellProperty.length > 30 && this.state.DailyApartment.length > 30 && this.state.FamilyHouse.length > 30 && this.state.testimonial.length > 10 && this.state.line1.length > 30 && this.state.say1.length > 30 && this.state.say2.length > 30 && this.state.ClientName1.length > 1 && this.state.ClientName2.length > 1 && this.state.ClientPosition1.length > 1 && this.state.ClientPosition2.length > 1) {
            const AboutUs =
            {
                description: this.state.description,
                title1: this.state.title1,
                title2: this.state.title2,

                list1: this.state.list1,
                list2: this.state.list2,
                list3: this.state.list3,
                list4: this.state.list4,
                list5: this.state.list5,
                list6: this.state.list6,
                list7: this.state.list7,

                SellProperty: this.state.SellProperty,
                DailyApartment: this.state.DailyApartment,
                FamilyHouse: this.state.FamilyHouse,

                testimonial: this.state.testimonial,
                ClientSay: this.state.ClientSay,
                line1: this.state.line1,
                say1: this.state.say1,
                say2: this.state.say2,

                ClientName1: this.state.ClientName1,
                ClientName2: this.state.ClientName2,
                ClientPosition1: this.state.ClientPosition1,
                ClientPosition2: this.state.ClientPosition2,

            };
            console.log(AboutUs);
            axios.post('http://localhost:4000/AboutUs/update', AboutUs)
                .then(res => alert("Updation Successfull"))
                .catch(res => alert("An unexpected Error occured" + res.data));
        }
        else {
            console.log(this.state.description.length, 50, this.state.list1.length, 5, this.state.list2.length, 5, this.state.list3.length, 5, this.state.list4.length, 5, this.state.list5.length, 5, this.state.list6.length, 5, this.state.list7.length, 5, this.state.title1.length, 10, this.state.title2.length, 5, this.state.SellProperty.length, 30, this.state.DailyApartment.length, 30, this.state.FamilyHouse.length, 30, this.state.testimonial.length, 10, this.state.line1.length, 30, this.state.say1.length, 30, this.state.say2.length, 30, this.state.ClientName1.length, 1 , this.state.ClientName2.length, 1, this.state.ClientPosition1.length, 1 , this.state.ClientPosition2.length, 1)
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
                <h1 className='text-primary mb-5 text-center bg-white rounded p-4 me-5'>About Us </h1>
                <div className=' ps-5 pt-5 pb-5 me-5 mb-5 bg-white rounded'>

                    <h3 className='text-primary mb-5 mt-4'><strong>About Us</strong></h3>
                    <React.Fragment>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm={3}>
                                <strong>
                                    Description Heading:
                                </strong>
                            </Form.Label>
                            <Col sm={8}>
                                <EditText
                                    type="text"
                                    placeholder="Enter description header"
                                    onSave={value => { this.setState({ title1: value.value }) }}
                                    defaultValue={this.state.title1}
                                    showEditButton
                                    editButtonContent={<i class='bx bx-sm bx-pencil'></i>}
                                />
                            </Col>
                        </Form.Group>
                    </React.Fragment>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={3}>
                            <strong>
                                Description Sub-heading:
                            </strong>
                        </Form.Label>
                        <Col sm={8}>
                            <EditText
                                type="text"
                                placeholder="Enter description sub-header"
                                onSave={value => { this.setState({ title2: value.value }) }}
                                defaultValue={this.state.title2}
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

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={3}>
                        </Form.Label>
                        <Col sm={3}>
                            <EditText
                                type="text"
                                placeholder="Enter salient features"
                                onSave={value => { this.setState({ list1: value.value }) }}
                                defaultValue={this.state.list1}
                                style={{ border: '1px solid #999' }}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={3}>
                        </Form.Label>
                        <Col sm={3}>
                            <EditText
                                type="text"
                                placeholder="Enter salient features"
                                onSave={value => { this.setState({ list2: value.value }) }}
                                defaultValue={this.state.list2}
                                style={{ border: '1px solid #999' }}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={3}>
                        </Form.Label>
                        <Col sm={3}>
                            <EditText
                                type="text"
                                placeholder="Enter salient features"
                                onSave={value => { this.setState({ list3: value.value }) }}
                                defaultValue={this.state.list3}
                                style={{ border: '1px solid #999' }}
                            />
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={3}>
                        </Form.Label>
                        <Col sm={3}>
                            <EditText
                                type="text"
                                placeholder="Enter salient features"
                                onSave={value => { this.setState({ list4: value.value }) }}
                                defaultValue={this.state.list4}
                                style={{ border: '1px solid #999' }}
                            />
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={3}>
                        </Form.Label>
                        <Col sm={3}>
                            <EditText
                                type="text"
                                placeholder="Enter salient features"
                                onSave={value => { this.setState({ list5: value.value }) }}
                                defaultValue={this.state.list5}
                                style={{ border: '1px solid #999' }}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={3}>
                        </Form.Label>
                        <Col sm={3}>
                            <EditText
                                type="text"
                                placeholder="Enter salient features"
                                onSave={value => { this.setState({ list6: value.value }) }}
                                defaultValue={this.state.list6}
                                style={{ border: '1px solid #999' }}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={3}>
                        </Form.Label>
                        <Col sm={3}>
                            <EditText
                                type="text"
                                placeholder="Enter salient features"
                                onSave={value => { this.setState({ list7: value.value }) }}
                                defaultValue={this.state.list7}
                                style={{ border: '1px solid #999' }}
                            />
                        </Col>
                    </Form.Group>

                    <h3 className='text-primary mb-5 mt-5'><strong>Services</strong></h3>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={3}>
                            <strong>
                                Sell Property:
                            </strong>
                        </Form.Label>
                        <Col sm={8}>
                            <EditText
                                type="text"
                                placeholder="Description"
                                defaultValue={this.state.SellProperty}
                                onSave={value => { this.setState({ SellProperty: value.value }) }}
                                showEditButton
                                editButtonContent={<i class='bx bx-sm bx-pencil'></i>}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={3}>
                            <strong>
                                Daily Apartment:
                            </strong>
                        </Form.Label>
                        <Col sm={8}>
                            <EditText
                                type="text"
                                placeholder="Description"
                                onSave={value => { this.setState({ DailyApartment: value.value }) }}
                                defaultValue={this.state.DailyApartment}
                                showEditButton
                                editButtonContent={<i class='bx bx-sm bx-pencil'></i>}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-5" >
                        <Form.Label column sm={3}>
                            <strong>
                                Family House:
                            </strong>
                        </Form.Label>
                        <Col sm={8}>
                            <EditText
                                type="text"
                                placeholder="Description"
                                defaultValue={this.state.FamilyHouse}
                                onSave={value => { this.setState({ FamilyHouse: value.value }) }}
                                showEditButton
                                editButtonContent={<i class='bx bx-sm bx-pencil'></i>}
                            />
                        </Col>
                    </Form.Group>

                    <h3 className='text-primary mb-4 mt-5'><strong>Testimonials</strong></h3>
                    <h5 className='text-primary mb-4 mt-4'><strong>Client 1</strong></h5>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={3}>
                            <strong>
                                Name:
                            </strong>
                        </Form.Label>
                        <Col sm={8}>
                            <EditText
                                type="text"
                                placeholder="client name"
                                defaultValue={this.state.ClientName1}
                                onSave={value => { this.setState({ ClientName1: value.value }) }}
                                showEditButton
                                editButtonContent={<i class='bx bx-sm bx-pencil'></i>}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={3}>
                            <strong>
                                Designation
                            </strong>
                        </Form.Label>
                        <Col sm={8}>
                            <EditText
                                type="text"
                                placeholder="Client designation"
                                onSave={value => { this.setState({ ClientPosition1: value.value }) }}
                                defaultValue={this.state.ClientPosition1}
                                showEditButton
                                editButtonContent={<i class='bx bx-sm bx-pencil'></i>}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={3}>
                            <strong>
                                Review:
                            </strong>
                        </Form.Label>
                        <Col sm={8}>
                            <EditTextarea
                                type="text"
                                placeholder="Client saying"
                                defaultValue={this.state.say1}
                                onSave={value => { this.setState({ say1: value.value }) }}
                                style={{ border: '1px solid #999' }}
                            />
                        </Col>
                    </Form.Group>

                    <h5 className='text-primary mb-4 mt-4'><strong>Client 2</strong></h5>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={3}>
                            <strong>
                                Name:
                            </strong>
                        </Form.Label>
                        <Col sm={8}>
                            <EditText
                                type="text"
                                placeholder="client name"
                                defaultValue={this.state.ClientName2}
                                onSave={value => { this.setState({ ClientName2: value.value }) }}
                                showEditButton
                                editButtonContent={<i class='bx bx-sm bx-pencil'></i>}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={3}>
                            <strong>
                                Designation
                            </strong>
                        </Form.Label>
                        <Col sm={8}>
                            <EditText
                                type="text"
                                placeholder="Client designation"
                                onSave={value => { this.setState({ ClientPosition2: value.value }) }}
                                defaultValue={this.state.ClientPosition2}
                                showEditButton
                                editButtonContent={<i class='bx bx-sm bx-pencil'></i>}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={3}>
                            <strong>
                                Review:
                            </strong>
                        </Form.Label>
                        <Col sm={8}>
                            <EditTextarea
                                type="text"
                                placeholder="Client saying"
                                defaultValue={this.state.say2}
                                onSave={value => { this.setState({ say2: value.value }) }}
                                style={{ border: '1px solid #999' }}
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

export default AboutUs;