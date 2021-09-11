import { useContext } from "react";
import ContactContext from "../conext/contact/contactContext";

const FilterContact = () => {
  const { filteredContacts } = useContext(ContactContext);

  const changeHandler = (e) => {
    let text = e.target.value;
    filteredContacts(text.trim());
  };

  return (
    <input
      type="text"
      className="form-control mb-3"
      onChange={changeHandler}
      placeholder="Filter"
    />
  );
};

export default FilterContact;
