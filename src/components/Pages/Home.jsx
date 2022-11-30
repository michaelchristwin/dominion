import "../CSS/styles.css";
import Logo from "../JSX/Logo";
import Tools from "../JSX/Tools";
import Sidebar from "../JSX/Sidebar";

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
          <Tools />
        </section>
      </div>
    </main>
  );
}

export default Home;
