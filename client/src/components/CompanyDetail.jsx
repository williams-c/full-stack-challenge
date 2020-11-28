import React, { useState, useEffect } from 'react';
import CompanyForm from './CompanyForm';

const CompanyDetail = ({ company }) => {
  const[name, updateName] = useState(company.name);
  const[city, updateCity] = useState(company.city);
  const[state, updateState] = useState(company.state);
  const[founded, updateFounded] = useState(company.founded);
  const[description, updateDescription] = useState(company.description);
  const[editing, updateEditing] = useState(false);
  const[deleting, updateDeleting] = useState(false);

  useEffect(() => {
    let date = new Date(company.founded);
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    date = date.toLocaleString('en-US', options)
    updateFounded(date)
  }, [])

  const editHandler = () => {
    updateEditing(true);
  }

  const deleteHandler = () => {
    updateDeleting(true);
  }

  const confirmDelete = () => {
    // call app level api function
  }

  const cancelDelete = () => {
    updateDeleting(false);
  }

  return (
    <div className="company-wrapper">

      <div className="company-detail-header">
        <h3>{company.name}</h3>

        <div className="detail-line-two-wrapper">
          <div className="detail-left">
            <span className="detail-line-two">{founded}</span>
            <span className="detail-line-two">{`${company.city}, ${company.state}`}</span>
          </div>

          <div className="detail-right">
            <button className="detail-line-two detail-btn" onClick={editHandler}>Edit</button>
            <button className="detail-line-two detail-btn" onClick={deleteHandler}>Delete</button>
          </div>
        </div>

        {/* if delete button is clicked, double check before deleting */}
        {deleting ?
          <p>
            Are you sure you want to delete {name}?
            <button className="detail-line-two detail-btn" onClick={confirmDelete}>Yes</button>
            <button className="detail-line-two detail-btn" onClick={cancelDelete}>No</button>
          </p>
          :
          ''
        }
      </div>

      <p className ="company-description">{company.description}</p>

      {/* if editing, display edit form */}
      {editing ? <CompanyForm company={company} /> : ''}

  </div>
  )
}

export default CompanyDetail;