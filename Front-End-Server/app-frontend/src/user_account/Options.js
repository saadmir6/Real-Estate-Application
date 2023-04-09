import { Dropdown, Button} from "semantic-ui-react";
import { languageOptions } from "../values";


const Options = () => {
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
            <Button  href="/login" color="green" icon="user">Log In</Button>
        <div className="or">
            </div>          
                <Button  href="/signup" color="blue" icon="signup">Sign Up</Button>
            </div>
        </span>
        
        </div>);
        }
 
export default Options;