const initialState = [
  { id: 0, name: "Arif Reza", email: "arif.reza@gmail.com", phone: 1234567890 },
  { id: 1, name: "Jahir Khan", email: "jahir.khan@gmail.com", phone: 9087654321 },
  { id: 2, name: "John Doe", email: "doejohn@gmail.com", phone: 9875645531 },
];

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "DELETE_CONTACT":
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      state = contactFilter;
      return state;
    case "UPDATE_CONTACT":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state;
    case "RESET_CONTACT":
      state = [{ name: null, email: null, phone: null }];
      return state;
    default:
      return state;
  }
  
};


