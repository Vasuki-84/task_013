import React, { useState } from 'react';
import './App.css';
import PatientCard from './Components/PatientCard';

function App() {

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    doctorName: '',
    diseases: '',
    isAdmitted: false
  });

  const [patient, setPatient] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setPatient({
      name: formData.name,
      age: Number(formData.age),
      isAdmitted: formData.isAdmitted,
      diseases: formData.diseases.split(','),
      doctor: {
        id: 1,
        name: formData.doctorName
      }
    });
     // Form Reset
      setFormData({
          name: '',
          age: '',
          doctorName: '',
          diseases: '',
          isAdmitted: false
    });
  };

  const showPatient = (name, status) => {
    alert(
      `Patient: ${name}
Status: ${status ? 'Admitted' : 'Discharged'}`
    );
  };

  return (
    <div className="container">

      <form
        className="patient-form"
        onSubmit={handleSubmit}
      >
        <h2>Patient Registration</h2>

        <input
          type="text"
          placeholder="Patient Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value
            })
          }
        />

        <input
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={(e) =>
            setFormData({
              ...formData,
              age: e.target.value
            })
          }
        />

        <input
          type="text"
          placeholder="Doctor Name"
          value={formData.doctorName}
          onChange={(e) =>
            setFormData({
              ...formData,
              doctorName: e.target.value
            })
          }
        />

        <input
          type="text"
          placeholder="Diseases (Flu,Fever,Cold)"
          value={formData.diseases}
          onChange={(e) =>
            setFormData({
              ...formData,
              diseases: e.target.value
            })
          }
        />

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={formData.isAdmitted}
            onChange={(e) =>
              setFormData({
                ...formData,
                isAdmitted: e.target.checked
              })
            }
          />
          Admitted
        </label>

        <button type="submit">
          Submit
        </button>
      </form>

      {patient && (
        <PatientCard
          name={patient.name}
          age={patient.age}
          isAdmitted={patient.isAdmitted}
          diseases={patient.diseases}
          doctor={patient.doctor}
          showPatient={showPatient}
        />
      )}

    </div>
  );
}

export default App;