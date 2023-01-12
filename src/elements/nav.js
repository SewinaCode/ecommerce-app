import "../styling/_nav.scss";

export default function Nav() {
  return (
    <nav>
      <div className="left-side">
        <i className="fa fa-bars" />
        <h2>amazona</h2>
      </div>
      <div className="right-side">
        <a href="#">Cart</a>
        <a href="#">Sign in</a>
      </div>
    </nav>
  );
}
