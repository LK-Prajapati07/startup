import express from "express";
import { sendController } from "../controller/send.controller.js";
const router=express.Router();
router.post("/send",sendController);
export default router;