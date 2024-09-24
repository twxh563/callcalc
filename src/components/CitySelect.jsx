import Select from '@mui/material/Select';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';


export default function CitySelect() {

  const [type, setType] = useState(0);

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const routes = [
    {
      name: "Город",
      value: 0
    }, {
      name: "Тамбов",
      value: 60
    }, {
      name: "Котовск",
      value: 80
    },
  ]
  
  return (
    <Select
    value={type}
    label="Место"
    onChange={handleChangeType}
  >
    {routes.map((option) => (
      <MenuItem value={option.value}>
        {option.name}
      </MenuItem>
    ))}
  </Select>
  );
}

