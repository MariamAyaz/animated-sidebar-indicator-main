import React, { useState } from "react";
import { Form, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import axios from "axios";


export default function AddAgent(props) {

    console.log(props.agent);
    let [name, setName] = useState(props.agent === undefined ? '' : props.agent.name);
    let [role, setRole] = useState(props.agent != undefined ? props.agent.role : '');
    let [facebook, setFacebook] = useState(props.agent != undefined ? props.agent.facebook : '');
    let [instagram, setInstagram] = useState(props.agent != undefined ? props.agent.instagram : '');
    let [twitter, setTwitter] = useState(props.agent != undefined ? props.agent.twitter : '');
    let [linkedIn, setLinkedIn] = useState(props.agent != undefined ? props.agent.linkedIn : '');

    function submit(event) {
        event.preventDefault();

        const Agent = {
            image: 'none',
            name: name,
            role: role,
            facebook: facebook,
            instagram: instagram,
            twitter: twitter,
            linkedIn: linkedIn,
        }

        axios.post('http://localhost:4000/TeamMembers/create-teamMember', Agent)
                .then(res => {alert("Agent added Successfully"); document.location.reload()})
                .catch(res => alert("An unexpected Error occured: " + res.data));
        }

    return (
        <div>
            <h3 className='text-primary text-center mb-4 mt-3 mb-5'><strong>Add new Agent</strong></h3>

            <Form onSubmit={submit}>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={{ span: 3, offset: 1 }}>
                        <strong>
                            Name:
                        </strong>
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            defaultValue={name}
                            onChange={(e) => setName(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={{ span: 3, offset: 1 }}>
                        <strong>
                            Role:
                        </strong>
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control
                            type="text"
                            placeholder="Enter role"
                            defaultValue={role}
                            onChange={(e) => setRole(e.target.value)}
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
                        <Form.Control
                            type="text"
                            placeholder="Paste facebook profile link"
                            defaultValue={facebook}
                            onChange={(e) => setFacebook(e.target.value)}
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
                        <Form.Control
                            type="text"
                            placeholder="Paste instagram profile link"
                            defaultValue={instagram}
                            onChange={(e) => setInstagram(e.target.value)}
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
                        <Form.Control
                            type="text"
                            placeholder="Paste twitter profile link"
                            defaultValue={twitter}
                            onChange={(e) => setTwitter(e.target.value)}
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
                        <Form.Control
                            type="text"
                            placeholder="Paste linkedin profile link"
                            defaultValue={linkedIn}
                            onChange={(e) => setLinkedIn(e.target.value)}
                        />
                    </Col>
                </Form.Group>

                <div className='text-center mt-5 mb-3'>
                    <Button className='btn btn-primary btn-md ms-2 ps-3 pe-3' type="submit">
                        Save
                    </Button>
                </div>
            </Form>
        </div>
    )
}