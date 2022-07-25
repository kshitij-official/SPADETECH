
import './home.css'
import Fantom from './vectors/image1752.png';
import Group from './vectors/Group8770.svg';
import Image from './vectors/Frame 212.svg'
import Image1 from './vectors/Frame 213.svg'
import Image2 from './vectors/Frame 211.svg'
import Image3 from './vectors/image 1737.png'
import Image4 from './vectors/image 1743.png'
import Image5 from './vectors/People-3.png'
import Footer1 from './vectors/Rectangle 185.png'
import Logo from './vectors/Spadetech White.png'
function home() {
  return (
      <div>
     
    <div className="home">
    <div style={{marginTop:10, display: 'flex',justifyContent: 'space-between'}}>
    <img style={{ height: '22px'}}src={Logo} alt=''/>
   
 <div className="nav-container">
  <div className="nav-data">Home</div>
  <div className="nav-data">Services</div>
  <div className="nav-data">Audit</div>
  <div className="nav-data">About</div>
 
  </div>
  <div>

      <button className="nav-btn">Contact</button>
  </div>
    </div> 
 
<div className="flex">
<div className="hero">
    <h1>Bringing <a className="color">Blockchain</a> to Life</h1>
<p className="description">Offering security, blockchain development and consulting services, Spadetech is the go-to blockchain development agency.</p>
<button className="button">GET STARTED</button>
</div>
<div className="container"><img src={Group}/></div>
</div>
    </div>
    <div className="data">
     <div><img src={Fantom} alt=''/></div>
     <div><img src={Fantom} alt=''/></div>
     <div><img src={Fantom} alt=''/></div>
     <div><img src={Fantom} alt=''/></div>
     <div><img src={Fantom} alt=''/></div>
     <div><img src={Fantom} alt=''/></div>
     <div><img src={Fantom} alt=''/></div>
     <div><img src={Fantom} alt=''/></div>
    </div>
    <div className="solution">
        <h1  className="solution_header"style={{color: '#08375B'}}>Our Solution for business</h1>
        <p className="solution_header">We make it easy for users to use our platform, that’s why we provide the benefit.</p>
   <div className="box1">
   <div>

       <img className="image" src={Image}alt=""/>
       <p className="solution_heading">Transperent</p>
       <p className="solution_description">We're an open book. We believe in total transparency and will always keep you in the loop.
            We'll be completely open about any findings, regardless of whether they're good or bad.</p>
            <a className="link"href="url">learn more</a>
   </div>
  <div>
        <img className="image"src={Image1}alt=""/>
  <p className="solution_heading">Honest</p>
  <p className="solution_description">
  We do things the right way. 
  We're honest, reliable and always deliver on our promises. If we say we're going to do something, we'll do it.
  </p>
  <a className="link"href="url">learn more</a>
  </div>
  <div>  <img className="image" src={Image2}alt=""/>
  <p className="solution_heading">Secure</p>
  <p className="solution_description">
  Our top priority is ensuring every project we audit is 100% secure for users.
   This means we'll never take shortcuts or overlook any potential vulnerabilities.
      </p>
      <a className="link"href="url">learn more</a>
  </div>  
  <div>  <img  className="image" src={Image}alt=""/>
  <p className="solution_heading">Efficient</p>
  <p className="solution_description">

We move quickly and efficiently, without compromising on quality. 
We understand that time is often of the essence for many blockchain projects,
 so we'll always work to deliver re....
</p>
<a className="link"href="url">learn more</a>
  </div>  
   </div>
   
    </div>
    <div className="solution2">
    <h1 className="solution_header" style={{color: '#08375B'}}>Our services</h1>
        <p className="solution_header">We make it easy for users to use our platform</p>
      
    <div className="box2">
    
   <div > <img  className="image" src={Image3}alt=""/>
   <p>Security Audit</p>
   <p className="solution2_description">

   Providing affordable, comprehensive smart contract audits that ensure the safety of your project.
</p>
<a className="link"href="url">learn more</a>
   </div>
  <div><img  className="image" src={Image4}alt=""/>
  <p>Blockchain Development</p>
  <p className="solution2_description">
  We work with you to understand your business needs and develop a bespoke solution that meets your requirements.
</p>
<a className="link"href="url">learn more</a>
  </div>
  <div><img  className="image" src={Image5}alt=""/>
  <p>Blockchain Consulting</p>
  <p className="solution2_description">

  Launch your project with confidence. We can come onboard at any stage during the project lifecycle and assist  with strategy, planning, and execution.
</p>
<a className="link"href="url">learn more</a>
  </div>  

   </div>
    </div>

    <div className="footer1">

    <div className="heading">
    Customer Stories
    </div>
        <div className="text">
 <h3 >"Spadetech provided invaluable support during the development of our project. 
     Their expertise and guidance were essential in helping us overcome some of the challenges we faced."</h3>
    </div>
    </div>
    <div className="footer2">
 <img src={Footer1} alt=""/>
 </div>
    </div>
  );
}

export default home;
