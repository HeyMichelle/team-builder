import React, { useState } from "react";

const Form = props => {
  const [form, setForm] = useState("");
  console.log("form", form);

  const changeHandler = e => {
    setForm(e.target.value);
  };

//   const submitForm = e => {
//     e.preventDefault();
//     props.addTeamMate(name);
//     setForm("");
//   };

    const submitForm = e => {
        e.preventDefault();
        props.addTeamMate({...});
        setForm("");
    };


  return (
    <div>
      <form onSubmit={submitForm}
        <label htmlFor="teamMate">Team-mate</label>

        <input
          type="text"
          placeholder="add team-mate"
          id="teamMate"
          value={name}
          name="teamMate"
          onChange={changeHandler}
        />

        <button type="submit">add mate</button>
      </form>
    </div>
  );
};

export default Form;
