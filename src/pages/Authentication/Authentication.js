import React, { Component } from 'react'
import { Container, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { connect } from 'react-redux'
import { userLoggedIn } from '../../actions/actionApi'
import { CustomerAPI } from '../../api/Api'
import PropTypes from 'prop-types'

class Authentication extends Component {

    constructor(props) {
        super(props)
        this.state = { email: '', password: '' }
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleEmail(event) {
        this.handleChange('email', event.target.value)
    }

    handlePassword(event) {
        this.handleChange('password', event.target.value)
    }

    handleChange(field, value) {
        this.setState({
            [field]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const { onLoginSucceeded } = this.props
        const { email, password } = this.state
        if (email && password) {
            CustomerAPI.auth({ email, password })
                .then(({ data: token }) => {
                    onLoginSucceeded(token)
                    toast.success('You have signed in successfully!', {
                        position: toast.POSITION.BOTTOM_LEFT
                    })
                })
                .catch(error => {
                    if (error.response) {
                        toast.error(error.response.data.error, {
                            position: toast.POSITION.BOTTOM_LEFT
                        })
                    } else {
                        toast.error('Unknown error', {
                            position: toast.POSITION.BOTTOM_LEFT
                        })
                    }
                })
        } else {
            toast.error('Please, inform your email and password', {
                position: toast.POSITION.BOTTOM_LEFT
            })
        }
    }

    render() {
        const { email, password } = this.state
        return (
            <Container className="auth-container">
                <Row>
                    <Col sm={{ size: 6, offset: 3 }}>
                        <div className="auth-form">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="examemailpleEmail">Email</Label>
                                    <Input 
                                        value={email} 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        placeholder="Type your email" 
                                        autoComplete="username" 
                                        onChange={this.handleEmail} />
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
                                        onChange={this.handlePassword} />
                                </FormGroup>
                                <Button className="default-button">Sign In</Button>
                                <Link className="btn-action" to="/home">Dashboard Shortcut</Link>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
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
