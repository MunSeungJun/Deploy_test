import React from 'react';

const Home = () => {
  return (
    <div className="text-center mt-5">
      <h1 className=" fs-1 fw-bold text-capitalize mb-4">
        supercharge your growing business from your wordpress dashboard
      </h1>
      <p>WP ERP optimizes your small to medium businesses with a powerful HR Manager,</p>
      <p>CRM and Accounting tools - Unlock more with 20+ extension & Project</p>
      <p>Managemnet module</p>
      <div>
        <button className="btn">Get Started</button>
        <button className="btn">Demo</button>
      </div>
      <img src="http://localhost:5173/landing-img.png" className='w-100' alt="" />
    </div>
  );
};

export default Home;
