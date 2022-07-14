import './App.css';
import boy from './images/boy.svg'
import logo from './images/g.svg'
import collab from './images/Collaboration.svg'
import recent from './images/recent.svg'
import work from './images/work.svg'
import girl from './images/girl.png'
import twitter from './images/Twitter.svg'

function App() {
  return (
    <div className="App">
      <nav className='navbar navbar-expand-lg d-flex'>
        <img src={logo} className='img-fluid' alt='grasp-logo' />

        <p>Features</p>

        <img src={twitter} className='img-fluid justify-content-end' alt='twitter-logo' />
      </nav>

      <section className='container'>
        <h1 className='main-text'>
          Science is fun when you learn with interactions
        </h1>
        <p className='subtext'>Grasp is an educational technology platform that teaches advance sciences using proven scientific techniques with the aid of interactivity.</p>
        <button className='btn btn-success d-flex m-auto mb-5'>Get early access</button>
      </section>

      <section className='container-fluid d-flex w-100 cont-wrapper h-20'>
        <div className='text'>
          <h1>Learn science with so much comfort.</h1>
          <p>Learn at your pace with comprehensive courses, immersive visuals and trained experts in their respective fields.</p>
         </div>
        
          <img src={girl} className='img-thumbnail mr-10 w-30 h-20' alt='girl holding a book' />
        
      </section>

      <section className='container d-flex '>
        <div className='text'>
          <h1>Top choice features for every learner.</h1>
          <p>Grasp is designed to give the users a joyful taste of learning comfortably and based on your taste.</p>
        </div>
        <div className=' w-50 h-50 float-right'>
          <img src={collab} className='img-thumbnail-item w-30 h-20' />
          <img src={work} className='img-thumbnail-item w-30 h-20'  />
          <img src={recent} className='img-thumbnail-item w-30 h-20' />
        </div>
      </section>

      <section className='container d-flex h-20'>
        <div className='text'>
          <h1>Join the A-train for early access</h1>
          <p>Join our extensive waitlist today and get notified when we launch..</p>
        </div>
        <div className='w-50 h-50 float-right'>
          <img src={boy} className='img-thumbnail-girl w-30 h-20' alt='girl holding a book' />
        </div>
      </section>
    </div>
  );
}

export default App;
