import "./Project.css";
import project from "../img/Project/forest.jpg";
import ergompc from "../img/Project/ERGO-MPC1.png";
import ergofmw from "../img/Project/ERGO-FMW.png";
import ergosme from "../img/Project/ERGO-SME.png";
import ergopa from "../img/Project/ERGO-PA.png";
import ScreenHeading from "../utilities/ScreenHeading/ScreenHeading";

export default function Project() {
  return (
    <>
      <ScreenHeading title={"Project"} subHeading={"My formal Bio Details"} />
        <div className="cart-container">
          <div className="card">
            <img className="card-img" style={{objectPosition: 'center' }} src={ergofmw} alt="card" />
            <div className="card-body">
              <h5 className="card-title">ERGO FMW</h5>
              <p className="card-sub-title">
              Foreign Migrant Worker's Accident Protect - ERGO</p>
              <p className="card-info">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              {/* <button className='card-btn'>Click here</button> */}
              <button className="btn highlighted-btn">Click here</button>
            </div>
          </div>

          <div className="card">
            <img className="card-img"  src={ergompc} alt="card" />
            <div className="card-body">
              <h1 className="card-title">ERGO MPC</h1>
              <p className="card-sub-title">Motor Protect Corporation</p>
              <p className="card-info">
              You can insure your car on Comprehensive Cover, Third Party Fire and Theft, or just a Third Party Cover. Simply select the cover which suits your needs and budget.
              </p>

              {/* <button className='card-btn'>Click here</button> */}
              <button className="btn highlighted-btn">Click here</button>
            </div>
          </div>

          <div className="card">
            <img className="card-img" src={ergosme} alt="card" />
            <div className="card-body">
              <h1 className="card-title">ERGO SME</h1>
              <p className="card-sub-title">Small And Meadium Business</p>
              <p className="card-info">
              ERGO BizProtect is a comprehensive business insurance package tailored to provide multi-line coverages for the Food and Beverage, Retail and Services, Office and Light Industrial segments.
              </p>

              {/* <button className='card-btn'>Click here</button> */}
              <button className="btn highlighted-btn">Click here</button>
            </div>
          </div>

          <div className="card">
            <img className="card-img" src={ergopa} alt="card" />
            <div className="card-body">
              <h1 className="card-title">ERGO-PA</h1>
              <p className="card-sub-title">My another project</p>
              <p className="card-info">
              ERGO AccidentProtect Individual is a comprehensive yet flexible insurance plan that offers you 24-hour worldwide protection from personal accident with a full range of coverage, including accidental medical expenses
              </p>

              {/* <button className='card-btn'>Click here</button> */}
              <button className="btn highlighted-btn">Click here</button>
            </div>
          </div>
        </div>
     

      <div className="cart-container">
        <div className="card">
          <img className="card-img" src={project} alt="card" />
          <div className="card-body">
            <h1 className="card-title">udeeka</h1>
            <p className="card-sub-title">My another project</p>
            <p className="card-info">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            {/* <button className='card-btn'>Click here</button> */}
            <button className="btn highlighted-btn">Click here</button>
          </div>
        </div>
      </div>
    </>
  );
}
