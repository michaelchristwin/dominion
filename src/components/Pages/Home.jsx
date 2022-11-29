import "../CSS/styles.css";
import Logo from "../JSX/Logo";
import Sidebar from "../JSX/Sidebar";
import Switchlg from "../img/logos/switchlg.png";
import LaunchIcon from "@mui/icons-material/Launch";

function Home() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8];
  const logoElement = nums.map((num) => {
    return <Logo key={num} img={require(`../img/logos/logo${num}.png`)} />;
  });
  return (
    <main className="d-flex">
      <Sidebar />
      <div className="second text-white">
        <div className="title bg-black">
          <h4>ABOUT</h4>
        </div>
        <section className="page-2">
          <aside className="aside1">
            <em>
              <b>Michael Christwin </b>
            </em>
            is a goal oriented, Self taught programmer with over 3 years
            experience. He is currently a specialized <b>MERN</b> Stack
            developer. His general interest are Artificial intelligence,
            software technology, music and video games.
            <h5>Goals</h5>
            <ol>
              <li>To be the best at what i do</li>
              <li>To make a name for my self in the industry</li>
              <li>999 Shit</li>
            </ol>
          </aside>
          <div className="bg-black rounded" id="toolkit">
            <h4 className="text-center text-white">TOOLKIT</h4>
          </div>
          <aside className="aside2 d-flex py-3">{logoElement}</aside>
          <div className="bg-black rounded">
            <h4 className="text-center">PORTFOLIO</h4>
          </div>
          <aside className="aside3 text-center">
            <img
              src={Switchlg}
              alt="Switch logo"
              style={{ height: "40px" }}
              className="mx-3 img-thumbnail"
            />
            <span>
              <b>Title:</b> Junior Front End Dev
            </span>
            <span>
              <b>Company:</b> Switch Electric Ltd
            </span>
            <br />
            <span>
              Projects: Switch NFT Marketplace
              <a href="https://whynotswitch.github.io/Switch-NFT-Marketplace-React/">
                <LaunchIcon />
              </a>
            </span>
            <br />
            <br />
            <div>
              <ul>
                <p className="text-decoration-underline">
                  <b>Core Responsibilities</b>
                </p>
                <li>
                  Writing clean, concise and reusable code on front-end projects
                  thus increasing web traffic by 20%.
                </li>
                <li>
                  Colaborating with the Senior Front End Dev and UI/UX designer
                  to improve initial designs and develop new ones.
                </li>
                <li>
                  Holding meetings weekly with the project manager and other
                  team members to discuss the progress of the project.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corrupti sapiente, quidem error laboriosam tempora iste, nobis
                  eius sed quasi minus aspernatur cupiditate possimus et? Odit
                  neque expedita rem ipsam maxime.
                </li>
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

export default Home;
