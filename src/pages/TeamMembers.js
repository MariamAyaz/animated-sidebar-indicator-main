import { Form, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
import React, { Component } from 'react';
import axios from 'axios';
import { EditText, EditTextarea } from 'react-edit-text';
import { Link } from 'react-router-dom';
import AddAgent from './AddAgent';
import 'react-edit-text/dist/index.css';

const Agent = props =>
(
    <div>
        <h3 className='text-primary text-center mb-4 mt-4 mb-5'><strong>Agent</strong></h3>

        <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm={{ span: 3, offset: 1 }}>
                <strong>
                    Name:
                </strong>
            </Form.Label>
            <Col sm={6}>
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
            <Col sm={6}>
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
            <Col sm={6}>
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
            <Col sm={6}>
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
            <Col sm={6}>
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
            <Col sm={6}>
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
        <br /><br /><br />
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
                <h1 className='text-primary mb-5 text-center bg-white rounded p-4 me-5 ps-5'>Team Members</h1>
                <div className=' ps-5 pt-5 pb-5 me-5 mb-5 bg-white rounded'>
                    <AddAgent/>
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
