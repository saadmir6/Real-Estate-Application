import { Form, Button, Segment, Icon, Message } from "semantic-ui-react";

const LogIn = () => {
    return ( 
        <div className="login">
            <Form >
                <Segment >
                    <Form.Field width={15}>
                        <label>Email</label>
                        <input placeholder='Email' type={"email"} />
                    </Form.Field>
                        <span style={{margin:'130px'}}></span>
                    <Form.Field width={15}>
                        <label>Password</label>
                        <input placeholder='Password' type={"password"}/>
                    </Form.Field>
                    <span className="login_button">
                        <Button type='submit' color="green" size="large" width={10}>Log In</Button>  
                    </span>
                </Segment>
            </Form>
            <br />
            <Message attached='bottom' warning>
                <Icon name='help' />
                If you dont have an account.&nbsp;<a href='/signup'>Sign Up here.</a>&nbsp;
            </Message>
           
        </div>
     );
}
 
export default LogIn;