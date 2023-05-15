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
import { Route, Routes } from "react-router-dom";
import "./index.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { BUY_URL, URL } from "./Backend_URLS";


function App() {
  
  const [image, setImage] = useState([])
  const [ buydata, setBuydata] = useState([])
  const [ id, setId ] = useState('')

  const onImagechange = (e) =>{
      const selectedFiles = [];
      const targetFiles = e.target.files;
      const targetFilesObject = [...targetFiles]
      targetFilesObject.map((file)=>{
          
          return selectedFiles.push(URL.createObjectURL(file))
      })
      setImage(selectedFiles)
}


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



  return (
    <div className="App">
        <Options />
        <Header/>
        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/agents" element={<Agents />}/>
          <Route path="/sell" element={<Sell image={image} onImagechange={onImagechange}/>}/>
          <Route path="/rent" element={<Rent />}/>
          <Route path="/buy" element={<Buy data={buydata} handleId={handleId}/>}/>
          <Route path="/buydetails" element={<BuyDetails data={buydata} ID={id}/>}/>
        </Routes>
        < Footer />
    </div>
  );
}

export default App;
