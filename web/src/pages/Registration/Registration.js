import React, { Component } from 'react'
import { Container, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import Notification from '../../services/notification/NotificationService'
import LoadingOverlay from '../../components/LoadingOverlay'

class Registration extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fullname: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: '',
            loading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange({ target }) {
        const { name, value } = target
        this.setState({
            [name]: value
        })
    }

    async handleSubmit(event) {

        try {

            event.preventDefault()
            this.setState({ loading: true })

            //const { email, password } = this.state

        } catch (e) {
            Notification.toastResponseException(e)
        } finally {
            this.setState({ loading: false })
        }
    }

    render() {
        const { fullname, phone, email, password, confirmPassword, loading } = this.state
        return (
            <section className="register-section">
                <Container>
                    <Row>
                        <Col xs={{ size:12 }} sm={{ size:8, offset:2 }} md={{ size:6, offset:3 }} lg={{ size:4, offset:4}}>
                            <h5 className="form-title text-light">Create your account</h5>
                            <div className="register-container">
                                <Form onSubmit={this.handleSubmit} className="register-form">
                                    <LoadingOverlay color={'#7d7d7d'} active={loading} />
                                    <FormGroup>
                                        <Label for="email">Full Name</Label>
                                        <Input
                                            value={fullname}
                                            type="text"
                                            name="fullname"
                                            id="fullname"
                                            placeholder="Type your full name"
                                            autoComplete="name"
                                            onChange={this.handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Phone Number</Label>
                                        <Input
                                            value={phone}
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            placeholder="Type your phone number"
                                            autoComplete="tel"
                                            onChange={this.handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input
                                            value={email}
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Type your email"
                                            autoComplete="email"
                                            onChange={this.handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="confirmPassword">Password</Label>
                                        <Input
                                            value={confirmPassword}
                                            type="password"
                                            name="confirmPassword"
                                            id="confirmPassword"
                                            placeholder="Retype your password"
                                            autoComplete="new-password"
                                            onChange={this.handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Confirm Password</Label>
                                        <Input
                                            value={password}
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="Type your password"
                                            autoComplete="new-password"
                                            onChange={this.handleChange} />
                                    </FormGroup>
                                    <div className="form-button-container">
                                        <Button color="link" className="mbutton default raised">Sign Up</Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Registration
