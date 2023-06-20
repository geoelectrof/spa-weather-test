import './App.css'
import { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import axios from 'axios'
import CityModal from './components/cityModal'

const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY


function App() {
  const [cities, setCities] = useState([])
  const [searchText, setSearchText] = useState("")
  const [cityModalShow, setCityModalShow] = useState(false)

  function fetchData(city){
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
      .then(response => {
        setCities(response.data)
      })
  }

  function handleChange(e){
    console.log('e.target.value', e.target.value)
    setSearchText(e.target.value)
    e.target.value ? fetchData(e.target.value) : setCities([])
  }
  console.log(cities)

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Search for city"
              value={searchText}
              onChange={(e) => handleChange(e)}
            />
          </Col>
        </Row>
        <Row>
          {cities &&
            cities.map((city, index) => {
              return (
                <div key={index} onClick={() => setCityModalShow(true)}>
                  <h1>{city.name}</h1>
                  <p>
                    {city.state} {city.country}
                  </p>
                </div>
              );
            })}
        </Row>
      </Container>
      <CityModal
        show={cityModalShow}
        onHide={() => setCityModalShow(false)}
      />
    </>
  );
}

export default App
