import JWT from "jsrsasign";

function App() {
	const encode = () => {
		// Header
		const oHeader = { alg: "HS256", typ: "JWT" };
		// Payload
		const tNow = JWT.KJUR.jws.IntDate.get("now");
		const tEnd = JWT.KJUR.jws.IntDate.get("now + 1day");
		const oPayload = {
			iss: "*",
			sub: "mailto:mike@foo.com",
			nbf: tNow,
			iat: tNow,
			exp: tEnd,
			jti: "id123456",
			aud: "*",
		};
		// Sign JWT, password=616161
		const sHeader = JSON.stringify(oHeader);
		const sPayload = JSON.stringify(oPayload);

		const token = JWT.KJUR.jws.JWS.sign("HS256", sHeader, sPayload, "616161");
		console.log(token);
	};

	return (
		<>
			<button onClick={encode}>encode</button>
		</>
	);
}

export default App;
