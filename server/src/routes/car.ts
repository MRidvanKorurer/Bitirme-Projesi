import express, {Router} from "express";
import { allCar, calculateFee, createCar, deleteCar } from "../controllers/Car";

const router: Router = express.Router();

router.post("/create", createCar);

router.delete("/delete/:id", deleteCar);

router.get("/all", allCar);

router.post("/fee", calculateFee);


export default router;