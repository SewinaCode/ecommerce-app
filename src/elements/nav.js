import "../styling/_nav.scss";

export default function Nav() {
  return (
    <nav>
      <div className="left-side">
        <i className="fa fa-bars" />
        <h2>amazona</h2>
      </div>
      <div className="right-side">
        <a>Cart</a>
        <a>Sign in</a>
      </div>
    </nav>
  );
}
