import './App.css'
import { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import axios from 'axios'
import { useEffect } from 'react'

const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY


function App() {
  const [cities, setCities] = useState([{name: "athens"}, {name:"thessaloniki"}])
  const [searchText, setSearchText] = useState("")

  // useEffect(() => {
  //   axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}`)
  //   .then(response => {
  //     console.log(response.data)
  //     setCities(response.data)
  //   })
  // },[])

  function fetchData(city){
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
      .then(response => {
        setCities(response.data)
      })
  }

  function handleChange(e){
    setSearchText(e.target.value)
    fetchData(e.target.value)
  }
  console.log(cities)

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form.Control size="lg" type="text" placeholder="Search for city" onChange={(e) => handleChange(e)}/>
          </Col>
        </Row>
        <Row>
          {cities && cities.map((city, index) => {
            return (
              <h1 key={index}>
                {city.name} {city.state} {city.country}
              </h1>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default App
