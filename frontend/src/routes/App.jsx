import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Container, Row,Col } from 'react-bootstrap';

const App = () => {
  
  return (
    <>
      <header className='border-bottom'>
        <Container>
          <Row className="p-5">
              <div className='col-4 fs-1 fw-bold'>WP ERP</div>
              <nav className='col-8 d-flex align-items-center'>
                <ul className="fs-5 d-flex gap-5">
                  <li>
                    <NavLink to="/">home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/list">list</NavLink>
                  </li>
                  <li>
                    <NavLink to="/add">add</NavLink>
                  </li>
                </ul>
              </nav>
          </Row>
        </Container>
      </header>
      <main className='mt-5'>
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer className='border-top'>
        <p className='my-4 text-center'>&copy; hanul 2025.03.24</p>
      </footer>
    </>
  );
};

export default App;
