import React from 'react';
import PatientCard from './Components/PatientCard';

function App() {

  const showPatient = (name, isAdmitted) => {
    alert(`Patient Name: ${name}, Admitted: ${isAdmitted}`);
  };

  return (
    <div>
      <PatientCard
        name="John Doe"
        age={30}
        isAdmitted={true}
        diseases={['Flu', 'Headache','Diabetes']}
        doctor={{
          id: 1,
          name: 'Dr. Smith'
        }}
        showPatient={showPatient}
      />
    </div>
  );
}

export default App;