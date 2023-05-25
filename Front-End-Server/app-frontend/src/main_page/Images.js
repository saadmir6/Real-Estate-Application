import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import {  URL } from "../Backend_URLS";

const Images = ({ images }) => {
    return ( 
      <div >
        
           <Slide >
                {images.map((images)=>
                <div >
                    <img style={{width:"100%"}}  src={URL + images.images} alt="" />
                </div>
                )}
            
            </Slide>
        
      </div>
     
      
        

     );
}
 
export default Images;