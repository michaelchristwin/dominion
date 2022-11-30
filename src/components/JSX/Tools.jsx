import Switchlg from "../img/logos/switchlg.png";
import LaunchIcon from "@mui/icons-material/Launch";

function Tools() {
  return (
    <aside className="aside3 text-center d-flex">
      <span>
        <img
          src={Switchlg}
          alt="Switch logo"
          style={{ height: "40px" }}
          className="mx-3 img-thumbnail"
        />
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
            Writing clean, concise and reusable code on front-end projects thus
            increasing web traffic by 20%.
          </li>
          <li>
            Colaborating with the Senior Front End Dev and UI/UX designer to
            improve initial designs and develop new ones.
          </li>
          <li>
            Holding meetings weekly with the project manager and other team
            members to discuss the progress of the project.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            sapiente, quidem error laboriosam tempora iste, nobis eius sed quasi
            minus aspernatur cupiditate possimus et? Odit neque expedita rem
            ipsam maxime.
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Tools;
