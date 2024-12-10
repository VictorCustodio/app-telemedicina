import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../index.css';

function Home() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3333/medicos')
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the doctors!', error);
      });
  }, []);
  //problema na pagina home
  return (
    <div className="home-container">
      <h2>Doctors List</h2>
      <div className="cards-container">
        {doctors.map((doctor) => (
          <Link to={`/doctor/${doctor.id}`} key={doctor.id} className="card">
            <img src={doctor.photo} alt={doctor.name} className="doctor-photo" />
            <div className="doctor-info">
              <h3>{doctor.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;