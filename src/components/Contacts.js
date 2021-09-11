import { useContext } from "react";
import ContactContext from "../conext/contact/contactContext";
import ContactItem from "./ContactItem";
import FilterContact from "./FilteredContact";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Contacts = () => {
  const { contacts, filtered, searchText } = useContext(ContactContext);
  return (
    <div style={{ width: "40%" }}>
      <FilterContact />
      {filtered !== null && filtered.length === 0 && (
        <h5>
          There Is No Contact As{" "}
          <span className="text-danger">{searchText}</span>
        </h5>
      )}
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((c) => (
              <CSSTransition key={c.id} classNames="item" timeout={500}>
                <ContactItem contact={c} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact.id} classNames="item" timeout={500}>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </div>
  );
};

export default Contacts;
