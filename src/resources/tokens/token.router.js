import { Router } from "express";
import { getAllTokens } from "./token.controller";

const router = Router();

router.route("/").get(getAllTokens);

export default router;