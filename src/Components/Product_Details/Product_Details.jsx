import { useParams } from "react-router-dom";
const Product_Details = () => {
    const {url} = useParams();
    console.log(url);
    return (
        <div>
           
        </div>
    );
};

export default Product_Details;