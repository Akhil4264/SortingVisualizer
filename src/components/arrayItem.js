import React from "react";


const ArrayItem = (props) => {
    const binStyle = {
        margin : "0px 5px",
        height : `${(((props.value - 1)/(props.arrayLength-1))*(96)) + 1}%`,
        width : `${100 / props.arrayLength}px`,
        backgroundColor : "red",
        color : "white"
    }
    return (
        <div className="barValue" style={binStyle}>
            {/* {props.value} */}
        </div>
    );
};

export default ArrayItem;
