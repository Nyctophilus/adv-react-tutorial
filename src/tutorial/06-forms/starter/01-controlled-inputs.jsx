import { useState } from "react";

const ControlledInputs = () => {
  const [form, setForm] = useState({ name: "", email: "" });

  const nameHandle = (e) =>
    setForm({ ...form, name: e.target.value });
  const emailHandle = (e) =>
    setForm({ ...form, email: e.target.value });
  const submitHandle = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form
      action="post"
      className="form"
      onClick={submitHandle}
    >
      <h4>controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          id="name"
          value={form.name}
          onChange={nameHandle}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          className="form-input"
          id="email"
          value={form.email}
          onChange={emailHandle}
        />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};
export default ControlledInputs;
