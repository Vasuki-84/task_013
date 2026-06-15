import React, { useState } from 'react';

function PatientCard({
  name,
  age,
  isAdmitted,
  diseases,
  doctor,
  showPatient
}) {

  const [admitted, setAdmitted] =  useState(isAdmitted);

  const toggleStatus = () => {    setAdmitted(prev => !prev);  };

  return (
    <div>
      <p>------------------------------------------------</p>
      <h2>Patient Card</h2>
      <p>------------------------------------------------</p>
      <p>Name: {name}</p>      
      <p>Age: {age}</p>      
      <p style={ { color: admitted ? 'green' : 'red' } }>
        Status:
        {admitted ? ' Admitted' : ' Discharged'}
      </p>
      <p>Doctor: {doctor.name}</p>

      <h4>Diseases</h4>

      <ul>
        {diseases.map((disease, index) => (
          <li key={index}>
            {disease}
          </li>
        ))}
      </ul>

      <button onClick={() => showPatient(name,isAdmitted)}>
        Show Details
      </button>

      <button
        onClick={toggleStatus}>
        Change Status
      </button>
    </div>
  );
}

export default PatientCard;