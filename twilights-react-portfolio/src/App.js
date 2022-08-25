import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Project from './components/Project.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div>
      <Header/>
  {/* The header of the website contains an introduction of how the page can help
    a developer */}

  {/* Profile pic */}
  <section className="text-center">
    <img className="w-25 p-3" src="https://jeffz98.github.io/Twilights_Portfolio/Images/JeffProf.jpeg" id="prof_pic" alt="Profile Picture with my Face" />
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
  <Project/>
  {/* contact me section */}
  <Footer/>
</div>

  );
}

export default App;
