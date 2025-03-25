import { Router, Request, Response, application } from "express";
import { formController } from "../controllers/postulationFormController";
import { PostulantRequestValidation } from "../middlewares/PostulantRequestValidation";

const router = Router();
router.post("/apply-form", PostulantRequestValidation, formController.handlePostulantApplication);

export default router;