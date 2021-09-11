import { Fragment, useContext, useEffect, useState } from "react";
import ContactContext from "../conext/contact/contactContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    phone: "",
    type: "personal",
  });
  const { username, email, phone, type } = contact;

  const { addContact, current, updateContact, clearCurrent } =
    useContext(ContactContext);

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        username: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
    // eslint-disable-next-line
  }, [current]);

  // From Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (username.trim() === "" || !email.includes("@") || phone.trim() === "") {
      toast.error("Please Fill The Form")
    } else {
      if (current === null) {
        addContact(contact);
        setContact({
          username: "",
          email: "",
          phone: "",
          type: "personal",
        });
      } else {
        updateContact(contact);
        clearCurrent();
      }
    }
  };
  // Change Handler
  const changeHandler = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Fragment>
      <ToastContainer />
      <form
        onSubmit={formSubmitHandler}
        className="w-50 border p-3 rounded bg-light"
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="form-control mb-3"
          onChange={changeHandler}
          value={username}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-3"
          onChange={changeHandler}
          value={email}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="form-control mb-3"
          onChange={changeHandler}
          value={phone}
        />
        <div>
          <h5>Contact Type</h5>
          <input
            onChange={changeHandler}
            type="radio"
            value="personal"
            name="type"
            checked={type === "personal"}
          />
          Personal
          <input
            onChange={changeHandler}
            className="ms-2"
            type="radio"
            value="professional"
            name="type"
            checked={type === "professional"}
          />
          Professional
        </div>
        <input
          type="submit"
          className="btn btn-primary mt-3 w-100"
          value={current ? "Update Contact" : "Add Contact"}
        />
      </form>
    </Fragment>
  );
};

export default ContactForm;
