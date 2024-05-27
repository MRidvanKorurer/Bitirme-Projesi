import express, {Router} from "express";
import carRoute from "./car";

const router: Router = express.Router();

router.use("/car", carRoute);


export default router;