import React, { useState } from "react";

export default function Register() {
	const [name, setName]=useState();

	const effectName=(e)=>{
		setName(e.target.value);
		console.log(e.target.value);
	}

	return (
		<>
			<form action="http://localhost:8100/register/" method="post">
				<input type="text" name="uname" value={name} onChange={effectName}/>
				<input type="text" name="uemail"/>
				<input type="password" name="upass" />
				<input type="submit"/>
			</form>
		</>
	);
}
