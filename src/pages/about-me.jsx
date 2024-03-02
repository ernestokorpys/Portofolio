import "./styles/aboutme-style.css";



const StudentProfile = () => {
  const importance= ["Carrera de grado","Cursos y capacitaciones","Experiences","Published Papers"];
    const gradeStudies = [
    ["Ingeniero Electrónico", "Expected Graduation (December 2024)", "Facultad de Ingeniería. Universidad Nacional de Misiones. Expected Graduation: 2024."],
    ["Tecnico Electromecanico", "2013-2018", "Escuela de educación Técnica EPET N°3 Polonia."],
    ["First Certificate in English FCE Cambridge", "2021", "Cambridge University Press & Assessment English"],
  ];
  const courses = [
    ["Internet of of Things", "2023", "Facultad de la ingenieria"],
    ["FUll Stack Web Developer ", "2022 - 2023", "Universidad Tecnológica Nacional Facultad Regional Resistencia Chaco - UTN FRRe. Desarrollo de paginas web supervisado. Incluye conocimientos en HTML, CSS, PHP, Bootstrap, Java, PGP, MySQL, entre otros tipo de saberes"],
  ];
  const experience = [
    ["Manejo de fresadora CNC", "2019-2024", "Manejo de Jode"],
    ["Academic Lectures", "2019-2024", "Throughout my career, I have had the privilege of actively participating in academic presentations, both as a presenter and as an observer. This experience has allowed me not only to share my own research and projects with fellow colleagues but also to learn from the contributions and perspectives of various professionals in different fields. As a presenter, I have had the opportunity to communicate my ideas clearly and persuasively, while as an observer, I have been able to enrich my understanding of a wide range of topics and trends in my area of interest."],
  ];

  const papers = [
    ["SAR Technology Assessment Considering Atlantic Forest Monitoring", "2022", "An actualized study of synthetic aperture radar (SAR) technology and its potential application to Atlantic Forest preservation are presented." ]
    ,["Carga activa","2022","Facultad de ingenieria"]];

  const studentStudies = [gradeStudies, courses, experience,papers];

  return (
    <>
      <div>
        {studentStudies.map((project, i) => (
          <article className="study-box" key={i}>
            <h2>{importance[i]}</h2>
            <ul>
            {project.map((course, j) => (
              <div className="study-topic" key={j}>
                <h3 className="title-date">
                  {course[0]}
                  <p>{course[1]}</p>
                </h3>
                <p>{course[2]} </p>
              </div>
            ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  );
};

const AboutMe = () => {
  return (
    <section className="format-box">
      <h1>About me</h1>
      <StudentProfile />
    </section>
  );
};
export default AboutMe;
