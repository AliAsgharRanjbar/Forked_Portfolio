import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useState } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { ToTop } from './components/ToTop';

function App() {
  
  // FOR ORIGINAL PACKMAN

  // Also can use a const loading = false
  const [loading, setLoading] = useState(true)
  const spinner = document.getElementById("spinner")
  if (spinner){
    setTimeout(() => {
      spinner.style.display = "none";            
      setLoading(false)
    })
  }

  return (
        !loading && (
        <div className="App">
        <ToTop />
        <ProgressBar />
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
        )
  );
}

export default App;