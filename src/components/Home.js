import ContactForm from "./ContactForm";
import Contacts from "./Contacts";

const Home = () => {
  return (
    <div className="d-flex justify-content-between align-items-start">
      <ContactForm />
      <Contacts />
    </div>
  );
};

export default Home;
