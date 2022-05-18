import { Form, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
import React, { Component } from 'react';
import axios from 'axios';
import { EditText, EditTextarea } from 'react-edit-text';
import { Link } from 'react-router-dom';
import 'react-edit-text/dist/index.css';

const Agent = props =>
(
    <div>
        <h3 className='text-primary text-center mb-4 mt-4'><strong>Agent</strong></h3>

        <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm={{ span: 3, offset: 1 }}>
                <strong>
                    Name:
                </strong>
            </Form.Label>
            <Col sm={8}>
                <EditText
                    type="text"
                    placeholder="Enter name"
                    defaultValue={props.agent.name}
                    readonly />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm={{ span: 3, offset: 1 }}>
                <strong>
                    Role:
                </strong>
            </Form.Label>
            <Col sm={8}>
                <EditText
                    type="text"
                    placeholder="Enter role"
                    defaultValue={props.agent.role}
                    readonly
                />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm={{ span: 3, offset: 1 }}>
                <strong>
                    Facebook Profile:
                </strong>
            </Form.Label>
            <Col sm={8}>
                <EditText
                    type="text"
                    placeholder="Paste facebook profile link"
                    defaultValue={props.agent.facebook}
                    readonly
                />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm={{ span: 3, offset: 1 }}>
                <strong>
                    Instagram Profile:
                </strong>
            </Form.Label>
            <Col sm={8}>
                <EditText
                    type="text"
                    placeholder="Paste instagram profile link"
                    defaultValue={props.agent.instagram}
                    readonly
                />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm={{ span: 3, offset: 1 }}>
                <strong>
                    Twitter Profile:
                </strong>
            </Form.Label>
            <Col sm={8}>
                <EditText
                    type="text"
                    placeholder="Paste twitter profile link"
                    defaultValue={props.agent.twitter}
                    readonly
                />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm={{ span: 3, offset: 1 }}>
                <strong>
                    LinkedIn Profile:
                </strong>
            </Form.Label>
            <Col sm={8}>
                <EditText
                    type="text"
                    placeholder="Paste linkedin profile link"
                    defaultValue={props.agent.linkedIn}
                    readonly
                />
            </Col>
        </Form.Group>

        <div className='text-center mt-4 mb-5'>
            <Link to={"/edit/" + props.agent._id} className="btn ps-3 pe-3 btn-primary">
                edit
            </Link>
            <a href="" onClick={() => { props.deleteAgent(props.agent._id); }} className="btn ps-2 pe-2 btn-primary ms-3">
                delete
            </a>
        </div>
        <br /><hr /><br /><br />
    </div>

)

export default class TeamMembers extends Component {
    constructor(props) {
        super(props);

        this.deleteAgent = this.deleteAgent.bind(this);

        this.state = {
            Agents: []
        };
    }


    componentDidMount()                                 //will run before the page is rendered and add the list of exercises to the state
    {
        axios.get('http://localhost:4000/TeamMembers/')
            .then(response => {
                this.setState({
                    Agents: response.data                       //Get all fields of exercises and set it in exercises array 
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    deleteAgent(id) {
        axios.delete('http://localhost:4000/TeamMembers/delete-teamMember/' + id)
            .then(res => alert(res.data))
            .catch(res => alert(res.data));
        this.setState({
            Agents: this.state.Agents.filter(a => a._id !== id)   //To exclude exercise with given id from table (_id is field in DB)
        })
    }

    AgentsList()                                               //This method iterates through the list of exercise items by using the map function. Each exercise item is output with the Exercise component. The current exercise item is assigned to the exercise property of this component.
    {
        return this.state.Agents.map(currentagent => {
            return <Agent agent={currentagent} deleteAgent={this.deleteAgent} key={currentagent._id} />;
        })
    }


    render() {
        return (
            <div>
                <h1 className='text-primary mb-5 text-center bg-white rounded p-4 me-5'>Team Members</h1>
                <div className=' ps-5 pt-5 pb-5 me-5 mb-5 bg-white rounded'>
                    <addAgent/>
                </div>

                <div className=' ps-5 pt-5 pb-5 me-5 mb-5 bg-white rounded'>
                    {
                        this.AgentsList()
                    }
                </div>
            </div>
        )
    }
}

const addAgent = props =>
(
    <div>
        <h3 className='text-primary text-center mb-4 mt-4'><strong>Add new Agent</strong></h3>

        <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm={{ span: 3, offset: 1 }}>
                <strong>
                    Name:
                </strong>
            </Form.Label>
            <Col sm={8}>
                <EditText
                    type="text"
                    placeholder="Enter name"
                    defaultValue={props.agent.name}
                    readonly />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm={{ span: 3, offset: 1 }}>
                <strong>
                    Role:
                </strong>
            </Form.Label>
            <Col sm={8}>
                <EditText
                    type="text"
                    placeholder="Enter role"
                    defaultValue={props.agent.role}
                />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm={{ span: 3, offset: 1 }}>
                <strong>
                    Facebook Profile:
                </strong>
            </Form.Label>
            <Col sm={8}>
                <EditText
                    type="text"
                    placeholder="Paste facebook profile link"
                    defaultValue={props.agent.facebook}
                />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm={{ span: 3, offset: 1 }}>
                <strong>
                    Instagram Profile:
                </strong>
            </Form.Label>
            <Col sm={8}>
                <EditText
                    type="text"
                    placeholder="Paste instagram profile link"
                    defaultValue={props.agent.instagram}
                />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm={{ span: 3, offset: 1 }}>
                <strong>
                    Twitter Profile:
                </strong>
            </Form.Label>
            <Col sm={8}>
                <EditText
                    type="text"
                    placeholder="Paste twitter profile link"
                    defaultValue={props.agent.twitter}
                />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm={{ span: 3, offset: 1 }}>
                <strong>
                    LinkedIn Profile:
                </strong>
            </Form.Label>
            <Col sm={8}>
                <EditText
                    type="text"
                    placeholder="Paste linkedin profile link"
                    defaultValue={props.agent.linkedIn}
                />
            </Col>
        </Form.Group>

        <div className='text-center mt-4 mb-5'>
            <Link to={"/edit/" + props.agent._id} className="btn ps-3 pe-3 btn-primary">
                edit
            </Link>
            <a href="" onClick={() => { props.deleteAgent(props.agent._id); }} className="btn ps-2 pe-2 btn-primary ms-3">
                delete
            </a>
        </div>

    </div>
)

// class ContactUs extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             Agents: []
//         }
//     }

//     componentDidMount() {

//         axios.get('http://localhost:4000/TeamMembers/')
//             .then(response => {
//                 if (response.data) {
//                     this.setState({

//                     });
//                 }
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     }

//     submitForm = (e) => {
//         e.preventDefault();
//         if (this.state.location.length > 5 && this.state.description.length > 50 && this.state.phoneNumber1.length > 5 && this.state.phoneNumber2.length > 5 && this.state.phoneNumber3.length > 5 && this.state.locationLink.length > 5 && this.state.timings1.length > 1 && this.state.timings2.length > 1 && this.state.timings3.length > 1 && this.state.facebook.length > 5 && this.state.twitter.length > 5 && this.state.instagram.length > 5 && this.state.skype.length > 5 && this.state.email.length > 5) {
//             const ContactUs =
//             {
//                 description: this.state.description,
//                 location: this.state.location,
//                 locationLink: this.state.locationLink,
//                 phoneNumber1: this.state.phoneNumber1,
//                 phoneNumber2: this.state.phoneNumber2,
//                 phoneNumber3: this.state.phoneNumber3,
//                 timings1: this.state.timings1,
//                 timings2: this.state.timings2,
//                 timings3: this.state.timings3,
//                 facebook: this.state.facebook,
//                 instagram: this.state.instagram,
//                 twitter: this.state.twitter,
//                 skype: this.state.skype,
//                 email: this.state.email,
//             };
//             console.log(ContactUs);
//             axios.post('http://localhost:4000/ContactUs/update', ContactUs)
//                 .then(res => alert("Updation Successfull"))
//                 .catch(res => alert("An unexpected Error occured" + res.data));
//         }
//         else {
//             alert("Make sure all fields are filled with sufficient length data");
//         }
//         // window.location = '/';
//     }

//     handleSave = ({ name }) => {
//         alert(name);
//     };

//     render() {
//         return <div>
//             <Form onSubmit={this.submitForm}>
//                 <h1 className='text-primary mb-5 text-center bg-white rounded p-4 me-5'>Contact Information</h1>
//                 <div className=' ps-5 pt-5 pb-5 me-5 mb-5 bg-white rounded'>

//                     <h3 className='text-primary mb-5'>Address and Contact Information</h3>
//                     <React.Fragment>
//                         <Form.Group as={Row} className="mb-3" >
//                             <Form.Label column sm={3}>
//                                 <strong>
//                                     Office Address:
//                                 </strong>
//                             </Form.Label>
//                             <Col sm={8}>
//                                 <EditText
//                                     type="text"
//                                     placeholder="Enter Address"
//                                     onSave={value => { this.setState({ location: value.value }) }}
//                                     defaultValue={this.state.location}
//                                     showEditButton
//                                     editButtonContent={<i class='bx bx-sm bx-pencil'></i>}
//                                 />
//                             </Col>
//                         </Form.Group>
//                     </React.Fragment>
//                     <Form.Group as={Row} className="mb-3" >
//                         <Form.Label column sm={3}>
//                             <strong>
//                                 Office location on Map:
//                             </strong>
//                         </Form.Label>
//                         <Col sm={8}>
//                             <EditText
//                                 type="text"
//                                 placeholder="Paste google map's link of office location here"
//                                 onSave={value => { this.setState({ locationLink: value.value }) }}
//                                 defaultValue={this.state.locationLink}
//                                 showEditButton
//                                 editButtonContent={<i class='bx bx-sm bx-pencil'></i>}
//                             />
//                         </Col>
//                     </Form.Group>


//                     <Form.Group as={Row} className="mb-3" >
//                         <Form.Label column sm={2}>
//                             <strong>
//                                 Email Address:
//                             </strong>
//                         </Form.Label>
//                         <Col sm={9}>
//                             <EditText
//                                 type="text"
//                                 defaultValue={this.state.email}
//                                 placeholder="Paste Email address here"
//                                 onSave={value => { this.setState({ email: value.value }) }}
//                                 showEditButton
//                                 editButtonContent={<i class='bx bx-sm bx-pencil'></i>}
//                             />
//                         </Col>
//                     </Form.Group>

//                     <div className='text-end mt-5 me-5 mt-5 mb-3'>
//                         <Button className='btn btn-primary btn-md me-4 ps-4 pe-4' type="submit">
//                             Save
//                         </Button>
//                     </div>

//                 </div>
//             </Form>
//         </div>
//     }
// }

// export default ContactUs;