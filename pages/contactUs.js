import axios from "axios";
import ContactBanner from "../components/ContactUs/ContactBanner/ContactBanner";
import ContactForm from "../components/ContactUs/ContactForm/ContactForm";
import ContactInfos from "../components/ContactUs/ContactInfos/ContactInfos";

const contactUs = ({ contactUsData, contactUsForm }) => {
  return (
    <section className="" style={{ color: "rgb(23, 52, 101)" }}>
      <ContactBanner />
      <ContactInfos contactUsData={contactUsData} />
      <ContactForm contactUsForm={contactUsForm} />
    </section>
  );
};

export default contactUs;

export async function getServerSideProps() {
  const contactUsInfos = await axios.get(
    "http://localhost:3000/api/contactus/contactusapi"
  );
  const contactUsFormInfos = await axios.get(
    "http://localhost:3000/api/contactus/contactusFormapi"
  );

  return {
    props: {
      contactUsData: contactUsInfos.data,
      contactUsForm: contactUsFormInfos.data,
    },
  };
}
