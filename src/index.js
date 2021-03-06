import "dotenv/config";
import app from "./app";

let listener = app.listen(
	process.env.EXPRESS_PORT || 3000,
	process.env.EXPRESS_DOMAIN || "127.0.0.1",
	() => {
		console.log(
			`Listening to ${listener.address().address}:${listener.address().port}`
		);
	}
);
