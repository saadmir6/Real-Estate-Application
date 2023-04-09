import {Card, Image, Placeholder} from "semantic-ui-react";
import agent from "../images/agent.jpg";


const Placeholders = <Placeholder>
                            <Placeholder.Image rectangular/>
                    </Placeholder>
// REMAX AGETNS EXAMPLE
const Agents = () => {
    return ( 
        <Card.Group itemsPerRow={3}>
            <Card fluid color="red"  meta="hello" header="hello" extra="helloish" description="heloishish"  image={Placeholders}/>
            <Card><Card.Content>
                <Image src={agent} ></Image>
                <Card.Header textAlign="center">Matthew Harris</Card.Header>
                        <Card.Meta textAlign="center" >Co-Worker</Card.Meta>
                        <Card.Description textAlign="center">
                        Matthew is a pianist living in Nashville.
                        </Card.Description>
                    </Card.Content> 
               </Card>
            <Card image={<Placeholder.Image/>}/>
            <Card image={Placeholders}/>
            <Card image={Placeholders}/>
            <Card image={Placeholders}/>
            <Card image={Placeholders}/>
            <Card image={Placeholders}/>
            <Card image={Placeholders}/>
            <Card image={Placeholders}/>

        </Card.Group>
     );
}
 
export default Agents;