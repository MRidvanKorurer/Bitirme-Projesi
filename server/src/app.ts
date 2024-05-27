import "express-async-errors";
import express, {Express} from "express";
import cors from "cors";
import dotenv from "dotenv";
import conn from "./db/connect";
import errorHandlerMiddleware from "./middlewares/errorHandler";
import indexRoute from "./routes/index";


dotenv.config();

const app: Express = express();
const port = 5000;

// middlewares
app.use(express.json());
app.use(cors());

// routing
app.use("/api", indexRoute);


// error
app.use(errorHandlerMiddleware);

app.listen(port, () => {
    conn();
    console.log(`Server is running on port: ${port}`);
});