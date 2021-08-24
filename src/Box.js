import React from 'react';

class Box extends React.Component {
    render() {
        if (this.props.cols === (this.props.col + 1) && this.props.rows === (this.props.row + 1))
            return <td><input autoComplete = "off" key = {this.props.row + ":" + this.props.col} id = {this.props.row + ":" + this.props.col} onKeyDown = {this.handleKeyDown}
            onChange = {this.handleAddBoth} value={this.props.num} /></td>



        if (this.props.cols === (this.props.col + 1))
            return <td><input autoComplete = "off" key = {this.props.row + ":" + this.props.col} id = {this.props.row + ":" + this.props.col} onKeyDown = {this.handleKeyDown}
            onChange = {this.handleAddCol} value={this.props.num} /></td>




        if (this.props.rows === (this.props.row + 1))
            return <td><input autoComplete = "off" key = {this.props.row + ":" + this.props.col} id = {this.props.row + ":" + this.props.col} onKeyDown = {this.handleKeyDown}
            onChange = {this.handleAddRow} value={this.props.num} /></td>




        else
            return <td><input autoComplete = "off" key = {this.props.row + ":" + this.props.col} id = {this.props.row + ":" + this.props.col} onKeyDown = {this.handleKeyDown}
            onChange = {this.handleChange} value={this.props.num} /></td>


    }

    handleChange = (e) => {
        this.props.updateEntry(this.props.row, this.props.col, e.target.value);
    }

    handleAddRow = (e) => {
        this.props.addRows(1);
        this.props.updateEntry(this.props.row, this.props.col, e.target.value);

    }

    handleAddCol = (e) => {
        this.props.addCols(1);
        this.props.updateEntry(this.props.row, this.props.col, e.target.value);

    }

    handleAddBoth = (e) => {
        this.props.addCols(1);
        this.props.addRows(1);
        this.props.updateEntry(this.props.row, this.props.col, e.target.value);

    }
    



    handleKeyDown = (e) => {


        if (e.keyCode === 8 && e.target.value === "") {
           this.props.tryToDelete(this.props.row, this.props.col); 
        }


        else if (e.keyCode === 37)  { //Left
            if (this.props.col !== 0) {
                document.getElementById((this.props.row) + ":" + (this.props.col - 1)).focus(); 
            } else if (this.props.row !== 0) {  //Wrap
                document.getElementById((this.props.row - 1) + ":" + (this.props.cols - 1)).focus();
            }
            

            
        } else if (e.keyCode === 39) { //Right
            if (this.props.col === this.props.cols - 2 && this.props.row !== 0 && this.props.row !== this.props.rows - 1) { //skip the the one if you aren't on the first row
                document.getElementById((this.props.row + 1) + ":0").focus();
            }
            else if (this.props.col !== this.props.cols - 1) { 
                document.getElementById((this.props.row) + ":" + (this.props.col + 1) ).focus();
            } else if (this.props.row !== this.props.rows - 1) { //Wrap
                document.getElementById((this.props.row + 1)+ ":0").focus();
            }




        } else if (e.keyCode === 40) { //Down
            /*
            if (this.props.row === this.props.rows - 2 && this.props.col !== 0 && this.props.col !== this.props.cols - 1) { //skip the last one if you aren't  on the first col
                document.getElementById("0:" + (this.props.col + 1)).focus();
            }

            else */
            if (this.props.row !== this.props.rows - 1) {
                document.getElementById((this.props.row + 1 )+  ":" + (this.props.col) ).focus();
            } else if (this.props.col !== this.props.cols - 1) { //Wrap
                document.getElementById("0:" + (this.props.col + 1)).focus();
            }
            




            
            
        } else if (e.keyCode === 38) {
            if (this.props.row !== 0) { //up
                document.getElementById(this.props.row - 1 + ":" + this.props.col).focus();
            } else if (this.props.col !== 0) { //Wrap
                document.getElementById(this.props.rows - 1 +  ":" + (this.props.col - 1)).focus();
            }
        }
        
    }

}
export default Box;