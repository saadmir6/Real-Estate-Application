import { URL } from "../Backend_URLS";
import { Card } from "semantic-ui-react";
import { Placeholders } from "../values";
import { Link } from "react-router-dom";


const Buy = ( { data, handleId } ) => {

    return ( 
        <div className="buyitems">
            <Link to="/buydetails" >
                <Card.Group  itemsPerRow={2} key={data.id}>
                    {data.map(data=>

                        <Card id={data.id} 
                        onClick={handleId}
                        color="blue" 
                        image={URL+ data.cover_photo}
                        placeholder={Placeholders}
                        header={`${data.price} €`}
                        meta={`🛁${data.baths} 🛌${data.bedrooms}`}  
                        description={`${data.house_type}`}  
                        extra={data.street_name} /> )}
                </Card.Group>
            </ Link >
        </div> 
     );
}
 
export default Buy;