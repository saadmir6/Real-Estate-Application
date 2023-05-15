
const BuyDetails = ({ data, ID }) => {

    let filtered = data.filter((data) => { return data.id === ID });
    return ( 
      <div>
        {console.log(filtered)}
      </div>
     );
}
 
export default BuyDetails;