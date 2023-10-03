import React from "react";
// import { useHistory } from "react-router-dom";

export default function Login() {
	// const history = useHistory();

	return (
		<>
			<form action="http://localhost:8100/login/" method="post">
				<input type="text" name="uname" />
				<input type="password" name="upass" />
				<input type="submit" />
			</form>

			{/* <button onClick={history.push("/")}>New? Want to Register</button> */}
		</>
	);
}
