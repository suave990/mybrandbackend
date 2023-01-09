import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import "dotenv/config";
import routes from "./routes";
const app = express();

app.use(express.json());
app.use(morgan("dev"));

const port = process.env.PORT || 5000;
try {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
  console.log("Database connection successfull");

  app.use("/api", routes);
  app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found" });
  });
  app.listen(port, () => {
    console.log("Server is running on port " + port);
  });
} catch (error) {
  console.log(error);
}
