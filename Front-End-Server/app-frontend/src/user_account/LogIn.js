import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Segment, Icon, Message } from "semantic-ui-react";
import { LOGIN_URL } from "../Backend_URLS";
import axios from "axios";
const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
    try {
    const response = await axios.post(LOGIN_URL, { email, password });
    const { access, refresh } = response.data;

    
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);

    
    } catch (error) {
    console.error(error);
    }
    };

    return ( 
        <div className="login">
            <Form onSubmit={handleLogin}>
                <Segment >
                    <Form.Field width={15}>
                        <label>Email</label>
                        <input placeholder='Email' type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Field>
                        <span style={{margin:'130px'}}></span>
                    <Form.Field width={15}>
                        <label>Password</label>
                        <input placeholder='Password' type={"password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Field>
                    <span className="login_button">
                        <Button type='submit' color="green" size="large" width={10}>Log In</Button>  
                    </span>
                </Segment>
            </Form>
            <br />
            <Message attached='bottom' warning floating >
                <Icon name='help' />
                If you don't have an account &nbsp;<Link to='/signup'>Sign up here</Link>&nbsp;instead.
            </Message>           
        </div>
     );
}
 
export default LogIn;