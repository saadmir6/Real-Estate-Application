import { Item, Label } from "semantic-ui-react";
import FirstImg from '../images/FirstImg.jpg';

const Properties = () => {
    return ( 
        <Item.Group divided>
        <Item>
          <Item.Image src={FirstImg} size="big"/>
    
          <Item.Content>
            <Item.Header as='a'>12 Years a Slave</Item.Header>
            <Item.Meta>
              <span className='cinema'>Union Square 14</span>
            </Item.Meta>
            <Item.Description>nothing</Item.Description>
            <Item.Extra>
             
            </Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image src={FirstImg} size="large" />
    
          <Item.Content>
            <Item.Header as='a'>12 Years a Slave</Item.Header>
            <Item.Meta>
              <span className='cinema'>Union Square 14</span>
            </Item.Meta>
            <Item.Description>nothing</Item.Description>
            <Item.Extra>
              <Label>IMAX</Label>
              <Label icon='globe' content='Additional Languages' />
            </Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image src={FirstImg} size="medium"/>
    
          <Item.Content>
            <Item.Header as='a'>12 Years a Slave</Item.Header>
            <Item.Meta>
              <span className='cinema'>Union Square 14</span>
            </Item.Meta>
            <Item.Description>nothing</Item.Description>
            <Item.Extra>
              <Label>IMAX</Label>
              <Label icon='globe' content='Additional Languages' />
            </Item.Extra>
          </Item.Content>
        </Item>
        </ Item.Group>
        

     );
}
 
export default Properties;