import React, { useEffect, useState } from "react";
import Dropdown from "@headlessui/react";

const Select = ({ label, trigger, value, onChange, options }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select label={label} value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {trigger}      
    </div>
  );
};

export default Select;
