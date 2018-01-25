import React from 'react';
import { FormGroup, ControlLabel, FormControl, Label} from 'react-bootstrap';


export default class IngredientCountColumn extends React.Component {
    render() {
        return (
            <td className={"IngredientCountColumn"}>
                <FormGroup controlId={"formControlInput"}>
                    <input type={"text"} className={"form-control"} id={"count" + this.props.rowId}></input>
                </FormGroup>
            </td>
        )
    }
}