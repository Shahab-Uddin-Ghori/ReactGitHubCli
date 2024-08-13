const Header = () => {
  //    <!-- ***************************************** header ************************************** -->
  return (
    <header>
      <nav className="navbar-container">
        <div className="navbar-github-logo">
          <i className="bx bxl-github"></i>
          <h4>CLI</h4>
        </div>
        <div className="navbar-right-div">
          <h4>
            <a href="">Manual</a>
          </h4>
          <h4>
            <a href="">Release notes</a>
          </h4>
        </div>
      </nav>
    </header>
  );
  // <!-- ***************************************** header end ************************************** -->
};
Header();
export default Header;
