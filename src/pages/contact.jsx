import "./styles/contact-style.css";

const IconLinks = () => {
  const iconsData = [
    ["github", "https://img.icons8.com/ios-filled/150/github.png","https://github.com/ernestokorpys","https://icons8.com/icon/12599/github"],
    ["linkedin", "https://img.icons8.com/ios/100/linkedin-circled--v1.png","https://www.linkedin.com/in/ernesto-andrés-korpys-59baa1211/","https://icons8.com/icon/60443/linkedin-circled"],
    ["gmail","https://img.icons8.com/ios/100/gmail-new.png", "mailto:ernesto.korpys@gmail.com","https://icons8.com/icon/rUgzXdXFnhmg/gmail"],
  ];


  const buttonStyle = {
    "--button-size": "60px",
  }
  const size = "40";

  return (
    <>
      <ul className="social-media-list">
      {iconsData.map((icon, index) => (
        <li key={index} style={buttonStyle}>
          <a href={icon[2]} target="_blank" rel="noreferrer">
            <img width={size} height={size} src={icon[1]} alt={icon[0]} />
          </a>
        </li>
      ))}</ul>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <section className="format-box">
        <h1>Contact</h1>
        <h2>
          Want to get in touch? Feel free to contact me for more information!
        </h2>
        <div>
          <h2>Mi social media are...</h2>
          <IconLinks />
          <div className="empty-space">
            .
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
