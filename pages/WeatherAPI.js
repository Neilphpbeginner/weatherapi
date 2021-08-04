import { React, useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function WeatherAPI() {
  const [weaterData, setweaterData] = useState({});
  const [city, setcity] = useState({
    cityName: "",
  });

  const getData = async (e) => {
    e.preventDefault();
    const res = await axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}${city.cityName}&units=${process.env.NEXT_PUBLIC_STANDARD}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((results) => {
        setweaterData(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getInformationFromUser = (e) => {
    setcity({ ...city, cityName: e.target.value.toString() });
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="form-group-id">
                <Form.Label>Enter the City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  value={city.cityName}
                  onChange={getInformationFromUser}
                />
              </Form.Group>
              <br />
              <Button block variant="outline-primary" onClick={getData}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WeatherAPI;
