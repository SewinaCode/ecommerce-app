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
    <header>
      <h2>Hello World</h2>
    </header>
  );
}

export { Header, Footer };
