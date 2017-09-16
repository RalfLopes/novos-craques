import express from "express";
import path from "path";
import routes from "./routes";

const app = express();

app.use("/", express.static("public"));
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

routes(app);

const port = process.env.PORT || 4000;

app.listen(port, err => {
	if(err) console.log(err);
	else console.log(`Server online - Listening to port ${port}`);
});