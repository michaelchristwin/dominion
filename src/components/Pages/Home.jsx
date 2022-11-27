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
          <h2>About</h2>
        </div>

        <section className="page-2">
          <aside className="aside1">
            <em>
              <b>Michael Christwin </b>
            </em>
            is a Self taught programmer with over 2 years experience. He is
            currently a specialized <b>MERN</b> Stack developer. His general
            interest are cryptocurrencies, software technology, music and video
            games.
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
              className="float-start"
            />
            <span>
              <b>Title:</b> Junior Front End Dev at Switch Electric Ltd
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
                  <b>Responsibilities</b>
                </p>
                <li>
                  Developed a responsive web app for their NFT marketplace
                  increasing web traffic by 20%.
                </li>
                <li>
                  Colaborating with the Senior Front End Dev and UI/UX designer
                  to improve performance.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                  vel non sint, et obcaecati, mollitia rem natus eum vitae at
                  quod aliquam harum nostrum numquam doloribus totam tenetur
                  expedita odio.
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
