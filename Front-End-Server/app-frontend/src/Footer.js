import { Button } from "semantic-ui-react";
const Footer = () => {

    const today = new Date();
    return (

        <footer className="footer">
            <strong >Copyright &copy; {today.getFullYear()}</strong>
            <p style={{margin:"20px"}}>Follow us on:</p>
            <div>
            <Button circular color='facebook' icon='facebook' />
            <Button circular color='twitter' icon='twitter' />
            <Button circular color='linkedin' icon='linkedin' />
            <Button circular color='google plus' icon='google plus' />
            <Button circular color='instagram' icon='instagram' />
            </div>
        </footer>
     );
}
 
export default Footer;
