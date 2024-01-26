import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Tickets.css';
import zoo1 from '../assets/images/zoo1.jpg';

const TicketForm = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState({
    date: '',
    numAdults: 0,
    numChildren: 0
  });

  const handleInputChange = (key, value) => {
    setFormFields((prevFields) => ({
      ...prevFields,
      [key]: key === 'date' ? value : parseInt(value, 10)
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Anzahl Kinder:", formFields.numChildren);
    console.log("Anzahl Erwachsene:", formFields.numAdults);

    const newTicket = {
      date: formFields.date,
      numAdults: parseInt(formFields.numAdults, 10),
      numChildren: parseInt(formFields.numChildren, 10)
    };

    try {
      const response = await fetch("http://localhost:8080/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTicket),
      });

      if (response.ok) {
        console.log("Ticket submitted successfully!");
        alert("Ticket submitted successfully!");

        setFormFields({
          date: '',
          numAdults: 0,
          numChildren: 0
        });
        navigate('/parking');
      } else {
        console.error("Failed to submit ticket");
      }
    } catch (error) {
      console.error("Error submitting ticket", error);
    }

    console.log('Ticket submitted:', newTicket);
  };

  return (
    <div className="ticketsite">
      <h2>Ticket kaufen:</h2>
      <label>Datum des Besuches:</label>
      <br></br>
      <input
        className="date"
        type="date"
        value={formFields.date}
        onChange={(e) => handleInputChange('date', e.target.value)}
      />
      <br></br>
      <label>Anzahl Erwachsene:</label>
      <div className='element'>
        <button className="button" onClick={() => handleInputChange('numAdults', Math.max(0, formFields.numAdults - 1))} disabled={formFields.numAdults === 0}>-</button>
        <br/>
        <span className='nr'>{formFields.numAdults}</span>
        <button className="button" onClick={() => handleInputChange('numAdults', formFields.numAdults + 1)}>+</button>
      </div>
      <label>Anzahl Kinder:</label>
      <div>
        <button className="button" onClick={() => handleInputChange('numChildren', Math.max(0, formFields.numChildren - 1))} disabled={formFields.numChildren === 0}>-</button>
        <br/>
        <span className='nr'>{formFields.numChildren}</span>
        <button className="button" onClick={() => handleInputChange('numChildren', formFields.numChildren + 1)}>+</button>
      </div>
      <br></br>
      <button className="buttonnavigation" onClick={handleSubmit}>Kaufen</button>
      <button className="buttonnavigation" onClick={() => navigate('/parking')}>Zurück zu Parking</button>
      <img src= {zoo1} alt="Zoo" className="zoo-image" />    
    </div>
  );
};

export default TicketForm;
