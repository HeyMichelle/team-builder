import React, { useState } from "react";
// if we need to import routes: import { Route } from 'react-router-dom';
import Form from "./Components/Form";
import TeamList from "./Components/TeamList";
import "./App.css";

function App() {
  const [teamMates, setTeamMates] = useState([
    {
      id: Date.now(),
      name: "Michelle",
      email: "hey@hey.com",
      role: "Front-end Engineer"
    }
  ]);

  function addTeamMate(newTeamMate) {
    setTeamMates([...teamMates, newTeamMate]);
  }

  return (
    <div className="App">
      <Form addTeamMate={addTeamMate} />
      <TeamList teamMates={teamMates} />

      {/* do we need to add routes? <Route exact path='/' render{() => <Form addTeamMate={addTeamMate} /> } */}
    </div>
  );
}

export default App;
