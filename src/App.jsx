import './App.scss'
import { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import axios from 'axios'
import City from './components/City'

const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY


function App() {
  const [cities, setCities] = useState([])
  const [searchText, setSearchText] = useState("")

function fetchData(city){
    if (city) {
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
        .then(response => {
          setCities(response.data)
        })
        .catch(error => console.log(error))
    } else {
      setCities([])
    }
  }

  function handleChange(e){
    fetchData(e.target.value)
    setSearchText(e.target.value)
  }

  return (
    <>
      <Container className="pt-5">
        <Row className="justify-content-md-center">
          <Col xs lg="6">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Search for city"
              value={searchText}
              onChange={(e) => handleChange(e)}
            />
          </Col>
        </Row>
        <Row className="pt-3 justify-content-md-center">
          <Col xs lg="6">
            {cities &&
              cities.map((city, index) => {
                return <City key={index} city={city} />;
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App
