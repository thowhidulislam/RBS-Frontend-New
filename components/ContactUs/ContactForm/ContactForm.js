import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import contactFormStyles from "./ContactForm.module.css";

const ContactForm = ({ contactUsForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <section
      style={{
        background: "rgb(226, 246, 254)",
        padding: "50px 0",
      }}
    >
      <Card
        className={`${contactFormStyles.contactForm} mx-auto p-2 p-lg-5 shadow-md bg-white rounded border-0`}
        style={{ display: contactUsForm?.isShow ? "block" : "none" }}
      >
        <Card.Body>
          <Form onSubmit={handleFormSubmit}>
            <h1 className="fs-1 fw-bold ">{contactUsForm?.title}</h1>
            <Form.Group className="mb-3 outline-none" controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Enter Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3 outline-none"
              controlId="formBasicEmail"
            >
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Control
                type="text"
                placeholder="Phone"
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Control
                as="textarea"
                type="text"
                placeholder="Message"
                height="900px"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </Form.Group>
            <Button
              className={`${contactFormStyles.buttonGradient}`}
              type="submit"
            >
              Submit <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </section>
  );
};

export default ContactForm;
