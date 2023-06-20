import CityModal from "./cityModal";
import { useState } from "react";

const City = (props) => {

    const [cityModalShow, setCityModalShow] = useState(false);

    return (
        <>
            <div onClick={() => setCityModalShow(true)}>
            <h1>{props.city.name}</h1>
            <p>
                {props.city.state} {props.city.country}
            </p>
            </div>
            <CityModal 
                city={props.city}
                show={cityModalShow} 
                onHide={() => setCityModalShow(false)} 
            />
        </>
    );
}
export default City