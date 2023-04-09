import Navbar from "./main_page/NavBar";
import Properties from "./main_page/Properties";
import ContactOpts from "./main_page/ContactOptions";

const Home = () => {
    return (  
        <div className="home">
            <Navbar />
            <hr />
            <h2 style={{"font-family":"inherit", margin:"30px 50px"}}>Properties in Athens</h2>
                <ul style={{'list-style-type':"none"}}>
                    <li >
                        <Properties />
                    </li>
                </ul>
                <ContactOpts />
                    
            </div>
            
     
        
    );
}
 
export default Home;