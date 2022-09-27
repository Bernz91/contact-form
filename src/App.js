import "./App.css";
import React from "react";
import ContactForm from "./Component/ContactForm";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2

function App() {
  return (
    <div className="vertical-center">
      <Grid2 container spacing={2} className="header">
        <Grid2 xs={12}>
          <div className="title">Contact me</div>
          <div className="subtitle">
            We are always happy to find out what's on your mind
          </div>
        </Grid2>
      </Grid2>

      <ContactForm />
    </div>
  );
}

export default App;
