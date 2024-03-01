import "./styles/aboutme-style.css";



const StudentProfile = () => {
  const importance= ["Carrera de grado","Cursos y capacitaciones","Experiencias varias","Papers"];
    const gradeStudies = [
    ["Ingeniero Electrónico", "2019-2024", "Facultad de Ingenieria."],
    ["Tecnico Electromecanico", "2019-2024", "EPET N°3 Polonia."],
    ["First Certificate in English FCE Cambridge", "2021", "Cambridge University Press & Assessment English"],
  ];
  const courses = [
    ["Internet of of Things", "2019-2024", "Facultad de la ingenieria"],
    ["Algo1", "2019-2024", "desc1"],
  ];
  const experience = [
    ["Manejo de fresadora CNC", "2019-2024", "Manejo de Jode"],
    ["Algo2", "2019-2024", "des2"],
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
                <h3>
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
      <h2>Estudios de grado</h2>

      <StudentProfile />
    </section>
  );
};
export default AboutMe;
