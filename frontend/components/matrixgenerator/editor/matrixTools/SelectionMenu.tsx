import React, { useState, useRef } from "react";

import styles from "./SelectionMenu.module.css"

import { generateUniqueName, spliceMatrix, pasteMatrix } from "../../../matrixFunctions";

import TextActionButton from '../../../buttons/TextActionButton'
import Toggle from '../../../buttons/Toggle';
import useExpand from '../../../../hooks/useExpand';
import { Matrices, MatricesAction } from "../../../App";
import { BoxSelection, BoxSelectionAction } from "../MatrixEditor";

interface SelectionMenuProps {
    matrices: Matrices
    name: string
    matrix: string[][]
    matrixDispatch: React.Dispatch<MatricesAction>
    boxSelection: BoxSelection
    boxSelectionDispatch: React.Dispatch<BoxSelectionAction>
    close: () => void
    showFullInput: boolean
    addAlert: (str: string, time: number, type?: string) => void
}

const SelectionMenu = (props: SelectionMenuProps) => {
    const [spliceName, setSpliceName] = useState("");
    const [pasteName, setPasteName] = useState("");

    const selectionMenu = useExpand() as React.MutableRefObject<HTMLDivElement>;

    const updateName = (parameterName: string, updated: string) => {
        if (/^[A-Za-z_]*$/.test(updated)) // only update if chars are letters or underscores
            switch (parameterName) {
                case "Save Selection as New Matrix: ":
                    setSpliceName(updated);
                    break;
                case "Paste Another Matrix Into Selection: ":
                    setPasteName(updated);
                    break;
                default: break;
            }
    }


    var generatedName = generateUniqueName(props.matrices);
    
    return <div className={styles.selectionSettingsContainer + " fixed-bottom"} style = {{"bottom": props.showFullInput ? "28px" : "0"}} ref = {selectionMenu}>
        {props.boxSelection === null ? <div>No boxes selected: drag your mouse to select a submatrix.</div>
            : <div>
                <div>
                    {"Selection Size: " +
                        (Math.abs(props.boxSelection.start.x - props.boxSelection.end.x) + 1)
                        + " x " +
                        (Math.abs(props.boxSelection.start.y - props.boxSelection.end.y) + 1)}
                </div>

                <div>{"Start: Row " + (props.boxSelection.start.x + " Column " + props.boxSelection.start.y)}</div>

                <div>{"End: Row " + (props.boxSelection.end.x + " Column " + props.boxSelection.end.y)}</div>

               

                <TextActionButton
                    name={"Save Selection as New Matrix: "}
                    action={() => {
                        if (!props.boxSelection) return;
                        const spliced = spliceMatrix(props.matrix,
                            props.boxSelection.start.x,
                            props.boxSelection.start.y,
                            props.boxSelection.end.x,
                            props.boxSelection.end.y)

                        props.matrixDispatch({ "type": "UPDATE_MATRIX", payload: {"name": spliceName ? spliceName : generatedName, "matrix": spliced, "switch": false }});
                    }}

                    updateParameter={updateName}
                    width={"75px"}
                    value={spliceName}
                    placeholder={generatedName}
                />

                <TextActionButton
                    name={"Paste Another Matrix Into Selection: "}
                    action={() => {
                        if (pasteName === "") {
                            props.addAlert("Please enter a matrix name to paste.", 5000, "error");
                            return;
                        } else if (!(pasteName in props.matrices)) {
                            props.addAlert(`Matrix ${pasteName} not found`, 5000, "error");
                            return;
                        }

                        if (!props.boxSelection) 
                            return;
                        const pasted = pasteMatrix(
                            props.matrices[props.name], //matrix to paste on
                            props.matrices[pasteName],  //matrix to copy from
                            props.boxSelection.start.x,
                            props.boxSelection.start.y,
                            props.boxSelection.end.x,
                            props.boxSelection.end.y)

                        if (pasted)
                            props.matrixDispatch({ "type": "UPDATE_MATRIX", payload: {"name": props.name, "matrix": pasted, "switch": false }});
                        else
                            props.addAlert("Error: Selection dimensions and pasted matrix dimensions must match.", 5000, "error");

                    }}

                    updateParameter={updateName}
                    width={"75px"}
                    value={pasteName}
                /> <br />

            </div>}

        <Toggle toggle={props.close} show={false} />

    </div>

}

export default SelectionMenu;