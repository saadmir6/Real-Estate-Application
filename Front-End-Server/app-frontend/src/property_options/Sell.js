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

import {options,type_options, terms} from "../values";
import { useState } from "react";


const Sell = ( {image, onImagechange} ) => {

    const [value, setValue] = useState('')
    const [cover_image, setCover_image] = useState(null)

    const handleValue = e => {
        const result = e.target.value.replace(/\D/g, '')
        setValue(result)
        console.log(value)
    }



    const handleImage = (e) =>{
        e.preventDefault();
        console.log(e.target.files);
        setCover_image(e.target.files[0]);
    };

    

    
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
                        Select your method
                    </Header >
                    <label className="drop">
                    <Dropdown  fluid clearable options={type_options} selection placeholder="Select house type"  />
                    </label>
                    <Header size="large">
                        Set your price based on your method
                    </Header >
                    <FormInput icon="euro" type="number" className="input"></FormInput>
                    <br />

                    <Header  size="large">
                        <Icon name="images" size="large" />
                        Add the cover image of your propery
                    </Header>


                    <label className="image_upload">
                    <FormInput type="file" accept="image/png, image/jpeg" onChange={handleImage} placeholder="Upload your image here..." /> 
                    {/* {cover_image.map((url)=>{
                            return (
                                <img src={url} alt="" className="preview_image" />
                            )})}       */}
                    </label>  


                    <br />
                    <Divider />
                    <br />
                    <Header  size="large">
                        <Icon name="images" size="large" />
                        Add your properties images
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
                        <Menu className="drop">                          
                            <Dropdown fluid clearable options={options} selection placeholder="Select house type" />
                        </Menu> 
                    </Form.Group>
                    <br />
                    <FormGroup widths={3}>                        
                        <Form.Input type="number" min="0" placeholder="Enter number of bedrooms" label="Bedrooms" icon="bed" />
                        <Form.Input type="number" min="0" placeholder="Enter number of baths" label="Baths"/>
                        
                    </FormGroup>
                    <br />
                    <FormGroup widths={2}>                        
                        <FormInput type="number" min="0"  label="Basement m²"  />
                        <FormInput type="number" min="0"  label="Garage m²"/>
                    </FormGroup>
                    <FormGroup widths={2}>
                        <Form.Input type="number" min="0" label="Total House m²"  />
                        <Form.Input type="number" min="0" label="Total Apartment m²"  />
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

