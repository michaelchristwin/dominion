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
      <div className="second bg-black text-white">
        <h2 className="title">About</h2>
        <section>
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
            <img src={Switchlg} alt="Switch logo" style={{ height: "40px" }} />1
            year internship at Switch Electric Ltd as a Junior Front End Dev
            <span>
              <a href="https://whynotswitch.github.io/Switch-NFT-Marketplace-React/">
                <LaunchIcon />
              </a>
            </span>
            <div>
              <span>
                <p className="text-decoration-underline">Responsibilities</p>
              </span>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

export default Home;
