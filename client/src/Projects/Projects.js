import './Project.css';
import project from '../img/Project/forest.jpg'
import ScreenHeading from '../utilities/ScreenHeading/ScreenHeading';

export default function Project(){
    return(
    <>
    <ScreenHeading title={"Project"} subHeading={"My formal Bio Details"} />
    <div className='card'>
        <img className='card-img' src={project} alt="card"/>
        <div className='card-body'>
            <h1 className='card-title'>udeeka</h1>
            <p className='card-sub-title'>My another project</p>
            <p className='card-info'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            <button className='card-btn'>Click here</button>
        </div>
    </div>
    </>)
}


