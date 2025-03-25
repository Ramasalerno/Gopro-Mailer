import { Request, Response } from "express";
import { HttpError, ErrorFactory } from "../utils/httpErrorResponses";
import { postulationService } from "../services/postulationService";

export const formController = {
    handlePostulantApplication: async (req: Request, res: Response): Promise<Response> => {
        try {
            const postulationData =  req.body;
            const sendEmail = await postulationService.sendPostulationEmail(postulationData);
            return res.status(200).json({status: "success", message: sendEmail.message});
        } catch (error: any) {
            console.error(error.message);
            if (error instanceof HttpError) return res.status(error.statusCode).json({ status: "error", message: error.message });
            return res.status(500).json({ status: "error", message: "Ha ocurrido un error al realizar la solicitud" });
        }
    }
}