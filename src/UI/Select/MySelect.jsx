import React from 'react';

const MySelect = ({defaultValue, values, onChange, value}) => {
  return (
      <select value={value} onChange={(e)=>onChange(e.target.value)}>
        <option disabled value="">{defaultValue}</option>
        {values.map(value=><option key={value} value={value}>{value}</option> )}
      </select>
  );
};

export default MySelect;