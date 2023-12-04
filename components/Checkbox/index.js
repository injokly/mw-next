import React, { useEffect, useState } from "react";

const Checkbox = ({ label, trigger, value, onChange, options }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      {options.map((option) => (
        <div>
          <input type="checkbox" label={option.label} value={option.value} onChange={(e) => onChange(e.target.value)} />
          <label key={option.value} for={option.value}>
            {option.label}
          </label>
        </div>
      ))}
      {trigger}
    </div>
  );
};

export default Checkbox;
