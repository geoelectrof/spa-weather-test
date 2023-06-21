import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CityWeather from "./CityWeather";

export default function CityModal(props) {

  // const handleExportData = (data) => {
  //   console.log(data)
  // }

  return (
    <Modal
      // {...props}
      show={props.show}
      onHide={props.onHide}
      size="s"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.city.name}
          <br />
          
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CityWeather 
          lat = {props.city.lat}
          lon = {props.city.lon}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        {/* <Button onClick={}>Export Data</Button> */}
      </Modal.Footer>
    </Modal>
  );
}


