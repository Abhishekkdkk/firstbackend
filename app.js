import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import Router from "./src/routes/user.route.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use("/api/users", Router);
export default app;
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
