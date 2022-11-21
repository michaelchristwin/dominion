import Avatar from "../img/avatar2.jpg";
import "../CSS/styles.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";

function Home() {
  return (
    <main className="d-flex">
      <div className="first bg-dark">
        <section className="d-flex flex-column " id="sidebar">
          <h3 className="top bg-black container-fluid">
            Meet Michael Christwin
          </h3>
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
          <a href="">
            <PersonIcon /> Bio
          </a>
        </section>
      </div>
      <div className="second bg-black text-white">
        <div className="title">About</div>
        <section>
          <aside className="aside1">
            <em>
              <b>Michael Christwin </b>
            </em>
            is a Self taught programmer with over 2 years experienced in Front
            End Development. He is currently specialized in Web Development with
            React JS || Bootstrap || Node js || Redux
          </aside>
          <div className="bg-black rounded" id="toolkit">
            <h4 className="text-center text-white">TOOLKIT</h4>
          </div>
          <aside className="aside2">hfhfhfhfhffhf</aside>
        </section>
      </div>
    </main>
  );
}

export default Home;
