import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import img from "../../image/none.gif"

const Home = ({ contacts, deleteContact }) => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>
                      <Link to={`/editcontact/${contact.id}`} className="btn btn-sm btn-primary mr-1 m-1">
                      <i className="fas fa-edit"></i> Edit
                      </Link>
                      <Button type="button" onClick={() => deleteContact(contact.id)} className="btn-sm m-1 border-0" style={{background:"red"}}>
                      <i className="fas fa-trash-alt"></i> Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (<img style={{ margin:"60%"}} className='my-5' width={300} src={img} alt="" />)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});

const mapDispatchToProps = (dispatch) => ({

  deleteContact: (id) => {
    const permission = confirm("Do you want to delete this item?")
    if (permission) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
