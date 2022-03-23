import React, { Component } from 'react';
// import { variables } from '../Variables';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';



class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state={
            Logins:[],
            EmailId:"",
            Password:""
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = {  }

    handleChangeEmail = async (e) => {
        this.setState({EmailId: e.target.value});
    }

    handleChangePassword = async (e) => {
        this.setState({Password: e.target.value});
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const login_obj = {EmailId:this.state.EmailId,
                            Password:this.state.Password};
    }

    render() { 
        return ( 
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={this.state.EmailId} onChange={this.handleChangeEmail} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" value={this.state.Password} onChange={this.handleChangePassword} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e)=>{this.handleSubmit(e)}}>
                        Sign In
                    </Button>
                    </Form>
            </div>
         );
    }
}
 
export default SignIn;