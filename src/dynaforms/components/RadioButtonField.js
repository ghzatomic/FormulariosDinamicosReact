import * as React from 'react';
import PropTypes from "prop-types";
import { FieldContainer } from "./_fieldStyles";
import { RadioGroup, FormControlLabel, FormControl, FormLabel, Radio } from '@material-ui/core';

function RadioButtonField(props) {
  const [value, setValue] = React.useState(props.value);

  const handleChange = (event) => {
    setValue((event.target).value);
    props.setFieldValue(props.name, (event.target).value);
  };
  return (
    <FieldContainer>
      <FormControl component="fieldset" variant="standard">
        <div className="label">{props.label}</div>
        <RadioGroup
          value={value}
          onChange={handleChange}
        >
          {props.options ? props.options.map((opt, index) => {
            return (
              <FormControlLabel key={index}
                name={opt+'-'+index} 
                value={opt} 
                control={<Radio  />} 
                label={opt} />
            );
          }) : ""}
        </RadioGroup>
        {props.error && props.touched[props.name] && (
          <div className="error">{props.error}</div>
        )}
      </FormControl>
    </FieldContainer>
  );
}

RadioButtonField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  options: PropTypes.array,
  error: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default RadioButtonField;


/**
 * 
 * 
 <FieldContainer>
      <div className="label">{props.label}</div>
      {props.options.map((opt, index) => {
        return (
          <Label key={index}>
            <input
              type="radio"
              name={props.name}
              value={opt}
              checked={opt === props.value}
              onBlur={props.handleBlur}
              onChange={props.onChange}
            />
            {opt}
          </Label>
        );
      })}
      {props.error && props.touched[props.name] && (
        <div className="error">{props.error}</div>
      )}
    </FieldContainer>
 * 
 */