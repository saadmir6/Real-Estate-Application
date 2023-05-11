import { Button, Grid, Segment, Item } from "semantic-ui-react";
import agent from '../images/agent.jpg';
import contact from '../images/contact.jpg';


const ContactOpts = () => {
    return ( 
        <div className="Segment_block">
           
            <Segment   textAlign="center" >
                    <Grid >
                    <Grid.Column>
                        <Item.Image src={agent} size="huge"/>
                        <Item.Description className="Contact_desc">You need an agent with the correct contacts, technology, and tactics to realize your home buying or selling goal given the dearth of properties now available on the Greek market. You can trust that our application has the perfect agent for every level of service, in any market scenario, whether you're feeling overwhelmed and want someone to take the reins or you simply need a second opinion and you've got it covered.
                        </Item.Description>
                        <Button content="FIND AN AGENT"  icon="user" color="blue" size="large" inverted href="/agents"></Button>
                    </Grid.Column>
                    </Grid>
                     </Segment>

            <Segment compact  textAlign="center"  >
                    <Grid.Column >
                        <Item.Image src={contact} size="large"/>
                        <Item.Description className="Contact_desc" >
                            If you want to ask a question or want to know more about Real Estate Athens feel free to contact us!
                        </Item.Description>
                        <Button content='CONTACT US' icon='mail' size='large' color="red" inverted  />
                    </Grid.Column>
                    </Segment>
                    
                    
            </div>
     );
}
 
export default ContactOpts;