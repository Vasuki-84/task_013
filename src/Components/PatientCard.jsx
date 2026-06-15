import React, { useState } from 'react';
import './PatientCard.css';

function PatientCard({
  name,
  age,
  isAdmitted,
  diseases,
  doctor,
  showPatient
}) {

  const [admitted, setAdmitted] =
    useState(isAdmitted);

  const toggleStatus = () => {
    setAdmitted(prev => !prev);
  };

  return (
    <div className="patient-card">

      <h2>Patient Card</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Age:</strong> {age}
      </p>

      <p
        style={{
          color: admitted ? 'green' : 'red',
          fontWeight: 'bold'
        }}
      >
        Status:
        {admitted
          ? ' Admitted'
          : ' Discharged'}
      </p>

      <p>
        <strong>Doctor:</strong> {doctor.name}
      </p>

      <h4>Diseases</h4>

      <ul>
        {diseases.map((disease, index) => (
          <li key={index}>
            {disease.trim()}
          </li>
        ))}
      </ul>

      <div className="button-group">

        <button
          className="show-btn"
          onClick={() =>
            showPatient(
              name,
              admitted
            )
          }
        >
          Show Details
        </button>

        <button
          className="status-btn"
          onClick={toggleStatus}
        >
          Change Status
        </button>

      </div>

    </div>
  );
}

export default PatientCard;