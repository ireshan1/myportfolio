import "./Project.css";
import project from "../img/Project/forest.jpg";
import ScreenHeading from "../utilities/ScreenHeading/ScreenHeading";

export default function Project() {
  return (
    <>
      <ScreenHeading title={"Project"} subHeading={"My formal Bio Details"} />
        <div className="cart-container">
          <div className="card">
            <img className="card-img" src={project} alt="card" />
            <div className="card-body">
              <h4 className="card-title">ERGO</h4>
              <p className="card-sub-title">My another project</p>
              <p className="card-info">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              {/* <button className='card-btn'>Click here</button> */}
              <button className="btn highlighted-btn">Get Resume</button>
            </div>
          </div>

          <div className="card">
            <img className="card-img" src={project} alt="card" />
            <div className="card-body">
              <h1 className="card-title">ERGO MPC</h1>
              <p className="card-sub-title">My another project</p>
              <p className="card-info">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              {/* <button className='card-btn'>Click here</button> */}
              <button className="btn highlighted-btn">Get Resume</button>
            </div>
          </div>

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
              <button className="btn highlighted-btn">Get Resume</button>
            </div>
          </div>

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
              <button className="btn highlighted-btn">Get Resume</button>
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
            <button className="btn highlighted-btn">Get Resume</button>
          </div>
        </div>
      </div>
    </>
  );
}
