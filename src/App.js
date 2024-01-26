import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Tickets from './components/Tickets';
import Parking from './components/Parking';
import styled from 'styled-components';
import MobileParking from './components/MobileParking';

const Nav = styled.nav`
  display: none;

  @media only screen and (max-width: 500px) {
    display: block;
  }
`;

const ParkingView = styled.div`
  display: block;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/tickets" element={<Tickets/>} />
          <Route path="/parking" element={
            <>
            <Nav>
              <MobileParking />
            </Nav>
            <ParkingView><Parking/></ParkingView>
            </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
