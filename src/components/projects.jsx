import phpavanzado from "../pages/images/phpavanzado.jpg";
import docker from "../pages/images/Docker1.jpg";
import arduino from "../pages/images/Arduino.jpg";
import plc from "../pages/images/PLC.jpg";

const Projects = () => {
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
          Some of my most notable experiences include the following topics. I
          possess a wide range of skills that encompass various technologies and
          disciplines. You can check more of them on my
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
          page.
        </p>
        <Proyect />
      </section>
    </>
  );
};
export default Projects;
