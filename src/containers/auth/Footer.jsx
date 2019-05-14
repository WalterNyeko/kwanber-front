import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-dark sticky-bottom mb-auto py-3">
      <div className="container text-center mt-4 mb-4">
        <a className="text-white ml-5 mr-5 mb-4" href="#">
          <i className="fas fa-instagram fa-3x" />
        </a>
        <a className="text-white ml-5 mr-5 mb-4" href="#">
          <i className="fas fa-pinterest fa-3x" />
        </a>
        <a className="text-white ml-5 mr-5 mb-4" href="#">
          <i className="fas fa-twitter fa-3x" />
        </a>
        <a className="text-white ml-5 mr-5 mb-4" href="#">
          <i className="fas fa-facebook fa-3x" />
        </a>
      </div>

      <div className="container text-center mt-4 mb-4">
        <a className="text-white ml-5 mr-5 mb-4" href="#">
          &copy; 2019 Kwan Ber
        </a>
        <a className="text-white ml-5 mr-5 mb-4" href="#">
          Contact
        </a>
        <a className="text-white ml-5 mr-5 mb-4" href="#">
          Privacy policy
        </a>
      </div>
    </footer>
  );
}
