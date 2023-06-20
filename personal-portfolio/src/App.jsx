import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useState, useEffect } from 'react';
import { Loader, Center } from '@mantine/core';


function App() {

  const [loading, setLoading] = useState(true)
  const spinner = document.getElementById("spinner")
  if (spinner){
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false)
    })
  }
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //     const spinner = document.getElementById("spinner")
  //   }, 6000)
  // }, [])

  return (

          !loading && (<div className="App">
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
