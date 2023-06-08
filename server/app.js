const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");

const PORT = 8000;
const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.disable("x-powered-by");
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "1mb" }));
app.use(cookieParser());

app.use("/api/shapes", require("./routes/shapes.route"));
app.use("/api/colors", require("./routes/colors.route"));
app.listen(PORT, (_) => console.log("info", `Server started on port ${PORT}`));
