import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src="https://drive.google.com/uc?export=view&id=1X4l7f2sHgQ2ZnC4-xStJiPfew5flRxVa" alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contatos</h2>
                <form onSubmit={handleSubmit}>
                  <p id='p-ctt'> <img id='logos' src="https://drive.google.com/uc?export=view&id=1sNqbMVsArciO1UIr4EIZII4g_5VltDNG" alt="logo" /> jonathan.gondim2015@yahoo.com.br</p>
                  <p id='p-ctt'> <img id='logos' src="https://drive.google.com/uc?export=view&id=1sNqbMVsArciO1UIr4EIZII4g_5VltDNG" alt="logo" /> jonathan.gondim2015@hotmail.com</p>
                  <p id='p-ctt'> <img id='logos' src="https://drive.google.com/uc?export=view&id=1SYM23gMuCLJOoc4H8ouweHYZ7MBwRg-B" alt="logo" /> (21) 99632 - 9949</p>
                  <p id='p-ctt'> <img id='logos' src="https://drive.google.com/uc?export=view&id=174w5q4d6eNyEo-j_p9hhpFd_pMFE6hcE" alt="logo" /> JohnRJZO#8067</p>

                  
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
