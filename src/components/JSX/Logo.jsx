import "../CSS/styles.css";

function Logo(props) {
  return (
    <div>
      <img
        className="img mx-2"
        id="tools"
        src={props.img}
        alt="tools logo"
        style={{ height: "100px" }}
      />
    </div>
  );
}

export default Logo;
