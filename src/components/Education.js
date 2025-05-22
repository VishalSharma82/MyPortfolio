import React from 'react';

const Education = () => {
  return (
     <section className="education" id="education">
        <h2 className="heading">Education</h2>
        <div className="timeline-items">
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2022 - 2026</div>
                <div className="timeline-content">
                    <h3>B.Tech in Computer Science</h3>
                    <p>I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering
                        (CSE) from the Global Institute of Technology & Management, located in Frukhnagar, Gurgaon.</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2021 - 2022</div>
                <div className="timeline-content">
                    <h3>Higher Secondary Education</h3>
                    <p>I have completed my higher secondary education from BS Memorial Senior Secondary School with an
                        impressive score of 65% in the RBSE Board exams.</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2020 - 2021</div>
                <div className="timeline-content">
                    <h3>Secondary Education</h3>
                    <p>I completed my secondary education from Navodaya Academy, where I obtained a respectable
                        percentage of 63.90% in the Rajasthan Board of Secondary Education (RBSE) exams.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Education;