import React, { useState } from "react";
import PropTypes from "prop-types";
import { FieldContainer, Label } from "./_fieldStyles";
import {FormLabel, FormControl, FormGroup, FormControlLabel, Checkbox} from "@material-ui/core" 

function CheckboxField(props) {
  const [checkedItems, setCheckedItems] = useState(new Map());

  const handleCheckItem = (e) => {
    const { name, value } = e.target;
    let items = new Map(checkedItems);
    if (checkedItems.has(name)) {
      items.delete(name);
    } else {
      items.set(name, value);
    }
    setCheckedItems(items);
    props.setFieldValue(props.name, Array.from(items.values()));
  };

  return (
    <FieldContainer>
      <FormControl component="fieldset" variant="standard">
        <div className="label">{props.label}</div>
        {props.options?props.options.map((opt, index) => {
          return (
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={checkedItems.get(props.name + "-" + index)} 
                  onBlur={props.handleBlur}
                  value={opt}
                  key={index}
                  name={index}
                  onChange={handleCheckItem} />
                }
                label={opt}
              />
            </FormGroup>
          );
        }):""}
        {props.error && props.touched[props.name] && (
          <div className="error">{props.error}</div>
        )}
      </FormControl>
    </FieldContainer>

  );

}

CheckboxField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array,
  error: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default CheckboxField;
