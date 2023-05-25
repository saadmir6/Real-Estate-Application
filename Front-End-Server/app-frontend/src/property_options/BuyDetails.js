import { Slide } from "react-slideshow-image";
import { Form, Segment, Button } from "semantic-ui-react";
import {  URL } from "../Backend_URLS";
import { MessageBuy } from "../values";
import 'react-slideshow-image/dist/styles.css';

const BuyDetails = ({ data, ID }) => {
    

    let filtered = data.filter((data) => { return data.id === ID });
    return ( 
      <div>
        {filtered.map(data =>
        <Slide >
            {data.images.map((images)=>
            <div>
                <img style={{width: '100%'}} src={URL + images.image} alt="" />
            </div>
            )}
        </Slide>)}
       {filtered.map(data =>
        <div className="details" key={data.id}>
                <h1 className="street">
                {   `${data.house_number}
                    ${" "}
                    ${data.street_name},
                    ${" "}
                    ${data.postal_code},
                    ${" "}
                    ${data.locality}`
                    }
                    <h2 className="price">
                        {`${data.price} €`}
                    </h2>
                </h1>
                
                <br />

                <table>
                    <tr>
                        <th>BEDROOMS</th> 
                        <span></span>
                        <th>BATHS</th>
                        <span></span>
                        <th>AREA</th>
                        <span></span>
                        <th>GARAGE AREA</th>
                        <span></span>
                        <th>YEAR BUILT</th>
                    </tr>
                    <tr>
                        <td>
                            {data.bedrooms}
                        </td>
                        <span></span>
                        <td>
                            {data.baths}
                        </td>
                        <span></span>
                        <td>
                            {`${data.total_house_meter_square}m²`}
                        </td>
                        <span></span>
                        <td>
                            {`${data.garage_meter_square}m²`}
                        </td>
                        <span></span>
                        <td>
                            {data.year_biult}
                        </td>
                    </tr>
                </table>

                <section className="desc">
                        <p >
                            {data.desc}
                        </p>
                </section>

                <section className="message">
                <Form >
                    <Segment>
                        <h3 className="h3">I'm interested</h3>
                        <Form.Field>
                            
                            <Form.Input label="NAME:" placeholder="Enter your name" required/>
                            <Form.Input label="EMAIL:" placeholder="Enter your email" type="email" required />
                            <Form.Input label="PHONE NUMBER:" placeholder="Enter your phone number" type="number" />
                            <Form.TextArea label="MESSAGE " placeholder={`${MessageBuy}at ${data.house_number} ${data.street_name}...`} required/>

                        </Form.Field>
                        <Button type="submit" color="green" size="large">Submit</Button>
                    </Segment>
                </Form>
                </section>
        </div>
        )};
      </div>
     );
};
 
export default BuyDetails;