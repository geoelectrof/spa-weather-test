import CityModal from "./cityModal";
import { useState } from "react";

const City = (props) => {

    const [cityModalShow, setCityModalShow] = useState(false);

    return (
        <>
            <div onClick={() => setCityModalShow(true)} className="bg-light rounded my-2 city-card">
                <div className="py-2 px-4">
                    <h1>{props.city.name}</h1>
                    <p>
                        {props.city.state} {props.city.country}
                    </p>
                </div>
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