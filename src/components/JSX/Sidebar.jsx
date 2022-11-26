import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "../img/avatar2.jpg";

function Sidebar() {
  return (
    <div className="first bg-dark">
      <section className="d-flex flex-column " id="sidebar">
        <h3 className="top bg-black container-fluid">Meet Michael Christwin</h3>
        <img src={Avatar} alt="Michael Christwin" id="avatar" className="" />
        <p>
          <b>Michael Christwin</b>
        </p>
        <div className="links">
          <a href="https://www.linkedin.com/in/michael-christwin-b8b980253/">
            <LinkedInIcon />
          </a>
          <a href="https://twitter.com/mikechristwin?t=c7q0bZpZFC_NO1DFpgzapA&s=09">
            <TwitterIcon />
          </a>
          <a href="https://github.com/michaelchristwin">
            <GitHubIcon />
          </a>
          <a href="mailto:kelechukwuchristwin@gmail.com">
            <EmailIcon />
          </a>
        </div>
      </section>
      <section className="d-flex flex-column bg-dark" id="sidebar2">
        <a href="#home">
          <PersonIcon /> Bio
        </a>
      </section>
    </div>
  );
}

export default Sidebar;
