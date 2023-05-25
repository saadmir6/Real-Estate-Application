import { useEffect, useState } from "react";
import axios from "axios";
import {Card} from "semantic-ui-react";
import { URL, AGENT_URL } from "../Backend_URLS";
import { Placeholders } from "../values";


const Agents = () => {

    const [ api, setApi] = useState([])

    useEffect(()=>{
        axios.get(AGENT_URL)
        .then((response) =>setApi(response.data))
    }, [])

    return ( 
        <Card.Group  itemsPerRow={3} key={api.id}>
            {api.map(api=>

                <Card  
                
                color="blue" 
                image={URL+ api.image} 
                placeholder={Placeholders} 
                header={api.name} 
                meta={api.age}  
                extra={api.phone_number} 
                description={api.email}  />
                
                )}
        </Card.Group> 
     );
}
 
export default Agents;