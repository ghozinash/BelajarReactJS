import React from "react";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="text-center">
        <h1>Contact Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
          temporibus facilis, reiciendis eaque dignissimos minus!
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            {/* Name Input */}
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
            {/* Phone Input */}
            <input
              type="number"
              className="form-control"
              placeholder="Phone Number"
              phone="phone"
            />
            {/* Email Input */}
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              email="email"
            />
            {/* Subject Input */}
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              subject="subject"
            />
          </div>
          <div className="col-md-6 col-xs-12">
            <textarea
              type="text"
              className="form-control"
              placeholder="Description"
              description="description"
            ></textarea>
            <button className="button btn-main-offer contact-btn" type="submit">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
