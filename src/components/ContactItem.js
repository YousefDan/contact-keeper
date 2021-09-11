import { useContext } from "react";
import { FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import ContactContext from "../conext/contact/contactContext";

const ContactItem = ({ contact }) => {
  const { type, email, id, username, phone } = contact;
  const { deleteContact, setCurrent } = useContext(ContactContext);

  return (
    <section className="rounded border bg-light p-3 mb-4">
      <div>
        <strong style={{ fontSize: "21px" }} className="text-primary">
          {username}
        </strong>
        <span
          style={{ float: "right" }}
          className={
            type === "personal" ? "badge bg-success" : "badge bg-primary"
          }
        >
          {type}
        </span>
      </div>
      <div className="my-2">
        <GrMail /> {email}
      </div>
      <div className="mb-3">
        <FaPhone /> {phone}
      </div>
      <div>
        <button
          onClick={() =>
            setCurrent({
              username,
              email,
              phone,
              type,
              id,
            })
          }
          className="btn btn-dark btn-sm me-2"
        >
          Edit
        </button>
        <button
          onClick={() => deleteContact(id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    </section>
  );
};

export default ContactItem;
