import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Segment, Icon, Message } from "semantic-ui-react";
import { SIGNUP_URL } from "../Backend_URLS";
import axios from "axios";

const SignUp = () => {
    const [ first_name, setFirst_name] = useState("");
    const [ last_name, setLast_name ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ phone_number, setPhone_number ] = useState("");
    const [ email, setEmail ] = useState("");

    const handleFirstname = (e) =>{
        e.preventDefault();
        setFirst_name(e.target.value);
    };

    const handleLastname = (e) =>{
        e.preventDefault();
        setLast_name(e.target.value);
    }

    const handleEmail = (e) =>{
        e.preventDefault();
        console.log(e.target.files);
        setEmail(e.target.value);
    };
    const handlePhone = (e) =>{
        e.preventDefault();
        console.log(e.target.files);
        setPhone_number(e.target.value);
    };
    const handlePassword = (e) =>{
        e.preventDefault();
        console.log(e.target.files);
        setPassword(e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(first_name, last_name, password, email, phone_number);
        let form_data = new FormData();

        form_data.append("first_name", first_name);
        form_data.append("last_name", last_name);
        form_data.append("password", password);
        form_data.append("phone_number", phone_number);
        form_data.append("email", email);

        let url = SIGNUP_URL;

        axios.post(
            url,
            form_data, {
            headers:{
                "content-type": "multipart/form-data",

            },
        }).then((res)=>{
            console.log(res.data);
        }).catch((err)=>console.log(err));

        setFirst_name("");
        setLast_name("");
        setPassword("");
        setEmail("");
        setPhone_number("");
    };
    return ( 
        <div className="signup">
            <Form onSubmit={handleSubmit}>
                <Segment >
                <Form.Group  widths={2}>
                <Form.Input label='First name' placeholder='First name' value={first_name} onChange={handleFirstname} required />
                <Form.Input label='Last name' placeholder='Last name'  value={last_name} onChange={handleLastname}/>
                </Form.Group>

                <Form.Input label='Password' placeholder='Password' type="password" width={10}  value={password} onChange={handlePassword} required/>
                <Form.Input label='Phone' placeholder='Phone' width={10}  value={phone_number} onChange={handlePhone}/>
                <Form.Input label='Email' placeholder='Email' width={10} value={email} onChange={handleEmail} required />

                
                <Button type='submit'>Submit</Button>
                </Segment>
            </Form>
            <br />
            <Message attached='bottom' warning>
                <Icon name='help' />
                Already signed up?&nbsp;<Link to='/login'>Login here</Link>&nbsp;instead.
            </Message>
        </div>
     );
}
 
export default SignUp;
