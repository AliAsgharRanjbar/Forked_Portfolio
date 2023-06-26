import { React, useState, useEffect } from "react";
import styled from "styled-components";


// Bar Styled Component
const Bar = styled.div`
  position: fixed;
  z-index: 1002;
  height: 0.5rem;
  border-radius: 0px 2px 0px 0px;
  background: linear-gradient(
    90deg,
    rgba(109, 227, 219, 1) 0%,
    rgba(132, 115, 177, 1) 100%,
    rgba(3, 9, 112, 1) 100%);
`;

export function ProgressBar() {
  //Width State
  const [width, setWidth] = useState(0);
//   const [back, setBack] = useState("");
  // scroll function
  const scrollHeight = () => {
    var el = document.documentElement,
      ScrollTop = el.scrollTop || document.body.scrollTop,
      ScrollHeight = el.scrollHeight || document.body.scrollHeight;
    var percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
    // store percentage in state
    setWidth(percent);
  };
  //useEffect to control the component lifecycle
    useEffect(() => {
    window.addEventListener("scroll", scrollHeight);

    // Code for Rainbow ProgressBar

    // if (width > 0 && width < 10) {
    //     setBack("")
    // }
    // else if (width > 10 && width < 20) {
    //     setBack("red")
    // }
    // else if (width > 20 && width < 30) {
    //     setBack("yellow")
    // }
    // else if (width > 30 && width < 40) {
    //     setBack("blue")
    // }
    // else if (width > 40 && width < 50) {
    //     setBack("lime")
    // }
    // else if (width > 50 && width < 60) {
    //     setBack("blue")
    // }
    // else if (width > 60 && width < 70) {
    //     setBack("yellow")
    // }
    // else if (width > 70 && width < 80) {
    //     setBack("red")
    // }
    // else if (width > 80 && width < 90) {
    //     setBack("")
    // }
    return () => window.removeEventListener("scroll", scrollHeight);
    });
  return <Bar style={{ width: width + "%"}}></Bar>;
}