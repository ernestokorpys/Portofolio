import phpavanzado from "../pages/images/phpavanzado.jpg";
import docker from "../pages/images/Docker1.jpg";
import arduino from "../pages/images/Arduino.jpg";
import plc from "../pages/images/PLC.jpg";
import golang from "../pages/images/golang.png";
import { Link } from 'react-router-dom';

const Projects = () => {
  const Proyect = () => {
    const images = [phpavanzado, docker, arduino, plc, golang];
    const titles = [
      "PHP & MySQL advanced",
      "Internet of Things IOT",
      "Arduino  & Esp32 Modules",
      "PLC Programming",
      "E-commerce shop",
    ];
    const descriptions = [
      "Design and development of web pages using PHP with MySQL database integration, enabling direct communication for seamless creation and active content editing. Additionally, includes implementation of user registration forms and a shopping cart for products.",
      "Development and programming of a remote humidity and temperature monitoring system. Includes a telegram bot for alarms. System developed with Docker, Grafana, phpmyadmin, node-red, mosquitto, among other technologies",
      "My professional experience encompasses programming boards with Arduino and ESP32 microcontrollers. I specialize in ADC setup, handling of input/output ports, implementation of control logic and data processing. Furthermore, I have experience linking these microcontrollers to the development of electronic circuits designed to adapt their inputs and outputs to a variety of devices, such as sensors and actuators, etc.",
      "My professional background encompasses work with PLCs (Programmable Logic Controllers) for automating the operation of valves in large-scale industrial processes. This includes designing the HMI (Human-Machine Interface) and SCADA for monitoring and remotely controlling various process variables.",
      "I undertook the development of a basic e-commerce platform as a personal project, utilizing Go with the Fiber framework for the backend and React for the frontend. This initiative aimed to demonstrate my proficiency in full-stack development while creating a functional online store. The project encompasses essential features such as user authentication, product listings, and a shopping cart, showcasing my ability to create dynamic and interactive web applications. Through this endeavor, I gained valuable experience in both backend and frontend technologies, enhancing my skills in building robust and user-friendly web solutions.",
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
        <h1>
          My work
          <a
            href="https://github.com/ernestokorpys"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/ios-filled/150/github.png"
              alt="github"
            />
          </a>
        </h1>
        <p>
        Among my most remarkable experiences are a diverse array of topics and skills spanning across various technologies and disciplines. My expertise lies in adapting to new challenges,
        languages, and technologies, consistently pushing the boundaries of what is possible. 
        While not all my work is meticulously documented, 
        a more comprehensive understanding of my capabilities can be gleaned from my 
          <strong>
            <a
              href="https://github.com/ernestokorpys"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Github
            </a>
          </strong>{" "}
          page. Additionally, for a deeper insight into my professional journey and skill set, feel free to explore my LinkedIn profile or the <strong><Link to="/about-me"> About Me </Link></strong> section on my website.
        </p>
        <Proyect />
      </section>
    </>
  );
};
export default Projects;
