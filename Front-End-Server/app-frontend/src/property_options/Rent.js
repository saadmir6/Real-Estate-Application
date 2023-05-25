import { URL } from "../Backend_URLS";
import { Card } from "semantic-ui-react";
import { Placeholders } from "../values";
import { Link } from "react-router-dom";

const Rent = ( { data, handleId } ) => {
    return ( 
        <div className="buyitems">
            <Link to="/rentdetails" >
                <Card.Group  itemsPerRow={2} key={data.id}>
                    {data.map(data=>

                        <Card id={data.id} 
                        onClick={handleId}
                        color="blue" 
                        image={URL+ data.cover_photo}
                        placeholder={Placeholders}
                        header={`${data.price} € / month`}
                        meta={`🛁${data.baths} 🛌${data.bedrooms}`}  
                        description={`${data.street_name}`}  
                        extra={`Floor No.${data.floor_no}`} /> )}
                        
                </Card.Group>
            </ Link >
        </div> 
     );
}
 
export default Rent;