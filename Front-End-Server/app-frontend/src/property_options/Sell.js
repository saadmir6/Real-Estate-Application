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
import { BUY_URL } from "../Backend_URLS";
import { useState } from "react";

const Sell = ( {image, onImagechange, handleLoginData} ) => {

    handleLoginData();

    const [street_name, setStreet_name] = useState('')
    const [house_number, setHouse_number] = useState('')
    const [postal_code, setPostal_code] = useState('')
    const [locality, setLocality] = useState('')
    const [method, setMethod] = useState('')
    const [price, setPrice] = useState('')
    const [cover_photo, setCover_photo] = useState([])
    const [uploaded_images, setUploaded_images] = useState([])
    const [house_type, setHouse_type] = useState('')
    const [bedrooms, setBedrooms] = useState('')
    const [baths, setBaths] = useState('')
    const [basement_meter_square, setBasement_meter_square] = useState('')
    const [garage_meter_square, setGarage_meter_square] = useState('')
    const [total_house_meter_square, setTotal_house_meter_square] = useState('')
    const [total_apartment_meter_square, setTotal_apartment_meter_square] = useState('')
    const [year_biult, setYear_biult] = useState('')
    const [desc, setDesc] = useState('')
    const [contact_phone, setContact_phone] = useState('')
    
    
    const handleStreet_name = (e) =>{
        e.preventDefault();
        setStreet_name(e.target.value);
    };
    const handleHouse_number = (e) =>{
        e.preventDefault();
        setHouse_number(e.target.value);
    };
    const handlePostal_code = (e) =>{
        e.preventDefault();
        const result = e.target.value.replace(/\D/g, '')
        setPostal_code(result);
    };
    const handleLocality = (e) =>{
        e.preventDefault();
        setLocality(e.target.value);
    };
    const handleMethod = (e) =>{
        e.preventDefault();
        setMethod(e.target.value);
    };
    const handlePrice = (e) =>{
        e.preventDefault();
        setPrice(e.target.value);
    };
    const handleCover_photo = (e) =>{
        e.preventDefault();
        setCover_photo(e.target.files[0]);
    };
    const handleUploaded_images = (e) =>{
        e.preventDefault();
        const selectedFiles = [];
        const targetFiles = e.target.files;
        const targetFilesObject = [...targetFiles]
        setUploaded_images(targetFilesObject);
    };
    const handleHouse_type = (e) =>{
        e.preventDefault();
        setHouse_type(e.target.value);
    };
    const handleBedrooms = (e) =>{
        e.preventDefault();
        setBedrooms(e.target.value);
    };
    const handleBaths = (e) =>{
        e.preventDefault();
        setBaths(e.target.value);
    };
    const handleBasement = (e) =>{
        e.preventDefault();
        setBasement_meter_square(e.target.value);
    };
    const handleGarage = (e) =>{
        e.preventDefault();
        setGarage_meter_square(e.target.value);
    };
    const handleTotal_house_meter_square = (e) =>{
        e.preventDefault();
        setTotal_house_meter_square(e.target.value);
    };
    const handleTotal_apartment_meter_square = (e) =>{
        e.preventDefault();
        setTotal_apartment_meter_square(e.target.value);
    };
    const handleYear_biult = (e) =>{
        e.preventDefault();
        setYear_biult(e.target.value);
    };
    const handleDesc = (e) =>{
        e.preventDefault();
        setDesc(e.target.value);
    };
    const handleContact_phone = (e) =>{
        e.preventDefault();
        setContact_phone(e.target.value);
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        let form_data = new FormData();

        form_data.append("street_name", street_name);
        form_data.append("house_number", house_number);
        form_data.append("postal_code", postal_code);
        form_data.append("locality", locality);
        form_data.append("method", method);
        form_data.append("price", price);
        form_data.append("cover_photo", cover_photo);
        form_data.append("uploaded_images", uploaded_images);
        form_data.append("house_type", house_type);
        form_data.append("bedrooms", bedrooms);
        form_data.append("baths", baths);
        form_data.append("basement_meter_square", basement_meter_square);
        form_data.append("garage_meter_square", garage_meter_square);
        form_data.append("total_house_meter_square", total_house_meter_square);
        form_data.append("total_apartment_meter_square", total_apartment_meter_square);
        form_data.append("year_biult", year_biult);
        form_data.append("desc", desc);
        form_data.append("contact_phone", contact_phone);

        let url = BUY_URL;

        axios.post(
            url,
            form_data, {
            headers:{
                "content-type": "multipart/form-data",

            },
        }).then((res)=>{
            console.log(res.data);
        }).catch((err)=>console.log(err));

        setStreet_name("");
        setHouse_number("");
        setPostal_code("");
        setLocality("");
        setMethod("");
        setPrice("");
        setCover_photo([]);
        setUploaded_images([]);
        setHouse_type("");
        setBedrooms("");
        setBaths("");
        setBasement_meter_square("");
        setGarage_meter_square("");
        setTotal_house_meter_square("");
        setTotal_apartment_meter_square("");
        setYear_biult("");
        setDesc("");
        setContact_phone("");
        
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
                        <FormInput type="text" label="Street name" value={street_name} onChange={handleStreet_name}/>
                        <FormInput type="number" min="0" label="House number" value={house_number} onChange={handleHouse_number}/>
                        <FormInput type="text" min="0" value={postal_code} onChange={handlePostal_code} maxLength={6} label="Postal Code"/>
                        <FormInput type="text" label="Locality" value={locality} onChange={handleLocality}/>
                    </FormGroup>
                    <br />
                    <Divider />
                    <Header size="large">
                        Select your method
                    </Header >
                    <label className="drop">
                    <Dropdown  fluid clearable options={type_options} selection placeholder="Select your method" value={method} onChange={handleMethod} />
                    </label>
                    <Header size="large">
                        Set your price based on your method
                    </Header >
                    <FormInput icon="euro" type="number" className="input" value={price} onChange={handlePrice}></FormInput>
                    <br />

                    <Header  size="large">
                        <Icon name="images" size="large" />
                        Add the cover image of your propery
                    </Header>
                    <br />

                    <label className="image_upload"> 
                    <FormInput type="file"  accept="image/png, image/jpeg" value={cover_photo} onChange={handleCover_photo} placeholder="Upload your images here..." />                    
                    {image.map((url)=>{
                            return (
                                <img src={url} alt="" className="preview_image" />
                            )})} 
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
                    <FormInput type="file" multiple accept="image/png, image/jpeg" value={uploaded_images} onChange={handleUploaded_images} placeholder="Upload your images here..." />                    
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
                            <Dropdown fluid clearable options={options} selection placeholder="Select house type" value={house_type} onChange={handleHouse_type} />
                        </Menu> 
                    </Form.Group>
                    <br />
                    <FormGroup widths={3}>                        
                        <Form.Input type="number" min="0" placeholder="Enter number of bedrooms" label="Bedrooms" icon="bed" value={bedrooms} onChange={handleBedrooms} />
                        <Form.Input type="number" min="0" placeholder="Enter number of baths" label="Baths" value={baths} onChange={handleBaths} />
                        
                    </FormGroup>
                    <br />
                    <FormGroup widths={2}>                        
                        <FormInput type="number" min="0"  label="Basement m²" value={basement_meter_square} onChange={handleBasement} />
                        <FormInput type="number" min="0"  label="Garage m²" value={garage_meter_square} onChange={handleGarage} />
                    </FormGroup>
                    <FormGroup widths={2}>
                        <Form.Input type="number" min="0" label="Total House m²" value={total_house_meter_square} onChange={handleTotal_house_meter_square} />
                        <Form.Input type="number" min="0" label="Total Apartment m²" value={total_apartment_meter_square} onChange={handleTotal_apartment_meter_square}  />
                    </FormGroup>
                    <FormInput type="month" label="Year built" width={5} value={year_biult} onChange={handleYear_biult} >
                    </FormInput>
                    <TextArea  placeholder="Describe your propery" rows={6} value={desc} onChange={handleDesc} />
                    <br />
                    <Divider/>
            
                    <Header size="large">
                        Contact Information
                    </Header>
                    <p>
                        Potential buyers will contact you through the email you provided. <br />
                        But you must also add your phone number for better communication oppotunity.

                    </p>
                    <FormInput className="input" type="number" icon="phone" placeholder="30 694 9999999" value={contact_phone} onChange={handleContact_phone} />
                    <br />
                    <Divider />
                    <Form.Checkbox label={terms} /> 
                    <br />
                    {
                        handleLoginData.isLoggedIn === true 
                        ?  
                        <Button  type="submit" color="blue" onClick={handleSubmit}> Post for sale by the owner </ Button> 
                        :
                        <Button  type="submit" color="blue" disabled onClick={handleSubmit}> Post for sale by the owner </ Button> 
                    }
                </Segment>
            </Form>
        </div>
       
     )
     ;
}
 
export default Sell;

