import Sell from "./property_options/Sell";
import { useContext, useState} from "react";



const States = () => {

    
    return ( 
        <div>
            
            <Sell image={image}
                onImagechange={onImagechange} />
        

            
        </div>
        
     );
}
 
export default States;