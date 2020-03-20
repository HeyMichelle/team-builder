import React, { useState, useReducer } from "react";

const Form = props => {
  const [form, setForm] = useState({ name: "", email: "", role: "" });
  //   console.log("form", form); This still didn't do anything

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //   const submitForm = e => {
  //     e.preventDefault();
  //     props.addTeamMate(name);
  //     setForm("");
  //   };

  const submitForm = e => {
    e.preventDefault(); //what is the purpose of this here
    props.addTeamMate({ ...form, id: Date.now() });
    setForm({ name: "", email: "", role: "" });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label>
          Name: 
          <input
            type="text"
            placeholder="add team-mate"
            name="name"
            value={form.name}
            onChange={e => changeHandler(e)}
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="text"
            placeholder="add email"
            name="email"
            value={form.email}
            onChange={e => changeHandler(e)}
          />
        </label>
        <br />

        <label>
          Role:
          <input
            type="text"
            placeholder="add role"
            name="role"
            value={form.role}
            onChange={e => changeHandler(e)}
          />
        </label>
        <br />

        <button type="submit">add mate</button>
      </form>
    </div>
  );
};

export default Form;
