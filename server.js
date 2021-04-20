const express = require("express");
const server = express();

const indexRouter = require("./routes");

server.use(express.static("public"));

server.use("/", indexRouter);

let listener = server.listen(process.env.PORT || 80, "vcap.me", () => {
	console.log(
		`Listening to ${listener.address().address}:${listener.address().port}`
	);
});
