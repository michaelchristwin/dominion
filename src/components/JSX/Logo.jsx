function Logo(props) {
  return (
    <div>
      <img
        className="img rounded mx-2"
        src={props.img}
        alt="tools logo"
        style={{ height: "100px" }}
      />
    </div>
  );
}

export default Logo;
