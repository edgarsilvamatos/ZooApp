import React from 'react';
import Parkinglot from '../assets/images/Parkinglot.jpg'
import '../assets/css/MobileParking.css';
import { Link } from 'react-router-dom';
import ParkingIcon from '../assets/images/ParkingIcon.png'
import TicketIcon from '../assets/images/TicketIcon.png';

const MobileParking = () => {
  return (
    <div className='everything'>
        <div className='mobileAvailable'>
          <h2>Parking Spaces</h2>
        <div className='mobilecircles'>
          <div className='left-half'>
          <div className='green-circle'></div>
          <p className='p'>&nbsp;Free: 23</p>
          </div>
          <div className='right-space'>
          <div className='red-circle'></div>
          <p className='p'>&nbsp;In use: 5</p>
          </div>
        </div>
        </div>
        <div className='mobilepicture'>
            <img src={Parkinglot} alt='Parking Lot' className="picturesize"/>
        </div>
        <div className='navigation'>
            <footer>
                    <Link to="/parking">
                        <img src={ParkingIcon} alt='Parking Icon' className='pictureIconSize'/>
                    </Link>

                    <Link to="/tickets">
                        <img src={TicketIcon} alt='Ticket Icon' className='pictureIconSize'/>
                    </Link>
            </footer>
        </div>
    </div>
  );
};

export default MobileParking;
