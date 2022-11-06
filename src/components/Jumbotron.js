import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Jumbotron = () => {
  const location = useLocation();
  const [showButton, setShowButton] = useState();

  useEffect(() => {
    if (location.pathname === '/home') {
      setShowButton(false);
    } else if (location.pathname === '/login') {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [location.pathname]);
  return (
    <section style={{ backgroundColor: '#f1f3ff' }} id="main">
      <div className="container-fluid" style={{ paddingTop: '80px' }}>
        <div className="row">
          <div class="col-xl-6 mb-4 py-5 mt-5" id="text-main">
            <h1 class="fw-bold mb-4">Sewa & Rental Mobil Terbaik di Kawasan Batusangkar</h1>
            <p class="mb-4">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            {showButton ? (
              <Link to="/home">
                <button class="btn btn-success">Mulai Sewa Mobil</button>
              </Link>
            ) : (
              <p></p>
            )}
          </div>
          <div className="col-lg-6 col-md-12" style={{ padding: '0' }}>
            <img src="./asset/img_car.png" alt="car" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
