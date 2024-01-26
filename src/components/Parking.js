import React from 'react';
import Parkinglot from '../assets/images/Parkinglot.jpg'
import '../assets/css/Parking.css';
import { Link } from 'react-router-dom';


const Parking = () => {
  return (
    <div>
      <div className='picture left-half'>
        <img src={Parkinglot} alt='Parking Lot' className="parking-image"/>
      </div>
      <div className='info right-half'>
        <div className='parking-info'>
          <div className='title'>
            <h1>Parking Spaces</h1>
          </div>
        <hr/>
        <div className='circles'>
          <div className='left-half'>
          <div className='green-circle'></div>
          <p className='p'>Free: 23</p>
          </div>
          <div className='right-space'>
          <div className='red-circle'></div>
          <p className='p'>In use: 27</p>
          </div>
        </div>

        
        <select className='select'>
          <option disabled selected>Choose your Parking Lot</option>
          <option>Parking Lot A</option>
          <option>Parking Lot B</option>
        </select>

        <div className='button-class'>
          <Link to="/tickets">
            <button className='button'>Go To Tickets</button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Parking;
