import React, {useState} from 'react';
import styles from "./MatrixMath.module.css"

const MatrixMath = (props) => {     
    const[expression, setExpression] = useState("");


    const handleChange = (e) => {
        var updated = e.target.value
        if (/^[a-zA-Z0-9._*^+\-\s()]*$/.test(updated)) {
            setExpression(updated);
        }   
    }

    const calculate = (e) => {
        e.preventDefault();
        var postfix = infixToPostfix(expression);
        var matrix = evaluatePostfix(postfix);

        if (matrix !== null)
            props.setMatrix(matrix)
        

    }

    const infixToPostfix = (str) => {
        const output = [];
        const stack = [];
        
        var start = -1;
        var end = -1;
        var parsingLetter = false;
        var parsingNum = false;
        //ABC123

        for (let i = 0; i < str.length; i++) {
            var char = str.charAt(i);
        
            if (char === " ") {
                if (i === str.length - 1)
                    output.push(str.substring(start, end + 1))
                else
                    continue;
            } else if (/[0-9.]/.test(char))  {
                if (parsingLetter) {
                    output.push(str.substring(start, end + 1))
                    start = -1
                    parsingLetter = false;
                    stack.push("*")
                } 
                parsingNum = true;

                if (start === -1) {
                    start = i
                    end = i
                } else {
                    end++;
                }
                    
                if (i === str.length - 1) {
                    output.push(str.substring(start, end + 1))
                }
            } else {
                if (/[A-Za-z_]/.test(char)) {
                    if (parsingNum) {
                        output.push(str.substring(start, end + 1))
                        start = -1
                        parsingNum = false;
                        stack.push("*")
                    } 
                    parsingLetter = true;
                    
                    if (start === -1) {
                        start = i
                        end = i
                    }
                    else {
                        end++;
                    }
                        
                    if (i === str.length - 1) {
                        output.push(str.substring(start, end + 1))
                    }
                } else { 
                    if (start !== -1) {
                        output.push(str.substring(start, end + 1))
                        start = -1;
                        if (parsingLetter)
                            parsingLetter = false
                        if (parsingNum)
                            parsingNum = false
                    }
                
                    if (char === "(") {

                        stack.push(char)
                    }
                    else if (char === ")") {
                        while (stack[stack.length - 1] !== "(")
                            output.push(stack.pop())
                        stack.pop();
                    }
                    else if (stack.length === 0 || stack[stack.length - 1] === "(")
                        stack.push(char)
                    else if (orderOfOperations(char) > orderOfOperations(stack[stack.length - 1]))
                        stack.push(char)
                    else {
                        while (stack.length > 0 && orderOfOperations(char) <= orderOfOperations(stack[stack.length - 1]))
                            output.push(stack.pop())
                        stack.push(char)
                    }
                }
            }

                
        }

        while (stack.length > 0)
            output.push(stack.pop())

        return output

    }

    const orderOfOperations = (operator) => {
        if (operator === "+" || operator === "-")
            return 0
        if (operator === "*" || operator === "^")
            return 1
    }
    
    const matrixPower = (a, pow) => {
        if (typeof(pow) !== "number") {
            if (typeof(a) !== "object")
                return null; //num to matrix 2 ^ A is invalid
        } else if (typeof(a) === "number") {
            return Math.pow(a, pow); //num to num 2 ^ 2
        }
        
        //matrix to num A ^ 2
        
        //deep copy matrix
        var product = JSON.parse(JSON.stringify(a));
        
        for (let i = 1; i < pow; i++)
            product = matrixMultiplication(product, a);
        return product
    }

    const matrixMultiplication = (a, b) => {
        if (typeof(a) === "number" && typeof(b) === "number") {
            return a * b; //scalar multiplication
        }
        else if (typeof(a) === "object" && typeof(b) === "number") {
            var product = JSON.parse(JSON.stringify(a)); //deep copy matrix

            for (let i = 0; i < a.length - 1; i++)
                for (let j = 0; j < a[0].length - 1; j++)
                product[i][j] = b * a[i][j]; //matrix scalar multiplication

            return product
        } else if (typeof(a) === "number" && typeof(b) === "object") {
            product = JSON.parse(JSON.stringify(b)); //deep copy matrix
            for (let i = 0; i < b.length - 1; i++)
                for (let j = 0; j < b[0].length - 1; j++)
                product[i][j] = a * b[i][j]; //matrix scalar multiplication

            return product
        }

        //matrix multiplication
        if (a.length !== b[0].length)
            return null;

        product = [] //n^3 matrix multiplication
        for (let i = 0; i < a.length - 1; i++) {
            var row = []
            for (let j = 0; j < b[0].length - 1; j++)  {
                var sum = 0
                for (let k = 0; k < b.length - 1; k++) {
                    if (a[i][k] === "")
                        var aVal = parseInt(props.sparseVal)
                    else
                        aVal = parseInt(a[i][k])
                         
                         
                    if (b[k][j] === "")
                        var bVal = parseInt(props.sparseVal)
                    else
                        bVal = parseInt(b[k][j])

                    sum += aVal * bVal
                }
                row.push(sum)
            }
            row.push("")
            product.push(row)  
        }
    
        product.push(Array(b[0].length).fill(""))
        return product
    }        
    
    const matrixAddition = (a, b) => {
        if (a.length !== b.length || a[0].length !== b[0].length) { //check dimensions
            return null;
        }

        const matrixSum = []
        
        for (let i = 0; i < a.length - 1; i++) {
            const row = []
            for (let j = 0; j < b[0].length - 1; j++)  {
                //if either value is empty, use sparse value
                if (a[i][j] === "")
                    var aVal = parseInt(props.sparseVal)
                else
                    aVal = parseInt(a[i][j])
                        
                if (b[i][j] === "")
                    var bVal = parseInt(props.sparseVal)
                else
                    bVal = parseInt(b[i][j])

                row.push(aVal + bVal)
                
            }
            row.push("")
            matrixSum.push(row)
        }
        matrixSum.push(Array(a.length).fill(""))
        return matrixSum
    }  

    const matrixSubtraction = (a, b) => { //same as addition but with subtraction operator
        if (a.length !== b.length || a[0].length !== b[0].length)
            return null;

        const matrixDiff = []
        for (let i = 0; i < a.length - 1; i++) {
            const row = []
            for (let j = 0; j < b[0].length - 1; j++)  {
                if (a[i][j] === "")
                    var aVal = parseInt(props.sparseVal)
                else
                    aVal = parseInt(a[i][j])
                          
                if (b[i][j] === "")
                    var bVal = parseInt(props.sparseVal)
                else
                    bVal = parseInt(b[i][j])

            row.push(aVal - bVal)
            }

            row.push("")
            matrixDiff.push(row)
        }

        matrixDiff.push(Array(a.length).fill(""))
        return matrixDiff
    }  


    const evaluatePostfix = (postFix) => {
        const stack = []
        for (let i = 0; i < postFix.length; i++) {
            switch(postFix[i]) {
                case "*":
                    var b = stack.pop()
                    var a = stack.pop()
                    var result = matrixMultiplication(a, b)
                    if (result === null) {
                        alert("Error in input. Matrices have different rows and column dimensions")
                        return null
                    }

                    stack.push(result)
                    break;
                case "^":
                    b = stack.pop()
                    a = stack.pop()
                    result = matrixPower(a, b)
                    if (result === null) {
                        alert("Error in input. Matrices have different rows and column dimensions")
                        return null
                    }

                    stack.push(result)
                    break;
                case "+":
                    b = stack.pop()
                    a = stack.pop()
                    result = matrixAddition(b, a)
                    if (result === null) {
                        alert("Error in input. Matrices have different dimensions")
                        return null;
                    }

                    stack.push(result)
                    break;
                case "-":
                    b = stack.pop()
                    a = stack.pop()
                    result = matrixSubtraction(b, a)
                    if (result === null) {
                        alert("Error in input. Matrices have different dimensions")
                        return null;
                    }

                    stack.push(result)
                    break;
                default:
                    if (/^[0-9]*$/.test(postFix[i]))
                        stack.push(parseFloat(postFix[i]));
                    else if (postFix[i] in props.matrices) {
                        stack.push(props.matrices[postFix[i]]);
                        break;
                    } else {
                        alert(postFix[i] + " does not exist")
                        return null;;
                    }
            }
        }


        if (typeof(stack[0]) === "number")
            return null;    
            
        return stack[0]
    }



    return <div className = {"row " + styles.matrixMathContainer}>
        
        <form onSubmit = {calculate} className = "col-sm-3">
            <input type="text" className = {styles.mathInput} value = {expression} placeholder = {"(A + B) * C"} onChange = {handleChange}></input>
            <br/>
            <button className = {"btn btn-secondary " + styles.mathEvalButton} onClick={calculate}>Evaluate Expression</button>
        </form>

        <div className = "col-sm-9">
            <ul className = {styles.mathInfo}>
                <li>Enter a math expression. The resulting matrix will be added as a new matrix</li>
                <li>You can enter matrix names or numbers (for matrix scalar multiplication)</li>
                <li>Valid operators: * ^ + -</li>
                <li>You can use parentheses to specify order of operations.</li>
            </ul>
        </div>


    </div>
    


}







export default MatrixMath;
