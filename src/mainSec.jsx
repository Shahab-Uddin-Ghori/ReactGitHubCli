import assetImg1 from "./img/asset1.svg";
import assetImg3 from "./img/asset3.svg";
import Type1js from "./type1js";
import Type2 from "./type2js";
import Type3 from "./type3";

const MainSec = () => {
  //  <!-- ********************************************* Main ******************************************** -->
  return (
    <main>
      {/* <!-- /////// Sec 1 ////////// --> */}
      <div className="top-heading-container">
        <div className="for-center">
          <div className="top-heading">
            <h1>
              Take GitHub to the
              <br />
              command line
            </h1>
          </div>
          {/* <!-- ///// for small screen only --> */}
          <h1 className="top-heading-scr">Take GitHub to the command line</h1>
          <p className="top-heading-para-scr">
            GitHub CLI brings GitHub to your terminal. Free and open source.
          </p>
          {/* <!-- ///// for small screen only --> */}
          <div className="top-heading-para">
            <p>
              GitHub CLI brings GitHub to your terminal. Free and
              <br />
              open source.
            </p>
          </div>
          <div className="button-container">
            <button className="btn">Download for Windows</button>
          </div>
          <p className="i-inst">
            <a href="">View all installation instructions &#8594;</a>
          </p>
        </div>
      </div>
      {/* <!-- /////// Sec 1  end ////////// --> */}
      {/* <!-- //////////// Sec 2 ///////// --> */}
      <div className="cli-interface-sec-container">
        <div className="cli-interface-sec">
          <div className="cli-interface-top-content">
            <span>&dollar;</span>
            <p className="cli-title">
              <Type1js />
            </p>
            <br />
          </div>
          <div className="cli-interface-top-content">
            <p>
              &nbsp;
              <a href="" className="cli-title-detail">
                <Type2 />
              </a>
            </p>
          </div>
          <div className="cli-interface">
            <div className="cli-interface-inner-nav">
              <div className="circle-container">
                <div className="cirle"></div>
                <div className="cirle"></div>
                <div className="cirle"></div>
              </div>
              <a href="#">
                <img src={assetImg1} alt="asset1Img" />
              </a>
            </div>
            <div className="cli-interface-content">
              <p className="interface-text">
                <Type3 />
              </p>
            </div>
          </div>
          <div className="cli-interface-bottom-content">
            <h2>View all GitHub CLI commands →</h2>
          </div>
        </div>
      </div>
      {/* <!-- //////////// Sec 2 end ///////// --> */}
      {/* <!-- ////////////////// sec 3  /////////// --> */}
      <div className="sec3-container">
        <div className="sec-3">
          <div className="sec-heading">
            <h1>Goodbye, context switching.</h1>
            <h1>Hello, terminal.</h1>
          </div>
          <div className="sec3-link-container">
            <div className="sec3-links">
              <h3>
                Your entire GitHub <br />
                workflow
              </h3>
              <p>Work with issues, pull requests, checks, releases and more.</p>
              <a href="">View all GitHub CLI commands →</a>
            </div>
            <div className="sec3-links">
              <h3>Script and customize</h3>
              <p>
                Call the GitHub API to script almost any action, and set a
                custom alias for any command.
              </p>
              <a href="">Learn about aliases and API →</a>
            </div>
            <div className="sec3-links">
              <h3>Enterprise-ready</h3>
              <p>
                Connect to GitHub Enterprise Server in addition to GitHub.com.
              </p>
              <a href="">Get set up with Enterprise →</a>
            </div>
            <div className="sec3-links">
              <h3>We&#60;community</h3>
              <p>Work with issues, pull requests, checks, releases and more.</p>
              <a href="">View all GitHub CLI commands →</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ////////////////// sec 3 end /////////// --> */}
      {/* <!-- ////////////////// sec 4  /////////// --> */}
      <div className="sec4-container">
        <div className="sec-4-text-container">
          <h1>Try GitHub on the command line</h1>
          <p>
            GitHub CLI brings GitHub to your terminal. Free and open source.
          </p>
          <div className="button-container">
            <button className="btn btn-color">Download for Windows</button>
          </div>
          <p>
            <a href="">View installation instructions →</a>
          </p>
        </div>
      </div>
      {/* <!-- ////////////////// sec 4 end /////////// --> */}
      {/* <!-- ////////////////// sec 5 end /////////// --> */}
      <div className="sec5-list-container">
        <div className="github-text-img">
          <img src={assetImg3} alt="asset3img" />
        </div>
        <div className="li-container">
          <ul>
            <li className="li-heading">Product</li>
            <li>
              <a href="" className="li-link">
                Features
              </a>
            </li>
            <li>
              <a href="" className="li-link">
                Security
              </a>
            </li>
            <li>
              <a href="" className="li-link">
                Enterprise
              </a>
            </li>
            <li>
              <a href="" className="li-link">
                Customer stories
              </a>
            </li>
            <li>
              <a href="" className="li-link">
                Pricing
              </a>
            </li>
            <li>
              <a href="" className="li-link">
                Resources
              </a>
            </li>
          </ul>
          <ul>
            <li className="li-heading link-3-4">Platform</li>
            <li>
              <a href="" className="li-link">
                Developer API
              </a>
            </li>
            <li>
              <a href="" className="li-link">
                Partners
              </a>
            </li>
            <li>
              <a href="" className="li-link">
                Atom
              </a>
            </li>
            <li>
              <a href="" className="li-link">
                Electron
              </a>
            </li>
            <li>
              <a href="" className="li-link">
                GitHub Desktop
              </a>
            </li>
          </ul>
          <ul>
            <li className="li-heading">Support</li>
            <li>
              <a href="" className="li-link">
                Help
              </a>
            </li>
            <li>
              <a href="" className="li-link">
                Community Forum
              </a>
            </li>
            <li>
              <a href="" className="li-link">
                Professional Services
              </a>
            </li>
            <li>
              <a href="" className="li-link">
                Learning Lab
              </a>
            </li>
            <li>
              <a href="" className="li-link">
                Status
              </a>
            </li>
            <li>
              <a href="" className="li-link">
                Contact GitHub
              </a>
            </li>
          </ul>
          <ul>
            <li className="li-heading link-3-4">Company</li>
            <li>
              <a href="" className="li-link">
                About
              </a>
            </li>
            <li>
              <a href="" className="li-link">
                Blog
              </a>
            </li>
            <li>
              <a href="" className="li-link">
                Careers
              </a>
            </li>
            <li>
              <a href="" className="li-link">
                Press
              </a>
            </li>
            <li>
              <a href="" className="li-link">
                Shop
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- ////////////////// sec 5 End/////////// --> */}
    </main>
  );
  // <!-- ********************************************* Main end******************************************** -->
};
export default MainSec;
