import axios from "axios";
import React from "react";
import ContactBanner from "../components/ContactUs/ContactBanner/ContactBanner";
import ContactForm from "../components/ContactUs/ContactForm/ContactForm";
import ContactInfos from "../components/ContactUs/ContactInfos/ContactInfos";

const ContactUs = () => {
  const [contactUsData, setContactUsData] = React.useState({});
  const [contactUsForm, setContactUsForm] = React.useState({});

  React.useEffect(() => {
    axios.get("/api/contactus/contactusapi").then((res) => {
      setContactUsData(res.data);
    });
    axios.get("/api/contactus/contactusFormapi").then((res) => {
      setContactUsForm(res.data);
    });
  }, []);
  return (
    <section className="" style={{ color: "rgb(23, 52, 101)" }}>
      <ContactBanner />
      <ContactInfos contactUsData={contactUsData} />
      <ContactForm contactUsForm={contactUsForm} />
    </section>
  );
};

export default ContactUs;
