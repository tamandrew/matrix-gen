(this.webpackJsonpmatrix=this.webpackJsonpmatrix||[]).push([[0],{13:function(t,e,r){"use strict";r.r(e);var o=r(1),s=r.n(o),a=r(7),p=r.n(a),n=r(2),i=r(3),l=r(5),c=r(4),d=r(0),h=function(t){Object(l.a)(r,t);var e=Object(c.a)(r);function r(){var t;Object(n.a)(this,r);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).handleChange=function(e){t.props.mirror&&t.props.updateEntry(t.props.col,t.props.row,e.target.value),t.props.updateEntry(t.props.row,t.props.col,e.target.value)},t.handleAddRow=function(e){t.props.addRows(1),t.props.mirror&&(t.props.addCols(1),t.props.updateEntry(t.props.col,t.props.row,e.target.value)),t.props.updateEntry(t.props.row,t.props.col,e.target.value)},t.handleAddCol=function(e){t.props.addCols(1),t.props.mirror&&(t.props.addRows(1),t.props.updateEntry(t.props.col,t.props.row,e.target.value)),t.props.updateEntry(t.props.row,t.props.col,e.target.value)},t.handleAddBoth=function(e){t.props.addCols(1),t.props.addRows(1),t.props.updateEntry(t.props.row,t.props.col,e.target.value)},t.handleKeyDown=function(e){16===e.keyCode&&(t.props.rows===t.props.row+1&&t.props.addRows(1),t.props.cols===t.props.col+1&&t.props.addCols(1)),8===e.keyCode&&""===e.target.value?t.props.tryToDelete(t.props.row,t.props.col):0===e.target.selectionStart&&37===e.keyCode?0!==t.props.col?(document.getElementById(t.props.row+":"+(t.props.col-1)).focus(),document.getElementById(t.props.row+":"+(t.props.col-1)).selectionStart=0):0!==t.props.row&&document.getElementById(t.props.row-1+":"+(t.props.cols-1)).focus():e.target.selectionStart===e.target.value.length&&39===e.keyCode?t.props.col!==t.props.cols-1?(document.getElementById(t.props.row+":"+(t.props.col+1)).focus(),document.getElementById(t.props.row+":"+(t.props.col+1)).selectionStart=-1):t.props.row!==t.props.rows-1&&document.getElementById(t.props.row+1+":0").focus():40===e.keyCode?t.props.row!==t.props.rows-1?document.getElementById(t.props.row+1+":"+t.props.col).focus():t.props.col!==t.props.cols-1&&document.getElementById("0:"+(t.props.col+1)).focus():38===e.keyCode&&(0!==t.props.row?document.getElementById(t.props.row-1+":"+t.props.col).focus():0!==t.props.col&&document.getElementById(t.props.rows-1+":"+(t.props.col-1)).focus())},t}return Object(i.a)(r,[{key:"render",value:function(){return this.props.cols===this.props.col+1&&this.props.rows===this.props.row+1?Object(d.jsx)("td",{children:Object(d.jsx)("input",{tabIndex:-1,autoComplete:"off",id:this.props.row+":"+this.props.col,onKeyDown:this.handleKeyDown,onChange:this.handleAddBoth,value:this.props.num},this.props.row+":"+this.props.col)}):this.props.cols===this.props.col+1?Object(d.jsx)("td",{children:Object(d.jsx)("input",{tabIndex:0===this.props.row?"":-1,autoComplete:"off",id:this.props.row+":"+this.props.col,onKeyDown:this.handleKeyDown,onChange:this.handleAddCol,value:this.props.num},this.props.row+":"+this.props.col)}):this.props.rows===this.props.row+1?Object(d.jsx)("td",{children:Object(d.jsx)("input",{autoComplete:"off",id:this.props.row+":"+this.props.col,onKeyDown:this.handleKeyDown,onChange:this.handleAddRow,value:this.props.num},this.props.row+":"+this.props.col)}):Object(d.jsx)("td",{children:Object(d.jsx)("input",{autoComplete:"off",id:this.props.row+":"+this.props.col,onKeyDown:this.handleKeyDown,onChange:this.handleChange,value:this.props.num},this.props.row+":"+this.props.col)})}}]),r}(s.a.Component),u=function(t){Object(l.a)(r,t);var e=Object(c.a)(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var t=this;return Object(d.jsx)("tr",{children:this.props.boxes.map((function(e,r){return Object(d.jsx)(h,{addRows:t.props.addRows,addCols:t.props.addCols,tryToDelete:t.props.tryToDelete,rows:t.props.rows,cols:t.props.cols,updateEntry:t.props.updateEntry,num:e,row:t.props.row,col:r,mirror:t.props.mirror},t.props.row+":"+r)}))})}}]),r}(s.a.Component),m=function(t){Object(l.a)(r,t);var e=Object(c.a)(r);function r(){var t;Object(n.a)(this,r);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).handleChange=function(e){t.props.updateParameter(t.props.id,e.target.value)},t}return Object(i.a)(r,[{key:"render",value:function(){return Object(d.jsx)("input",{type:"text",style:{width:this.props.width},defaultValue:this.props.defaultVal,onChange:this.handleChange})}}]),r}(s.a.Component),x=function(t){Object(l.a)(r,t);var e=Object(c.a)(r);function r(){var t;Object(n.a)(this,r);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).handleChange=function(e){t.props.updateParameter(t.props.id,e.target.checked)},t}return Object(i.a)(r,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"form-check form-switch",children:[Object(d.jsxs)("label",{className:"form-check-label",htmlFor:this.props.htmlId,children:[" ",this.props.text," "]}),Object(d.jsx)("input",{className:"form-check-input",onChange:this.handleChange,type:"checkbox",defaultChecked:this.props.defaultVal,id:this.props.id})]})}}]),r}(s.a.Component),j=function(t){Object(l.a)(r,t);var e=Object(c.a)(r);function r(t){var o;return Object(n.a)(this,r),(o=e.call(this,t)).handleFocus=function(t){t.target.select()},o.updateExportParameter=function(t,e){switch(t){case"environment":o.setState({environment:e});break;case"start":o.setState({start:e});break;case"end":o.setState({end:e});break;case"delim":o.setState({delim:e});break;case"latex":o.setState({latex:e})}},o.state={start:"{",end:"}",delim:",",latex:!1,environment:"bmatrix"},o}return Object(i.a)(r,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"row export",children:[Object(d.jsx)("textarea",{readOnly:!0,onClick:this.handleFocus,className:"output",value:this.matrixToString(this.props.matrix)}),Object(d.jsx)("div",{className:"col-sm-2",children:Object(d.jsx)(x,{defaultVal:!1,id:"latex",text:"LaTeX Format",updateParameter:this.updateExportParameter})}),Object(d.jsx)("div",{className:"col-sm-10",children:this.state.latex?Object(d.jsxs)("p",{children:["Environment \xa0",Object(d.jsx)(m,{width:"100px",defaultVal:"bmatrix",id:"environment",updateParameter:this.updateExportParameter})]}):Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:["Open arrays with \xa0",Object(d.jsx)(m,{width:"20px",defaultVal:"{",id:"start",updateParameter:this.updateExportParameter})]}),Object(d.jsxs)("p",{children:["End arrays with \xa0",Object(d.jsx)(m,{width:"20px",defaultVal:"}",id:"end",updateParameter:this.updateExportParameter})]}),Object(d.jsxs)("p",{children:["Separate elements with \xa0",Object(d.jsx)(m,{width:"20px",defaultVal:",",id:"delim",updateParameter:this.updateExportParameter})]})]})})]})}},{key:"matrixToString",value:function(){if(this.state.latex){for(var t="\\begin{"+this.state.environment+"}\n",e=0;e<this.props.matrix.length-1;e++)for(var r=0;r<this.props.matrix[0].length-1;r++)""===this.props.matrix[e][r]?t+=this.props.sparseVal:t+=this.props.matrix[e][r],r!==this.props.matrix[0].length-2?t+=" & ":e!==this.props.matrix.length-2&&(t+=" \\\\ \n");return t+"\n\\end{"+this.state.environment+"}"}var o=this.state.start,s=this.state.end,a=this.state.delim;for(t=o.toString(),e=0;e<this.props.matrix.length-1;e++){for(t+=o,r=0;r<this.props.matrix[0].length-1;r++)""!==this.props.matrix[e][r]?t+=this.props.matrix[e][r]:t+=this.props.sparseVal,r!==this.props.matrix[0].length-2&&(t+=a);t+=s,e!==this.props.matrix.length-2&&(t+=a)}return t+s}}]),r}(s.a.Component),w=function(t){Object(l.a)(r,t);var e=Object(c.a)(r);function r(t){var o;return Object(n.a)(this,r),(o=e.call(this,t)).handleClick=function(t){o.state.showExport?o.setState({showExport:!1}):o.setState({showExport:!0})},o.tryToDelete=function(t,e){if(t===o.props.matrix.length-1||e===o.props.matrix[0].length-1)return null;for(var r=o.props.matrix,s=!0,a=0;a<o.props.matrix[0].length;a++)if(""!==o.props.matrix[t][a]){s=!1;break}for(s&&r.splice(t,1),s=!0,a=0;a<o.props.matrix.length;a++)if(""!==o.props.matrix[a][e]){s=!1;break}if(s)for(a=0;a<r.length;a++)r[a].splice(e,1);o.props.updateMatrix(r)},o.updateEntry=function(t,e,r){var s=o.props.matrix;s[t][e]=r,o.props.updateMatrix(s)},o.addCols=function(t){for(var e=o.props.matrix,r=0;r<e.length;r++)for(var s=0;s<t;s++)e[r].push("");return o.props.updateMatrix(e),e},o.addRows=function(t){for(var e=o.props.matrix,r=0;r<t;r++)e.push(new Array(e[0].length).fill(""));return o.props.updateMatrix(e),e},o.updateParameter=function(t,e){switch(t){case"sparse":o.setState({sparseVal:e});break;case"mirror":o.setState({mirror:e}),e&&o.mirrorEntires()}},o.mirrorEntires=function(){if(o.props.matrix.length>o.props.matrix[0].length)for(var t=o.addCols(o.props.matrix.length-o.props.matrix[0].length),e=0;e<t.length;e++)for(var r=e;r<t.length;r++)t[e][r]=t[r][e];else for(t=o.addRows(o.props.matrix[0].length-o.props.matrix.length),e=0;e<t.length;e++)for(r=e;r<t.length;r++)t[r][e]=t[e][r];o.props.updateMatrix(t)},o.state={mirror:!1,showExport:!1,sparseVal:"0"},o}return Object(i.a)(r,[{key:"render",value:function(){var t=this,e=this.props.matrix.map((function(e,r){return Object(d.jsx)(u,{rows:t.props.matrix.length,cols:t.props.matrix[0].length,tryToDelete:t.tryToDelete,addRows:t.addRows,addCols:t.addCols,updateEntry:t.updateEntry,boxes:e,row:r,mirror:t.state.mirror},"row"+r)}));return Object(d.jsxs)("div",{className:"matrixEditor",children:[Object(d.jsx)("h1",{children:"Enter your matrix below. The pink row and column will be ignored from the output matrix, and typing in one of them will create a new row or column."}),Object(d.jsx)("table",{className:"table table-bordered table-hover",children:Object(d.jsxs)("tbody",{children:[" ",e," "]})}),Object(d.jsxs)("p",{children:["Interpret empty elements (excluding pink row and pink column) as \xa0",Object(d.jsx)(m,{width:"30px",defaultVal:"0",id:"sparse",updateParameter:this.updateParameter})]}),Object(d.jsx)(x,{defaultVal:!1,id:"mirror",text:"Mirror along Diagonal",updateParameter:this.updateParameter}),Object(d.jsx)("button",{className:"btn btn-secondary",onClick:this.handleClick,children:this.state.showExport?"Close":"Export Matrix"}),this.state.showExport?Object(d.jsx)(j,{matrix:this.props.matrix,sparseVal:this.state.sparseVal}):null]})}}]),r}(s.a.Component),b=function(t){Object(l.a)(r,t);var e=Object(c.a)(r);function r(t){var o;return Object(n.a)(this,r),(o=e.call(this,t)).updateMatrix=function(t){o.setState({matrix:t})},o.state={matrix:[["",""],["",""]]},o}return Object(i.a)(r,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)(w,{matrix:this.state.matrix,updateMatrix:this.updateMatrix})})}}]),r}(s.a.Component);p.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.fa788618.chunk.js.map