import { useReducer } from "react";
import { getContacts } from "../../data/contact";
import ContactContext from "./contactContext";

// Reducer Function
const reducerFunc = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT": {
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    }
    case "ADD_CONTACT": {
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    }
    case "SET_CURRENT": {
      return {
        ...state,
        current: action.payload,
      };
    }
    case "UPDATE_CONTACT": {
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    }
    case "CLEAR_CURRENT": {
      return {
        ...state,
        current: null,
      };
    }
    case "FILTERED_CONTACTS": {
      return {
        ...state,
        searchText: action.payload,
        filtered: state.contacts.filter((contact) => {
          const regEX = new RegExp(`${action.payload}`, "gi");
          return contact.username.match(regEX) || contact.email.match(regEX);
        }),
      };
    }
    default: {
      return state;
    }
  }
};

const ContactState = (props) => {
  // Initial Value
  const initialState = {
    contacts: getContacts(),
    current: null,
    filtered: null,
    searchText:"",
  };
  // use Reducer
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  // Delete Contact Handler
  const deleteContact = (id) => {
    dispatch({
      type: "DELETE_CONTACT",
      payload: id,
    });
  };
  // Add New Contact Handler
  const addContact = (newContact) => {
    newContact.id = Math.round(Math.random() * 200000);
    dispatch({
      type: "ADD_CONTACT",
      payload: newContact,
    });
  };
  // Set Current
  const setCurrent = (contact) => {
    dispatch({
      type: "SET_CURRENT",
      payload: contact,
    });
  };
  //Update Contact
  const updateContact = (contact) => {
    dispatch({
      type: "UPDATE_CONTACT",
      payload: contact,
    });
  };
  //Clear Current
  const clearCurrent = () => {
    dispatch({
      type: "CLEAR_CURRENT",
    });
  };
  // Filtered Contacts
  const filteredContacts = (text) => {
    dispatch({
      type: "FILTERED_CONTACTS",
      payload: text,
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        searchText: state.searchText,
        deleteContact,
        addContact,
        setCurrent,
        updateContact,
        clearCurrent,
        filteredContacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
