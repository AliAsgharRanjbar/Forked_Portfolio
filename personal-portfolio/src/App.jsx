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
import ProgressBar from './components/ProgressBar';

function App() {

  const [loading, setLoading] = useState(true)
  const spinner = document.getElementById("spinner")
  if (spinner){
    setTimeout(() => {
      spinner.style.display = "none";            // FOR OLD PACKMAN
      setLoading(false)
    })
  }
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //     const spinner = document.getElementById("spinner")
  //   }, 3000)
  // }, [])

  // display: "block", margin:"auto", marginTop: "20rem", width: "13%"
  return (
        //   loading
        //   ? 
        //   <div style={{display: "block", margin: "auto", marginTop: "20em", width: "11%"}}>
        //   <PacmanLoader
        //   color='#eb7734'
        //   >

        //   </PacmanLoader>
        //   </div> 
        //   : 
        //   (<div className="App">
        //   <NavBar />
        //   <Banner />
        //   <Skills />
        //   <Projects />
        //   <Contact />
        //   <Footer />
        // </div>
        //   )
        !loading && (
        
        <div className="App">
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
