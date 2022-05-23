
import './App.css';
import 'D:/Web Dev/node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* red-color-navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-danger marqeehead" >
        <marquee behavior="scroll" direction="left" scrollamount="4">
          <a href="#" target="_blank">
            <font className="paytm-message">Now pay your Water and Sewrage bills online using PayTm
            </font>
          </a>
        </marquee>
      </nav>

      {/* helpline bar */}
      <div className="container-fluid border-bottom">
        <div className="row">
          <div className="col">
          </div>
          <div className="col">
          </div>
          <div className="col">
          </div>
          <div className="col">
          </div>
          <div className="col-5 text-center">
            <font className="helpline">1800 1800 0172 </font>
            <a className='screen-link' href="http://lgpunjab.gov.in/eSewa/lgpunjab-2/screen-reader/">
              <font className="screen">Screen Reader</font>
            </a>
            <div className="font-images">
              <img className='img-one' src="http://lgpunjab.gov.in/eSewa/arnivala/wp-content/plugins/zoom-widget/elements/images/1/minus.png"
                alt="+" />
              <img className='img-two' src="http://lgpunjab.gov.in/eSewa/arnivala/wp-content/plugins/zoom-widget/elements/images/1/100.png"
                alt="+" />
              <img className='img-three' src="http://lgpunjab.gov.in/eSewa/arnivala/wp-content/plugins/zoom-widget/elements/images/1/plus.png"
                alt="+" />
            </div>

            <div className="dropdown">
              <button className="btn btn-sm dropdown-toggle bg-white border" type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown" aria-expanded="false">
                Select Language
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Punjabi</a></li>
              </ul>
            </div>
          </div>
          <div className="col">
          </div>
        </div>
      </div>

      {/* covid-19 releif fund */}
      <div className="container">
        <div className="row">
          <div className="col-6 headnav">
            <img src="http://lgpunjab.gov.in/eSewa/arnivala/wp-content/uploads/sites/270/2018/09/logswch-1.png"
              alt="#" />
            <a className='panchayat-link' href="http://lgpunjab.gov.in/eSewa/arnivala/" >
              <font className="panchayat">Nagar Panchayat Arniwala S.S</font>
            </a>
          </div>
          <div className="col"></div>
          <div className="col relief">
            <a href="https://cmrf.punjab.gov.in/" target="_blank">
              <img className='fund' src="http://lgpunjab.gov.in/eSewa/wp-content/uploads/2018/06/fund.gif" alt="#" />
            </a>
          </div>
        </div>
      </div>
      {/* blue color navbar */}
      <div>
        <nav class="navbar navbar-expand-md bg-warning">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> About City </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Introduction</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Introduction</a></li>
                      <li><a class="dropdown-item" href="#">City Maps</a></li>
                      <li><a class="dropdown-item" href="#">Public Utility Services</a></li>
                      <li><a class="dropdown-item" href="#">About Us</a></li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Tourism</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Tourist Locations</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Information</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Key Documents</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Government Resolution</a></li>
                      <li><a class="dropdown-item" href="#">Citizen Charter</a></li>
                      <li><a class="dropdown-item" href="#">Notifications/Circulars</a></li>
                      <li><a class="dropdown-item" href="#">Forms</a></li>
                      <li><a class="dropdown-item" href="#">Tenders</a></li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Acts</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">RTI</a></li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="#">Help Documents</a></li>
                  <li><a class="dropdown-item" href="#">Departments</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Online Services</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Online Payments</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Water Charges</a></li>
                      <li><a class="dropdown-item" href="#">Sewer Charges</a></li>
                      <li><a class="dropdown-item" href="#">Water Estimation Fee</a></li>
                      <li><a class="dropdown-item" href="#">Sewer Estimation Fee</a></li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="#">mSeva – Property Tax, Trade License, Complaints and more</a></li>
                  <li><a class="dropdown-item" href="#">Apply New Connection</a></li>
                  <li><a class="dropdown-item" href="#">How To Apply New Connection</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">News & Events</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="#">News</a></li>
                  <li><a class="dropdown-item" href="#">Events</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Gallery</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Others</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Recruitment</a></li>
                  <li><a class="dropdown-item" href="#">FAQ</a></li>
                  <li><a class="dropdown-item" href="#">User Feedback</a></li>
                  <li><a class="dropdown-item" href="#">Tender Listing</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>



    </div>
  );
}

export default App;
