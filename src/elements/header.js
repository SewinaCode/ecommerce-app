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
    <div>
      <h2>Hello World</h2>
    </div>
  );
}

export { Header, Footer };
