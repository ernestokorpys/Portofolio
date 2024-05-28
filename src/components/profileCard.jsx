import ProfilePicture from "../pages/images/ProfilePicture.png";

const ProfileCard = () => {
    return (
      <section className="format2">
        <div className="presentation">
          <div className="introcuction">
            <div className="title1">
              Korpys <br /> Ernesto
            </div>
            <br />
            <div className="title2">Software developer</div>
            <br />
  
            <div className="button-style">
              <button style={{ "--clr": "#FF00A5" }}>
                <a
                  href="https://drive.google.com/file/d/16K7zy8d654p_xmkF4LjbQyafb4eYYS1U/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Resume</span>
                  <i className="icon"></i>
                </a>
              </button>
              <button style={{ "--clr": "#8A2BE2" }}>
                <a
                  href="https://www.linkedin.com/in/ernesto-andrés-korpys-59baa1211/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>LinkedIn</span>
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
  
  export default ProfileCard;