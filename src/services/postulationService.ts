import axios from "axios";
import { ErrorFactory } from "../utils/httpErrorResponses";
import { postulacionType } from "../@types/postulation";
import path from "path";
import { readFileSync } from "fs";
import { render } from "ejs";
require('dotenv').config();

export const postulationService = {
    sendPostulationEmail: async (postulationData: postulacionType): Promise<any> => {
        const templatePath = path.resolve(__dirname, "../templates/emailTemplate.ejs");
        const templateHtml = readFileSync(templatePath, "utf-8");
        const mailTemplate = render(templateHtml, {data: postulationData});
        const responseMailer = await axios.post(process.env.SERVICIO_MAILER_URL as string, {
            to: process.env.GOPRO_EMAIL,
            subject: "Solicitud de distribuidor GoPro",
            bcc: "",
            html: mailTemplate
        })
        if(responseMailer.status >= 400) throw ErrorFactory.createError(responseMailer.status, responseMailer.data);
        return responseMailer.data;
    }
}