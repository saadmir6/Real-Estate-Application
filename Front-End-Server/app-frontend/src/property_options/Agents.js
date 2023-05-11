import { useEffect, useState } from "react";
import axios from "axios";
import {Card, Placeholder} from "semantic-ui-react";
import { URL, AGENT_URL } from "../Backend_URLS";

const Placeholders = <Placeholder>
                            <Placeholder.Image rectangular/>
                    </Placeholder>

const Agents = () => {

    const [ api, setApi] = useState([])

    useEffect(()=>{
        axios.get(AGENT_URL)
        .then((response) =>setApi(response.data))
        .then((response) =>(console.log(response)))
    }, [])

    return ( 
        <Card.Group  itemsPerRow={3} key={api.id}>
            {api.map(api=>

                <Card  color="blue" image={URL+ api.image} placeholder={Placeholders} header={api.name} meta={api.age}  extra={api.phone_number} description={api.email}  />
                
                )}
        </Card.Group> 
     );
}
 
export default Agents;