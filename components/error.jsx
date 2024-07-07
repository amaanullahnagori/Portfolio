import { useRouteError } from "react-router-dom"
import image from "../components/images/Error.jpg"
const Errors=()=>{
    const e=useRouteError();
     const message=e.statusText;
     const sta=e.status;
    return (<>
    <div className="errorDiv">
    <h2>The Page you are looking for may have been moved deleted </h2>
    <h2>or possibly never exist !!</h2>
    <h3 className="H">{"Page "+message}</h3>
    <h3 className="H">{"ERROR "+sta}</h3>
    <img src={image} alt="image" id="img1"/>
    </div>
    </>)
}
export default Errors;