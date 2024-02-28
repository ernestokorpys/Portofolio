import "./styles/home-style.css";
import "./styles/image-style.css";

import ProfilePicture from "./images/ProfilePicture.png";
import Phpintermedio from "./images/phpintermedio.jpg";
import phpavanzado from "./images/phpavanzado.jpg";
import nodered from "./images/nodered.jpg";
import docker from "./images/Docker1.jpg";

{
  /* Seccion Sobre mí 
las que aprendo
las que uso 
Herramientas y progrmas que uso*/
}
const Tecnologias = () => {
  return <div>sdf</div>;
};

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
            <h2>Driver License</h2>
          </div>
        </article>
      </div>
    </section>
  );
};

const Proyect = () => {
  const images = [Phpintermedio, phpavanzado, nodered];
  const titles = [
    "PHP & MySQL advanced",
    "Internet of Things IOT",
    "Internet of Things IOT",
    "Item 4",
  ];
  const descriptions = [
    "Desarrollo de paginas web con PHP e integranción base de datos MySQL para una comunicación directa permitiendo la creacion y edición de contenido de manera activa. Ademas de integrar formularios de registro de usuarios y un carrito de compras de productos.",
    "Development and programming of a remote humidity and temperature monitoring system. Includes a telegram bot for alarms. System developed with Docker, Grafana, phpmyadmin, node-red, mosquitto, among other technologies",
    "Descripción 3",
    "Descripcion 4",
  ];

  return (
    <>
      <div className="proyect-container">
        {titles.map((title, index) => (
          <div className="proyect-item" key={index}>
            <div className="nft">
              <div className="main">
                <img className="tokenImage" src={images[index]} alt="topic-image" />
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

const Proyects = () => {
  return (
    <>
      <section className="proyect-box">
        <h1>My work</h1>
        <Proyect />
      </section>
    </>
  );
};

const Home = () => {
  return (
    <>
      <section>
        <div className="presentation">
          <div className="introcuction">
            <h1>Software developer </h1>
            <h2>Korpys Ernesto</h2>
            <div className="button-style">
              <button style={{ "--clr": "#39FF14" }}>
                <span>Descargar CV</span>
                <i className="icon"></i>
              </button>
              <p>.........</p>
              <button style={{ "--clr": "#8A2BE2" }}>
                <span>a LinkedIn</span>
                <i className="icon"></i>
              </button>
            </div>
          </div>

          <div className="profile-picture">
            <img src={ProfilePicture} alt="Profile Picture" />
          </div>
        </div>
      </section>
      <AboutMe />
      <Proyects />
      <Tecnologias />
    </>
  );
};
export default Home;
