import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function RowRadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Any" control={<Radio />} label="Any" />
        <FormControlLabel value="Movies" control={<Radio />} label="Movies" />
        <FormControlLabel value="Series" control={<Radio />} label="Series" />
        <FormControlLabel value="Episode" control={<Radio />} label="Episode"/>
      </RadioGroup>
    </FormControl>
  );
}

export default RowRadioButtonsGroup;
