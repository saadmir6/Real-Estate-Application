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
import { BrowserRouter,Routes,Route} from "react-router-dom";
import "./index.css"
import { useState } from "react";



function App() {
  
  const [image, setImage] = useState([])


  const onImagechange = (e) =>{
      const selectedFiles = [];
      const targetFiles = e.target.files;
      const targetFilesObject = [...targetFiles]
      targetFilesObject.map((file)=>{
          
          return selectedFiles.push(URL.createObjectURL(file))
      })
      setImage(selectedFiles)
}
  
  return (


    <div className="App">
       
        <Options />
        <Header/>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/agents" element={<Agents />}/>
          <Route path="/sell" element={<Sell image={image} onImagechange={onImagechange}/>}/>
          <Route path="/rent" element={<Rent />}/>
          <Route path="/buy" element={<Buy />}/>
        </Routes>
      </BrowserRouter>
        < Footer />
    </div>
  );
}

export default App;
