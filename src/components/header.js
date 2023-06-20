import React , { useState } from "react";



const Header = (props) => {
    const [arrLen,SetarrLen] = useState(1);
	const submit = (e) =>{
		e.preventDefault()
		props.createArray(arrLen)		
	}
	return (
		
			<form className="form-group" onSubmit={submit}>
				<div className="container p-2 mx-3">
					<label htmlFor="arraySize" className="p-1">Size of array </label>
					<input type="number" className="form-control" value={arrLen} onChange={(e)=>{SetarrLen(e.target.value)}} id="arraySize" min = {1} max={150} required maxrequired="true"/>
				</div>
				<div className="container m-2">
					<input type="submit" className="btn btn-success m-2" value="Create Array"/>
				</div>
			</form>
		
	);
};

export default Header;
