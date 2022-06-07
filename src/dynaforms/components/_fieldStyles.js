import styled from "styled-components";
import {OutlinedInput as MaterialInput, Select as MaterialSelect, TextareaAutosize as MaterialTextArea} from "@material-ui/core"
import {Autocomplete as MaterialAutocomplete} from '@material-ui/lab';

export const FieldContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  .label {
    font-weight: bold;
  }
  .error {
    color: #ff0000;
  }
`;

export const Autocomplete = styled(MaterialAutocomplete)`
  width: 100%;
  margin: 5px 5px 4px 0;
  box-sizing: border-box;
`;

export const Input = styled(({...otherProps }) => <MaterialInput {...otherProps} />)`
  width: 100%;
  margin: 5px 5px 4px 0;
  box-sizing: border-box;
`;

export const Select = styled(MaterialSelect)`
  width: 100%;
  min-width: 190px;
  margin: 5px 5px 4px 0;
  box-sizing: border-box;

`;

export const TextArea = styled(MaterialTextArea)`
  width: 100%;
  height: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
`;

export const Upload = styled.input`
  width: 100%;
  min-width: 180px;
  box-sizing: border-box;
  height: 30px;
`;

export const Label = styled.label`
  margin-right: 20px;
`;
