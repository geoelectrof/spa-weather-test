import './App.css'
import { Container, Row, Col } from 'react-bootstrap'

const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY

function App() {

  console.log(apiKey)
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Test</h1>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
