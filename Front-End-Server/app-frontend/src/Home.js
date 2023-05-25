import Navbar from "./main_page/NavBar";
import Images from "./main_page/Images";
import ContactOpts from "./main_page/ContactOptions";


const Home = ({ images }) => {
    return (  
        <div className="home">
            <Navbar />
            <hr />
            <h2 style={{"ntFamily":"inherit", margin:"30px 50px"}}>Properties in Athens</h2> 

            <div>

                <Images images={images} />

            </div>

            <ContactOpts />
                    
        </div>
    );
}
 
export default Home;