import {
    Segment, 
    Form, 
    Button, 
    Header, 
    Icon, 
    FormInput, 
    Dropdown, 
    Menu, 
    FormGroup, 
    Divider, 
    TextArea,} from "semantic-ui-react";

import {options, terms} from "../values";
import { useContext, useState } from "react";


const Sell = ( {image, onImagechange} ) => {

    const [value, setValue] = useState('')
    const handleValue = e => {
        const result = e.target.value.replace(/\D/g, '')
        setValue(result)
        console.log(value)
    }

    
    return ( 
        <div className="sell_form">
            <Form method="POST">
                <Segment>
                    <Header size="large" >
                        Enter your address
                    </Header>
                    <br />
                    <FormGroup widths={4}>
                        <FormInput type="text" label="Street name"/>
                        <FormInput type="number" min="0" label="House number"/>
                        <FormInput type="text" min="0" value={value} onChange={handleValue} maxLength={6} label="Postal Code"/>
                        <FormInput type="text" label="Locality"/>
                    </FormGroup>
                    <br />
                    <Divider />
                    <Header size="large">
                        Set your price
                    </Header >
                    <FormInput icon="euro" type="number" className="input"></FormInput>
                    <Divider />
                    <br />
                    <Header  size="large">
                        <Icon name="images" size="large" />
                        Add your properties imagies
                    </Header>
                    <br />

                    <label className="image_upload"> 
                    <FormInput type="file" multiple accept="image/png, image/jpeg" onChange={onImagechange} placeholder="Upload your images here..." />                    
                    {image.map((url)=>{
                            return (
                                <img src={url} alt="" className="preview_image" />
                            )})} 
                    </label>
                    
                    <br />
                    <Divider />
                    <Header size="large">
                    <Icon name="home" />House Facts
                    </Header >

                    <label >House type</label>
                    <Form.Group  >
                        <Menu style={{width:"50%"}}>                          
                            <Dropdown fluid clearable options={options} selection placeholder="Select house type" width={100}/>
                        </Menu> 
                    </Form.Group>
                    <br />
                    <FormGroup widths={3}>                        
                        <Form.Input type="number" min="0" placeholder="Enter number of beds" label="Beds" icon="bed" />
                        <Form.Input type="number" min="0" placeholder="Enter number of baths" label="Baths"/>
                        <Form.Input type="number" min="0" placeholder="" label="Total rooms"/>
                    </FormGroup>
                    <br />
                    <FormGroup widths={3}>                        
                        <FormInput type="number" min="0"  label="Basement sq. ft."  />
                        <FormInput type="number" min="0"  label="Garage sq. ft."/>
                    </FormGroup>
                    <FormGroup widths={2}>
                        <Form.Input type="number" min="0" label="Total House sq. ft."  />
                        <Form.Input type="number" min="0" label="Lot size" placeholder="Lot size is the lawn area plus total sq. ft."  />
                    </FormGroup>
                    <FormInput type="month" label="Year built" width={5} >
                    </FormInput>
                    <TextArea  placeholder="Describe your propery" rows={6}></TextArea>
                    <br />
                    <Divider/>
            
                    <Header size="large">
                        Contact Information
                    </Header>
                    <p>
                        Potential buyers will contact you through the email you provided. <br />
                        But you must also add your phone number for better communication oppotunity.

                    </p>
                    <FormInput className="input" type="number" icon="phone" placeholder="30 694 9999999"></FormInput>
                    <br />
                    <Divider />
                    <Form.Checkbox label={terms} /> 
                    <br />
                    <Button  type="submit" color="blue"> Post for sale by the owner </ Button> 
                </Segment>
            </Form>
        </div>
       
     )
     ;
}
 
export default Sell;

