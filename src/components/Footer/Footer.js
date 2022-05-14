import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Footer.css";
const Footer = () => {
  const handleSubscription = (event) => {
    event.preventDefault();

    // when user input their's email id:
    if (event.target.email.value) {
      toast("Thank You For Subscription", { id: 1 });
    }
  };

  return (
    <div className="footer">
      <div className=" ">
        <div className=" footer-content">
          <div className="title">Let's Stay in touch</div>
          <p>Get Our Top Offer to Your Inbox</p>
          <form onSubmit={handleSubscription}>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Your Email"
              required
            />

            <button>Subscription</button>
          </form>
          <p className="footer-brand-text">
            All Right Reserved | &copy;Tanvir Rifat 2022
          </p>
        </div>
      </div>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Footer;
