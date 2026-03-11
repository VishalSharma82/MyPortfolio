import React from 'react';

const Education = () => {
  const educationData = [
    {
      period: '2022 - 2026',
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Gurugram University (GITM)',
      description: 'Currently pursuing my B.Tech with a focus on MERN stack development and software engineering principles. Maintaining a CGPA of 7.5.'
    },
    {
      period: '2021 - 2022',
      degree: 'Higher Secondary Education',
      institution: 'BS Memorial Senior Secondary School',
      description: 'Completed higher secondary education with a focused curriculum in science and mathematics, achieving a score of 65%.'
    },
    {
      period: '2020 - 2021',
      degree: 'Secondary Education',
      institution: 'The Army Sr. Sec. School',
      description: 'Completed secondary education with a strong foundation in all subjects, obtaining a percentage of 63.90%.'
    }
  ];

  return (
    <section className="education" id="education">
      <h2 className="heading">My <span>Education</span></h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="education-icon">
              <i className='bx bxs-graduation'></i>
            </div>
            <div className="education-info">
              <span className="education-date">{edu.period}</span>
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;