import React from "react";
import '../css/array.css';
import ArrayItem from '../components/arrayItem';

const Array = (props)=>{
    
    return (
        <div className="border border-white box">
                {props.array.length === 0 ? <div className="center-text m-auto display-2">Create an Array</div> : props.array.map((e,index)=>{
                    return <ArrayItem value={e} key={index+1} arrayLength={props.array.length}/>;
                })}
        </div>
    );
}

export default Array