import React from 'react';
import { useParams } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaVideo } from 'react-icons/fa';

const doctorDetails = {
  1: { name: 'Dr. John Doe', specialty: 'Cardiologista', photo: 'doctor1.jpg', clients: 120, years: 15, rating: 4.8, about: 'Experienced cardiologist with over 15 years of practice. lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum' },
  2: { name: 'Dr. Jane Smith', specialty: 'Dermatologista', photo: 'doctor2.jpg', clients: 200, years: 10, rating: 4.9, about: 'Renowned dermatologist known for her expertise in skin care.' },
  // Adicionar mais detalhes conforme necessário
};

function DoctorDetails() {
  const { id } = useParams();
  const doctor = doctorDetails[id];

  return (
    <div className="doctor-details-container">
      <img src={doctor.photo} alt={doctor.name} className="doctor-photo" />
      <h2>{doctor.name}</h2>
      <p>{doctor.specialty}</p>
      <div className="cards-container">
        <div className="card">
          <h3>{doctor.clients}</h3>
          <p>Clientes</p>
        </div>
        <div className="card">
          <h3>{doctor.years}</h3>
          <p>Anos de Profissão</p>
        </div>
        <div className="card">
        <h3>{doctor.rating}</h3>
          <p>Avaliação</p>
        </div>
      </div>
      <div className="about-card">
        <p>{doctor.about}</p>
      </div>
      <div className="about-card">
          <p>Horário de Trabalho</p>
          <h3>{doctor.workHours}</h3>
        </div>
      <div className="about-card">
          <h3>{doctor.contact}</h3>
          <p>Contatos</p>
          <div className="contact-options">
        <div className="contact-option">
          <FaEnvelope />
          <p>Mensagem</p>
        </div>
        <div className="contact-option">
          <FaPhone />
          <p>Chamada de Áudio</p>
        </div>
        <div className="contact-option">
          <FaVideo />
          <p>Chamada de Vídeo</p>
        </div>
      </div>
        </div>
     
    </div>
  );
}

export default DoctorDetails;