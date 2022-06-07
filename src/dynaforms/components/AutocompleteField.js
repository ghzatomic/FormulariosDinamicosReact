import * as React from 'react';
import PropTypes from "prop-types";
import { FieldContainer, Autocomplete } from "./_fieldStyles";
import { TextField } from '@material-ui/core';

function AutocompleteField(props) {
    return (
        <FieldContainer>
            <div className="label">{props.label}</div>
            <Autocomplete
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onBlur={props.handleBlur}
                onChange={props.onChange}

                inputValue={props.inputValue}
                onInputChange={props.onInputChange}
                options={props.options?props.options:[]}
                renderInput={(params) => <TextField {...params} label={props.value} variant='outlined' />}
            />
        </FieldContainer>
    );
}

AutocompleteField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    error: PropTypes.any,
    inputValue: PropTypes.any,
    onInputChange: PropTypes.any,
    options: PropTypes.any,
    onChange: PropTypes.func.isRequired,
};

export default AutocompleteField