
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
                        alt="+"/>
                    <img className='img-two' src="http://lgpunjab.gov.in/eSewa/arnivala/wp-content/plugins/zoom-widget/elements/images/1/100.png"
                        alt="+"/>
                    <img className='img-three' src="http://lgpunjab.gov.in/eSewa/arnivala/wp-content/plugins/zoom-widget/elements/images/1/plus.png"
                        alt="+"/>
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
                    alt="#"/>
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
    
    </div>
  );
}

export default App;
