import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
  {/* The header of the website contains an introduction of how the page can help
    a developer */}
  <header>
    <h1>Jeffrey</h1>
    <nav id="navs">
      <ul>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
      </ul>
    </nav>
  </header>
  {/* Profile pic */}
  <section className="text-center">
    <img className="w-25 p-3" src="Images/JeffProf.jpeg" id="prof_pic" alt="Profile Picture with my Face" />
  </section>
  {/* About Me section */}
  <div>
    <h2 id="about" className="form_deets">About Me</h2>
    <p>Hi there! My name is Jeffrey Zhang I am an aspiring full stack developer. My hobbies consist of gyming, 
      playing volleyball, gaming, and hanging with friends! I have a background in Cognitive Science and a few years
      of learning different coding languages like Java, Python, C++, HTML, CSS. I have a golden retriever named Max who is 8
      years old and is very adorable :).
    </p>
  </div>
  {/* Work section with pictures that are clickable/sites and descriptions will be updated with new projects*/}
  {/* <div class = "flex container">
  <h2 id = "work" class = "form_deets">Work</h2>
  <h3 id = "work">Mini project working with Flexboxes</h3>
  <a href="https://github.com/jeffz98/my-special-mini-project"><img src="Images/Proj1.png" id ="work1" alt="Picture of first project with flexbox"></a>
  <div id = "work_pics" class = "card">
      <h2>Movie Selector</h2>
      <a class = "card" href="https://github.com/fiaschettima/MovieSuggestion-Proj1"><img src="Images/condensedFullDemo.gif" alt="Project allowing users to watch Movie trailers by searching"></a>
      <h2>Hospital Appointment Manager</h2>
      <a class = "card" href="https://github.com/laurasierra17/appointment-manager"><img src="Images/App-Demo.gif" alt="Second project, HAM, allowing patients to make appointments with their Doctors online"></a>
      <h2>Cognitive Science Project</h2>
      <a class = "card" href="https://github.com/jeffz98/first-day-repo"><img src="Images/cogsci.png" alt="Picture of brain"></a>
      <p></p>
  </div>
    </div> */}
  <section className="section">
    <div className="container">
      <h3 className="title has-text-centered is-size-4">Projects</h3>
      <div className="columns mt-5 is-8 is-variable is-multiline">
        <div className="column is-4-tablet is-4-desktop">
          <div className="card">
            <div className="card-image has-text-centered px-6">
              <h2>Movie Selector</h2>
              <figure className="image is-4by3">
                <a className="card" href="https://github.com/fiaschettima/MovieSuggestion-Proj1"><img src="Images/condensedFullDemo.gif" alt="Project allowing users to watch Movie trailers by searching" /></a>
              </figure>
            </div>
          </div>
          <div className="card">
            <div className="card-image has-text-centered px-6">
              <h2>Hospital Appointment Manager</h2>
              <figure className="image is-4by3">
                <a className="card" href="https://github.com/laurasierra17/appointment-manager"><img src="Images/App-Demo.gif" alt="Second project, HAM, allowing patients to make appointments with their Doctors online" /></a>
              </figure>
            </div>
          </div>
          <div className="card">
            <div className="card-image has-text-centered px-6">
              <figure className="image is-4by3">
                <h2>Mini project working with Flexboxes</h2>
                <a href="https://github.com/jeffz98/my-special-mini-project"><img src="Images/Proj1.png" id="work1" alt="Picture of first project with flexbox" /></a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* contact me section */}
  <div>
    <h2 id="contact">Contact Me</h2>
    <p id="contact"><a href="https://github.com/jeffz98">Github</a>
      <a href="mailto:jeffz98@berkeley.edu">Email</a>
    </p>
  </div>
  {/* resume section, will be updated*/}
  <div>
    <h2 id="resume">Resume</h2>
    <p id="contact"><a href="https://templates.office.com/en-us/student-resume-modern-design-tm16402487">Resume </a></p>
  </div>
  {/* Footer indicates main tools used */}
  <footer>
    <h4>Made with HTML and CSS</h4>
  </footer>
</div>

  );
}

export default App;
