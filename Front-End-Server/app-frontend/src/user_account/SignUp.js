import { Form, Button, Segment, Icon, Message } from "semantic-ui-react";




// NOTE: ADD ERRORS IF THERE IS TIME 
const SignUp = () => {
    return ( 
        <div className="signup">
            <Form>
                <Segment >
                <Form.Group  widths={2}>
                <Form.Input label='First name' placeholder='First name' required />
                <Form.Input label='Last name' placeholder='Last name' />
                </Form.Group>

                <Form.Input label='Password' placeholder='Password' type="password" width={10} required/>
                <Form.Input label='Phone' placeholder='Phone' width={10}/>
                <Form.Input label='Email' placeholder='Email' width={10} required />

                
                <Button type='submit'>Submit</Button>
                </Segment>
            </Form>
            <br />
            <Message attached='bottom' warning>
                <Icon name='help' />
                Already signed up?&nbsp;<a href='/login'>Login here</a>&nbsp;instead.
            </Message>
        </div>
     );
}
 
export default SignUp;
