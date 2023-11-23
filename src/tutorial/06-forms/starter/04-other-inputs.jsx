import { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];
const OtherInputs = () => {
  const [checked, setChecked] = useState(false);
  const [framework, setFramework] = useState("react");

  const checkHandle = (e) => setChecked(e.target.checked);
  const frameworkHandle = (e) =>
    setFramework(e.target.value);

  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        {/* name */}
        <div
          className="form-row"
          style={{ textAlign: "left" }}
        >
          <label htmlFor="shipping"> Free Shipping </label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={checked}
            onChange={checkHandle}
          />
        </div>
        <div
          className="form-row"
          style={{ textAlign: "left" }}
        >
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={frameworkHandle}
          >
            {frameworks.map((framework) => (
              <option key={framework} id={framework}>
                {framework}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
