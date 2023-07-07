import React from "react";
import { aboutContainer } from "./About.module.css";

export default function About(props) {
  return (
    <div className={aboutContainer}>
      <h1>Un camino hacia el BOOOM!</h1>
      <p>
        Buenas a todos, mi nombre es Matias y estoy comenzando mi apredizaje en
        el desarrollo de aplicaciones Web con SOYHENRY<br></br>
      </p>
    </div>
  );
}
