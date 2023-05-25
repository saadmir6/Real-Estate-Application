import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Options from "./user_account/Options";
import Agents from "./property_options/Agents";
import Sell from "./property_options/Sell";
import Rent from "./property_options/Rent";
import Buy from "./property_options/Buy";
import SignUp from "./user_account/SignUp";
import LogIn from "./user_account/LogIn";
import BuyDetails from "./property_options/BuyDetails";
import RentDetails from "./property_options/RentDetails";
import ContactForm from "./main_page/ContactForm";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { BUY_URL, RENT_URL ,URL, IMAGES_URL } from "./Backend_URLS";
import "./index.css"


function App() {
  
  const [image, setImage] = useState([])
  const [multiple_images, setMultiple_images] = useState([])
  const [ buydata, setBuydata] = useState([])
  const [ rentdata, setRentdata] = useState([])
  const [ id, setId ] = useState('')

  const onImagechange = (e) =>{
      const selectedFiles = [];
      const targetFiles = e.target.files;
      const targetFilesObject = [...targetFiles]
      targetFilesObject.map((file)=>{
          
          return selectedFiles.push(global.URL.createObjectURL(file))
      })
      setImage(selectedFiles)
      console.log(image)
};

  const handleId = ( event, data ) =>{
    
    let Id = data.id
    console.log(data)
    console.log(Id)
    setId(Id)
    
    };


  useEffect(()=>{
      let url = [BUY_URL]
      const promise = url.map((url)=>axios.get(url))
      Promise.all(promise).then(responce=>{
          let data = [];
          responce.forEach(responce => {
              data = data.concat(responce.data);
          });
          setBuydata(data);
      })
  }, []);

  useEffect(()=>{
      let url = [RENT_URL]
      const promise = url.map((url)=>axios.get(url))
      Promise.all(promise).then(responce=>{
          let data = [];
          responce.forEach(responce => {
              data = data.concat(responce.data);
          });
          setRentdata(data);
      })
  }, []);

  useEffect(()=>{
      let url = [IMAGES_URL]
      const promise = url.map((url)=>axios.get(url))
      Promise.all(promise).then(responce=>{
          let data = [];
          responce.forEach(responce => {
              data = data.concat(responce.data);
          });
          setMultiple_images(data);
      })
  }, []);



  return (
    <div className="App">
        <Options />
        <Header/>
        <Routes>
          <Route  path="/" element={<Home images={multiple_images} />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/agents" element={<Agents />}/>
          <Route path="/sell" element={<Sell image={image} onImagechange={onImagechange}/>}/>
          <Route path="/buy" element={<Buy data={buydata} handleId={handleId}/>}/>
          <Route path="/buydetails" element={<BuyDetails data={buydata} ID={id}/>}/>
          <Route path="/rent" element={<Rent data={rentdata} handleId={handleId}/>}/>
          <Route path="/rentdetails" element={<RentDetails data={rentdata} ID={id}/>}/>
          <Route path="/contact" element={<ContactForm />}/>
        </Routes>
        < Footer />
    </div>
  );
}

export default App;
