import React, { Component } from 'react'
import { Container, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { userLoggedIn } from '../../actions/actionApi'
import SecurityAPI from '../../services/api/Security'
import Notification from '../../services/notification/NotificationService'

class Authentication extends Component {

    constructor(props) {
        super(props)
        this.state = { email: '', password: '' }
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
            const { onLoginSucceeded } = this.props
            const { email, password } = this.state
            if (email && password) {
                const { data } = await SecurityAPI.auth({ email, password })
                const { token } = data
                onLoginSucceeded(token)
                Notification.toastSuccess('Success', 'You have signed in successfully!')
            } else {
                Notification.toastError('Error', 'Please, inform your email and password')
            }
        } catch (e) {
            Notification.toastResponseException(e)
        }
    }

    render() {
        const { email, password } = this.state
        return (
            <section className="auth-section">
                <Container>
                    <Row>
                        <Col xs={{ size:12 }} sm={{ size:8, offset:2 }} md={{ size:6, offset:3 }} lg={{ size:4, offset:4}}>
                            <h5 className="form-title text-light">Access you account</h5>
                            <div className="auth-container">
                                <Form onSubmit={this.handleSubmit} className="auth-form">
                                    <FormGroup>
                                        <Label for="examemailpleEmail">Email</Label>
                                        <Input
                                            value={email}
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Type your email"
                                            autoComplete="username"
                                            onChange={this.handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input
                                            value={password}
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="Type your password"
                                            autoComplete="current-password"
                                            onChange={this.handleChange} />
                                    </FormGroup>
                                    <div className="form-button-container">
                                        <Button color="link" className="mbutton default raised">Sign In</Button>
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

Authentication.propTypes = {
    onLoginSucceeded: PropTypes.func.isRequired
}

const mapStateToProps = ({ authentication }) => ({})

const mapDispatchToProps = dispatch => ({
    onLoginSucceeded: token => dispatch(userLoggedIn(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(Authentication)
