import { Dropdown, Button, Icon} from "semantic-ui-react";
import { languageOptions } from "../values";
import { Link, useNavigate } from "react-router-dom";



const Options = () => {
    const navigate = useNavigate()

    const go = () =>{
        navigate("/agents", {replace:true});
    }

    return ( 
        <div className="upper_nav">
            <Dropdown
            button
            className='icon'
            floating
            labeled
            icon='world'
            options={languageOptions}
            search
            text='Select Language'
        />

        
        <span className="account">
        <div className="ui large buttons">
            <Link to="/login">
                <Button color="green"><Icon name="user"></Icon> Log In</Button>
            </Link>
        <div className="or">
            </div>
            <Link to="/signup">
                <Button color="blue" ><Icon name="signup"></Icon>Sign Up</Button>
            </Link>          
            
                <Button color="blue" ><Icon name="signup" onClick={go}></Icon>test</Button>
                
        
            </div>
        </span>
        
        </div>
        )};
 
export default Options;