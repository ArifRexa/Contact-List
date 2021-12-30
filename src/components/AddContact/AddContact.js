import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const AddContact = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContactEmailExists = contacts.filter((contact) =>
      contact.email === email ? contact : null
    );
    const checkContactPhoneExists = contacts.filter((contact) =>
      contact.phone === phone ? contact : null
    );

    if (!email || !name || !phone) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkContactEmailExists.length > 0) {
      return toast.error("This email already exists!!");
    }
    if (checkContactPhoneExists.length > 0) {
      return toast.error("This phone number already exists!!");
    }

    const data = {
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      email,
      name,
      phone,
    };

    addContact(data);
    toast.success("Contact added successfully!!");
    history.push("/");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add New</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control my-2"
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control my-2"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control my-2"
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="d-flex align-items-center justify-content-between">

              <div className="form-group">
                <input
                  className="btn btn-inline btn-primary my-2"
                  type="submit"
                  value="Save Contact"
                />
              </div>
              <Button style={{ color: "white" }} onClick={() => history.push("/")}>Go Back</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  addContact: (data) => {
    dispatch({ type: "ADD_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
