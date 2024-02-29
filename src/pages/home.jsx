import "./styles/home-style.css";
import "./styles/image-style.css";
import React from "react";
import ProfilePicture from "./images/ProfilePicture.png";
import Phpintermedio from "./images/phpintermedio.jpg";
import phpavanzado from "./images/phpavanzado.jpg";
import nodered from "./images/nodered.jpg";
import docker from "./images/Docker1.jpg";
import arduino from "./images/Arduino.jpg";
import plc from "./images/PLC.jpg";
import react_icon from "./icons/icons8-react-native-64.png";

{
  /* Seccion Sobre mí 
las que aprendo
las que uso 
Herramientas y progrmas que uso*/
}

const AboutMe = () => {
  return (
    <section className="format">
      <div className="detailsbox">
        <h1>About me</h1>
        <p>
          Welcome. I am Ernesto Korpys and I will be an{" "}
          <strong>Electronics Engineer.</strong>
          Throughout my career, I have gained experience in various programming
          languages such as{" "}
          <strong>Python, C, C++, Matlab, Assembler, and Ladder</strong>. I have
          also worked with embedded systems, signal processing, algorithm
          design, databases, and project management. Currently, I am in the
          final stages of completing the last 2 subjects of my masters degree.
          During my education, I have actively participated in research projects
          and presented several published works. I am currently engaged in
          further courses related to software development, internet of things,
          web design, and app development, encompassing{" "}
          <strong>HTML, CSS, JAVA, JavaScript, React, PHP, MySQL, etc.</strong>{" "}
          These experiences have equipped me to effectively work both
          independently and collaboratively, enabling me to provide creative
          solutions to challenging tasks that demand cognitive processes,
          patience, effective communication, dedication, and meticulousness..
        </p>
        <article className="skills">
          <div className="card">
            <h2>Argentinian/Poslish</h2>
          </div>
          <div className="card">
            <h2>First Certificate Intermediate B2</h2>
          </div>
          <div className="card">
            <h2>Willing to relocate</h2>
          </div>
          <div className="card">
            <h2>Priscila Semañuk</h2>
          </div>
        </article>
      </div>
    </section>
  );
};

