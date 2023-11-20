import React from 'react';

const ListItem = ({ name, age, isSelected, onCheckboxChange, onSelectChange }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={onCheckboxChange}
      />
      <strong>Name:</strong> {name}, <strong>Age:</strong> {age}
      <select value={age} onChange={onSelectChange}>
        <option value={20}>20</option>
        <option value={25}>25</option>
        <option value={30}>30</option>
      </select>
    </div>
  );
};

export default ListItem;