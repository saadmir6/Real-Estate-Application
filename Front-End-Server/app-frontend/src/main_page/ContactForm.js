import { Form, Segment, Button} from "semantic-ui-react";

const ContactForm = () => {
    return ( 
        <section className="contactform">
                <Form >
                    <Segment>
                        <Form.Field>
                            
                            <Form.Input label="NAME:" placeholder="Enter your name" required/>
                            <Form.Input label="EMAIL:" placeholder="Enter your email" type="email" required />
                            <Form.TextArea label="MESSAGE " placeholder="Write your message..." required/>

                        </Form.Field>
                        <Button type="submit" color="green" size="large">Submit</Button>
                    </Segment>
                </Form>
                </section>
     );
}
 
export default ContactForm;