import express from "express"
import { getDocument, saveDocument } from "../controllers/documentController"

const router = express.Router()

router.get("/:id", getDocument)
router.post("/:id", saveDocument)

export default router