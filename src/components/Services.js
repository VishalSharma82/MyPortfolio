import React from 'react';

const Services = () => {
  return (
     <section className="services" id="services">
        <div className="services-box">
            <h2 className="heading">Services</h2>
            <div className="wrapper">
                <div className="service-item">
                    <img src="./assest/images/skill1.png" alt=""/>
                    <h2>Web Design</h2>
                    <div className="rating">
                        <i className="bx bxs-star" id="star"></i>
                        <i className="bx bxs-star" id="star"></i>
                        <i className="bx bxs-star" id="star"></i>
                        <i className="bx bxs-star" id="star"></i>
                        <i className="bx bxs-star" id="star"></i>
                    </div>
                    <p>Provide a perfect web design for every customer according to its requirements (Figma design ,
                        WordPress Design etc.).</p>
                </div>
                <div className="service-item">
                    <img src="./assest/images/skill3.webp" alt=""/>
                    <h2>Developer</h2>
                    <div className="rating">
                        <i className="bx bxs-star" id="star"></i>
                        <i className="bx bxs-star" id="star"></i>
                        <i className="bx bxs-star" id="star"></i>
                        <i className="bx bxs-star" id="star"></i>
                        <i className="bx bxs-star" id="star"></i>
                    </div>
                    <p>Experience with C/C++ , JavaScript and React</p>
                </div>
                <div className="service-item">
                    <img src="./assest/images/skill4.jpg" alt=""/>
                    <h2>Editng</h2>
                    <div className="rating">
                        <i className="bx bxs-star" id="star"></i>
                        <i className="bx bxs-star" id="star"></i>
                        <i className="bx bxs-star" id="star"></i>
                        <i className="bx bxs-star" id="star"></i>
                        <i className="bx bxs-star" id="star"></i>
                    </div>
                    <p>Photo editing & Video editing according to customer requirements.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Services;