const Proyects = () => {
  const Proyect = () => {
    const images = [phpavanzado, docker, arduino, plc];
    const titles = [
      "PHP & MySQL advanced",
      "Internet of Things IOT",
      "Arduino  & Esp32 Modules",
      "PLC Programming",
    ];
    const descriptions = [
      "Design and development of web pages using PHP with MySQL database integration, enabling direct communication for seamless creation and active content editing. Additionally, includes implementation of user registration forms and a shopping cart for products.",
      "Development and programming of a remote humidity and temperature monitoring system. Includes a telegram bot for alarms. System developed with Docker, Grafana, phpmyadmin, node-red, mosquitto, among other technologies",
      "My professional experience encompasses programming boards with Arduino and ESP32 microcontrollers. I specialize in ADC setup, handling of input/output ports, implementation of control logic and data processing. Furthermore, I have experience linking these microcontrollers to the development of electronic circuits designed to adapt their inputs and outputs to a variety of devices, such as sensors and actuators, etc.",
      "My professional background encompasses work with PLCs (Programmable Logic Controllers) for automating the operation of valves in large-scale industrial processes. This includes designing the HMI (Human-Machine Interface) and SCADA for monitoring and remotely controlling various process variables.",
    ];

    return (
      <>
        <div className="proyect-container">
          {titles.map((title, index) => (
            <div className="proyect-item" key={index}>
              <div className="nft">
                <div className="main">
                  <img
                    className="tokenImage"
                    src={images[index]}
                    alt="topic-image"
                  />
                  <h2>{title}</h2>
                  <p className="description">{descriptions[index]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <section className="proyect-box">
        <h1>My work</h1>
        <p>Some</p>
        <Proyect />
      </section>
    </>
  );
};

const ProfileCard = () => {

  return (
    <section className="format2">
      <div className="presentation">
        <div className="introcuction">
          <div className="title1">Korpys <br/> Ernesto</div>
          <br/>
          <div className="title2">Software developer</div>
          <br/>

          <div className="button-style">
            <button style={{ "--clr": "#FF00A5" }}>
              <span>Resume</span>
              <i className="icon"></i>
            </button>
            <button style={{ "--clr": "#8A2BE2" }}>
              <a
                href="https://www.linkedin.com/in/ernesto-andrés-korpys-59baa1211/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>a LinkedIn</span>
                <i className="icon"></i>
              </a>
            </button>
          </div>
        </div>

        <div className="profile-picture">
          <img src={ProfilePicture} alt="Profile Picture" />
        </div>
      </div>
    </section>
  );
};

const Tecnologias = () => {
  const size = "48";
  const programmingLanguages = [
    [
      "Python",
      `https://img.icons8.com/color/${size}/python--v1.png`,
      "https://icons8.com/icon/13441/python",
    ],
    [
      "C++",
      `https://img.icons8.com/color/${size}/c-plus-plus-logo.png`,
      "https://icons8.com/icon/6RHskkZGRABM/c-plus-plus-logo",
    ],
    [
      "C",
      `https://img.icons8.com/color/${size}/c-programming.png`,
      "https://icons8.com/icon/40670/c-programming",
    ],
    [
      "JavaScript",
      `https://img.icons8.com/color/${size}/javascript--v1.png`,
      "https://icons8.com/icon/108784/javascript",
    ],
  ];

  const webDesign = [
    [
      "HTML",
      `https://img.icons8.com/color/${size}/html-5--v1.png`,
      "https://icons8.com/icon/20909/html",
    ],
    [
      "CSS",
      `https://img.icons8.com/color/${size}/css3.png`,
      "https://icons8.com/icon/21278/css",
    ],
    [
      "React Native",
      `https://img.icons8.com/officel/${size}/react.png`,
      "https://icons8.com/icon/wPohyHO_qO1a/react",
    ],
    [
      "Vite",
      `https://img.icons8.com/fluency/${size}/vite.png`,
      "https://icons8.com/icon/6paIGl2LDcN4/vite",
    ],
    [
      "PHP",
      `https://img.icons8.com/external-those-icons-flat-those-icons/${size}/external-PHP-programming-and-development-those-icons-flat-those-icons.png`,
      "https://icons8.com/icon/YrKoPXb4jv9l/php",
    ],
    [
      "MySQL",
      `https://img.icons8.com/external-those-icons-flat-those-icons/${size}/external-MySQL-programming-and-development-those-icons-flat-those-icons.png`,
      "https://icons8.com/icon/rgPSE6nAB766/mysql",
    ],
  ];

  const programs = [
    [
      "Arduino",
      `https://img.icons8.com/color/${size}/arduino.png`,
      "https://icons8.com/icon/13444/arduino",
    ],
    [
      "PLC",
      `https://img.icons8.com/fluency/${size}/programming-logic-controller.png`,
      "https://icons8.com/icon/bQbX7tMYRcoT/plc",
    ],
    [
      "Visual Studio Code",
      `https://img.icons8.com/color/${size}/visual-studio-code-2019.png`,
      "https://icons8.com/icon/9OGIyU8hrxW5/visual-studio-code",
    ],
    [
      "MATLAB",
      `https://img.icons8.com/fluency/${size}/matlab.png`,
      "https://icons8.com/icon/r5Y16PcDkoWI/matlab",
    ],
    [
      "Sublime Text",
      `https://img.icons8.com/fluency/${size}/sublime-text.png`,
      "https://icons8.com/icon/6RHskkZGRABM/sublime-text",
    ],
  ];

  const miscellaneous = [
    [
      "GitHub",
      `https://img.icons8.com/ios-filled/${size}/github.png`,
      "https://icons8.com/icon/12599/github",
    ],
    [
      "Docker",
      `https://img.icons8.com/fluency/${size}/docker.png`,
      "https://icons8.com/icon/cdYUlRaag9G9/docker",
    ],
    [
      "MariaDB",
      `https://img.icons8.com/color/${size}/maria-db.png`,
      "https://icons8.com/icon/nrY6pkbRkJCi/mariadb",
    ],
    [
      "Grafana",
      `https://img.icons8.com/fluency/${size}/grafana.png`,
      "https://icons8.com/icon/9uVrNMu3Zx1K/grafana",
    ],
    [
      "Microsoft PowerPoint",
      `https://img.icons8.com/officel/${size}/microsoft-powerpoint-2019.png`,
      "https://icons8.com/icon/4qxQxFcFu3zS/microsoft-powerpoint-2019",
    ],
    [
      "Microsoft Word",
      `https://img.icons8.com/office/${size}/microsoft-word-2019.png`,
      "https://icons8.com/icon/q3phJprgwgr8/microsoft-word-2019",
    ],
    [
      "Microsoft Excel",
      `https://img.icons8.com/officel/${size}/ms-excel.png`,
      "https://icons8.com/icon/MLmDFgD6Aywl/microsoft-excel",
    ],
  ];

  const iconsinfo = [programmingLanguages, webDesign, programs, miscellaneous];
  const nameCategory = [
    "Programing Languages",
    "Web Design",
    "Software",
    "Miscellaneous",
  ];

  const renderTable = (sectionTitle, icons) => (
    <div className="icon-container">
      <h2>{sectionTitle}</h2>
      <table>
        {icons.map((icon, index) => (
          <tr key={index}>
            <td>
              <img src={icon[1]} alt={icon[0]} width={size} height={size} />
            </td>
            <td>{icon[0]}</td>
          </tr>
        ))}
      </table>
    </div>
  );

  return (
    <>
      <div className="proyect-box">
        <div>
          <h2>Technology</h2>
          <p>
            A lo largo de mi experiencia he trabajado con varios tipos de
            software, framewor y lenguajes que me sirveron como herramienta para
            alcanzar los objetivos en mis proyectos. Por o que este es el
            remsumen de alguno de ellos.
          </p>
          <div className="proyect-container2">
            {iconsinfo.map((category, index) =>
              renderTable(`${nameCategory[index]}`, category)
            )}
          </div>
          <div>
            <br></br>
            <br></br>
            Icons available at{" "}
            {iconsinfo.flatMap((category) =>
              category.map((icon, index) => (
                <React.Fragment key={index}>
                  <a href={icon[2]}>{icon[0]}</a>
                  {index < category.length - 1 && ", "}
                </React.Fragment>
              ))
            )}
            . Thanks to <a href="https://icons8.com">Icons8</a>
          </div>
        </div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <ProfileCard />
      <AboutMe />
      <Proyects />
      <Tecnologias />
    </>
  );
};
export default Home;
