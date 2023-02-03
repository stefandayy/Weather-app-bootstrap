import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function HeaderNavComponent(props) {
    const [value, setValue] = React.useState(props.city);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          props.onCitySubmit(value);
        }
      };

  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home" style={{color:'white'}}>Weather App</Navbar.Brand>
          <InputGroup  style={{ width: '10rem' }}>
        <Form.Control
          placeholder="Insert a city "
          aria-label="Insert a city"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </InputGroup>
        </Container>
      </Navbar>
    </>
  );
}
