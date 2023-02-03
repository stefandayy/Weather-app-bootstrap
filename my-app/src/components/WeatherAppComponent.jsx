import React from "react";
import Card from "react-bootstrap/Card";

export default function WeatherAppComponent(props) {
  return (
    <>
      <div id="main" className="d-flex justify-content-center align-items-center">
        
        <Card
          id="card"
          border="secondary"
          className="m-5"
          style={{ width: "30rem", textAlign: "center" }}
        >
          <Card.Header><h1>{props.location}</h1></Card.Header>
          <Card.Body>
            <Card.Img
              src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
              alt="icon"
              style={{ width: "100px" }}
            />
            <Card.Title>{props.temperature}° C</Card.Title>

            <Card.Text>
              <p>
                Feels Like: <span>{props.feels_like}° C</span>{" "}
              </p>
              <p>
                Wind speed: <span>{props.windSpeed} Km/h</span>{" "}
              </p>
              <p>
                Humidity: <span>{props.humidity} %</span>{" "}
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
