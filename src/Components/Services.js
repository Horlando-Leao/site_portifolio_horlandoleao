import React, { Component } from "react";
import Fade from "react-reveal";

class Services extends Component {
  render() {
    if (!this.props.data) return null;

    const services = this.props.data.offerings.map((service, index) => {
      return (
        <div key={index} className="service-item">
          <div className="service-icon">
            <i className={`fa ${service.icon}`}></i>
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      );
    });

    return (
      <section id="services">
        <Fade left duration={1000} distance="80px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>{this.props.data.title}</h1>
              <p style={{ textAlign: "center", fontSize: "16px", marginBottom: "40px" }}>
                {this.props.data.description}
              </p>

              <div className="services-container">
                {services}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Services;
