import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src="/images/godsbanenlogo.svg" alt="" />
      <button className="burger-button" aria-label="Menu">
        <span></span>
        <span></span>
      </button>
    </div>
  );
}

export default Header;
