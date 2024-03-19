import "./styles/home-style.css";
import "./styles/image-style.css";

import AboutMe from "../components/aboutMe";
import ProfileCard from "../components/profileCard";
import Tecnology from "../components/tecnology";
import Projects from "../components/projects";

const Home = () => {
  return (
    <>
      <ProfileCard />
      <AboutMe />
      <Projects />
      <Tecnology />
    </>
  );
};
export default Home;
