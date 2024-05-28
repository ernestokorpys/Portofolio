import "./styles/aboutme-style.css";

const StudentProfile = () => {
  const importance= ["Undergraduate degree","Courses, workshops and training","Experiences","Published Papers"];
    const gradeStudies = [
    ["Electronic Engineer", "Expected Graduation (December 2024)", "Facultad de Ingeniería. Universidad Nacional de Misiones. Expected Graduation: 2024. This career provides a comprehensive understanding of electronic systems, circuit design, signal processing, and telecommunications. Through rigorous coursework and hands-on projects, students gain proficiency in designing, analyzing, and troubleshooting electronic devices and systems."],
    ["Electromechanical Technician", "2013-2018", "Escuela de educación Técnica EPET N°3 Polonia. This comprehensive studies provided me with a solid foundation in both electrical and mechanical engineering principles, equipping me with the practical skills and theoretical knowledge necessary to excel in the field. Through hands-on training and coursework, I gained expertise in areas such as electrical circuits, machinery maintenance, automation systems, and more. This educational journey laid the groundwork for my subsequent endeavors in the engineering field, fostering a strong passion for technology and problem-solving."],
    ["First Certificate in English FCE Cambridge", "2021", "Cambridge University Press & Assessment English. This internationally recognized certification signifies proficiency in the English language, covering reading, writing, listening, and speaking skills. Achieving this certification demonstrates my dedication to mastering English communication and my ability to effectively engage in both academic and professional environments."],
  ];
  const courses = [
    ["Python 101 For Data Science","2024", "IBM. This foundational course was instrumental in my data science learning journey, providing me with a solid grounding in Python programming and its applications in data analysis. Through hands-on exercises and projects, I developed proficiency in Python's core libraries such as Pandas, NumPy, and Scikit-Learn. This course significantly enhanced my ability to manipulate, analyze, and visualize data, and I am excited to apply these skills in future data-driven projects."],
    ["Data Analysis with Python","2024","This advanced course allowed me to dive deep into data analysis techniques using Python. I acquired practical tools for effectively handling and visualizing data, mastering libraries such as Pandas, NumPy, and Matplotlib. The course projects involved real-world data sets, providing a robust framework for analyzing and drawing insights from complex data. This certification has equipped me with the skills necessary for high-level data analysis and visualization tasks."],
    ["Data Visualization With Python","2024","During this course, I enhanced my data analysis toolkit by learning essential skills in visualizing data using Python. The comprehensive curriculum empowered me to create compelling visualizations that effectively communicate insights. I applied these newfound skills in various projects, leveraging tools like Matplotlib, Seaborn, and Plotly to craft detailed and interactive data visualizations. This experience has prepared me to tackle real-world data visualization challenges and tell compelling stories through data."],
    ["Internet of of Things", "2023", "Facultad de ingenieria. Oberá Mnes. During this program, I delved into the cutting-edge realm of Internet of Things (IoT) technologies, exploring innovative ways to integrate sensors and devices into interconnected systems. A notable project involved the development of a sophisticated monitoring system capable of sensing and recording temperature and humidity levels in real-time. Leveraging a diverse array of tools and technologies such as databases, Telegram bots, Docker, Grafana, Mosquitto, and more, we engineered a robust solution for efficient data collection and analysis."],
    ["FUll Stack Web Developer ", "2022 - 2023", "Universidad Tecnológica Nacional Facultad Regional Resistencia Chaco - UTN FRRe. Desarrollo de paginas web supervisado. Incluye conocimientos en HTML, CSS, PHP, Bootstrap, Java, PGP, MySQL, entre otros tipo de saberes"],
    ["Introducción al procesamiento electrónico de señales","2019","This course provided a foundational understanding of signal processing techniques and methodologies used in electronic systems. Through theoretical instruction and practical exercises, I gained knowledge in areas such as digital signal processing, Fourier analysis, filter design, and signal modulation. This educational experience enhanced my skills in analyzing and manipulating signals, preparing me for further studies and applications in the field of electronic engineering."],
    ["Introducción práctica a la generación asincrónica en pequeñas centrales hidroeléctricas","2019","A comprehensive guide that provides hands-on insights into the implementation and operation of asynchronous generation systems in small hydropower plants. This resource delves into the practical aspects of utilizing asynchronous generators, offering detailed explanations of their design, installation, and maintenance processes."],
    ["Bombas de Ariete","2019","Refers to a hydraulic device that utilizes the water hammer effect to pump water without requiring external power sources such as electricity or fuel. This simple and efficient pumping mechanism is particularly useful in remote areas with limited access to electricity or for sustainable water management projects."],
    ["El sevier – Gestión de la información y la comunicación científica","2019","Refers to the processes and systems involved in managing and disseminating scientific information and research communication. Elsevier is a prominent publishing company that specializes in scientific, technical, and medical content. Its services include publishing journals, books, and providing online platforms for researchers to access and share scholarly work. The term encompasses various aspects such as peer review, editorial processes, publication distribution, and digital platforms for accessing scientific literature."],
  ];
  const experience = [
    ["Intern","May 2024 - July 2024","Cooperativa Electrica Limitada de Oberá. During my internship at Cooperative Electric Limited of Oberá, I engaged in a diverse range of technical tasks and projects. I was responsible for the repair and maintenance of electrical equipment, ensuring their optimal performance and longevity. I also resolved specific technical issues as they arose, developing and implementing effective solutions. Additionally, I gained hands-on experience in installing uninterruptible power supplies (UPS) to ensure continuous power availability for critical systems. My role also involved assisting with the installation and maintenance of fiber optic cables, contributing to the enhancement of high-speed communication networks. This internship provided me with practical, hands-on experience in electrical systems and telecommunications, significantly enhancing my technical skills and problem-solving abilities in real-world settings."],
    ["CNC Milling Machine Operator", "2018", "Escuela de educación Técnica EPET N°3 Polonia.  During my time at EPET N°3 Polonia Technical School, I underwent training in CNC milling machine operation. This comprehensive program covered the programming, operation, and management aspects of CNC milling machines. Through hands-on experience and theoretical instruction, I acquired the skills needed to set up, program, and operate CNC milling machines effectively. This training provided me with valuable expertise in machining processes and prepared me for practical applications in manufacturing and engineering industries."],
    ["Academic Lectures", "2019-2024", "Throughout my career, I have had the privilege of actively participating in academic presentations, both as a presenter and as an observer. This experience has allowed me not only to share my own research and projects with fellow colleagues but also to learn from the contributions and perspectives of various professionals in different fields. As a presenter, I have had the opportunity to communicate my ideas clearly and persuasively, while as an observer, I have been able to enrich my understanding of a wide range of topics and trends in my area of interest."],
    ["JIDeTEV","2019","Participated in the 2019 Research and Technological Development, Extension, Linkage and Production Exhibition Conference of the Faculty of Engineering U.Na.M. carried out from August 27 to 30, 2019 as ASSISTANT and EXHIBITOR."]
  ];

  const papers = [
    ["SAR Technology Assessment Considering Atlantic Forest Monitoring", "2022", "Facultad de ingenieria. Oberá Mnes. JIDeTEV- Año 2022 -ISSN 2591-4219. An actualized study of synthetic aperture radar (SAR) technology and its potential application to Atlantic Forest preservation are presented." ]
    ,["Diseño de carga activa para ensayo de fuentes de Tensión","2022","Facultad de ingenieria. Oberá Mnes. JIDeTEV- Año 2022 -ISSN 2591-4219. Active load design for voltage source testing refers to the process of creating a controlled electrical load to assess the performance and characteristics of voltage sources. This design involves implementing circuits or devices that can simulate varying load conditions to evaluate how well voltage sources, such as power supplies or batteries, respond under different circumstances."],
    ["Telemetría inalámbrica para sensores utilizados en microrredes eléctricas.", "2023","Facultad de ingenieria. Oberá Mnes. JIDeTEV- Año 2022 -ISSN 2591-4219. The article describes the development of a wireless telemetry system for sensors used in electric microgrids. It involves creating an embedded system consisting of three units: one main unit and two remote units capable of wireless communication."]
  ];

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
