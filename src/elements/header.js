import "../styling/_header.scss";
import Nav from "./nav";

function Header() {
  return (
    <header>
      <Nav />
    </header>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>All rights reserved.</p>
    </div>
  );
}

export { Header, Footer };
