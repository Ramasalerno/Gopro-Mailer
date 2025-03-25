import { Request, Response, NextFunction } from "express";
import { z } from "zod";




const reqValidationSchema = z.object({
    nombre: z.string().trim().min(1, "Nombre requerido").max(50, "Máximo 50 caracteres"),
    apellido: z.string().trim().min(1, "Apellido requerido").max(50, "Máximo 50 caracteres"),
    telefono: z.string().trim().min(1, "Teléfono requerido").refine((n) => /^[1-9]\d{5,14}$/.test(n), {
        message: "Formato de teléfono inválido",
    }),
    pais: z.string().trim().min(1, "País requerido").max(50, "Máximo 50 caracteres"),
    razonSocial: z.string().trim().min(1, "Razón social requerida").max(50, "Máximo 50 caracteres"),
    email: z.string().trim().min(1, "Email requerido").email().max(50, "Máximo 50 caracteres"),
    redesSociales: z.string().trim().min(1, "Campo requerido").url({ message: "Ingrese una URL de perfil válida" }).max(100, "Máximo 100 caracteres"),
    paginaWeb: z.string().trim().min(1, "Campo requerido").url({ message: "Ingrese una URL válida" }).max(100, "Máximo 100 caracteres"),
    capacidadInversion: z.boolean(),
    tiendaFisica: z.boolean(),
    nichoDeNegocio: z.string().trim().min(1, "Selecciona una opción").max(50, "Máximo 50 caracteres"),
    ventaOnline: z.boolean(),
    medioDeContacto: z.string().trim().min(1, "Selecciona una opción").max(50, "Máximo 50 caracteres")
}).strict().required();

export async function PostulantRequestValidation(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const validationResult = await reqValidationSchema.safeParseAsync(req.body);
        if (!validationResult.success) {
            const errorsResult = validationResult.error.issues;
            const errors = errorsResult.map(error => ({
                field: error.path[0],
                message: error.message

            }))
            res.status(400).json({
                status: "validation error",
                errors
            });
            return;
        }
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}
