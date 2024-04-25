/* REACT DEPENDENCIES IMPORTS */
import React, { useContext } from "react";

/* STYLES SHEETS IMPORTS */
import "../ToggleSwitch/ToggleSwitch.css";

/* CONTEXT IMPORTS */
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );
  return (
    <>
      <input
        className="toggle-switch-checkbox"
        id={`toggle-switch-new`}
        type="checkbox"
        onChange={handleToggleSwitchChange}
      />
      <label className="toggle-switch-label" htmlFor={`toggle-switch-new`}>
        <span className={`toggle-switch-button`} />
        <p className={`${currentTemperatureUnit === "F" && "switch__active"}`}>
          F
        </p>
        <p className={`${currentTemperatureUnit === "C" && "switch__active"}`}>
          C
        </p>
      </label>
    </>
  );
}

export default ToggleSwitch;
