# 📧 GoPro Mailer - Sistema de Gestión de Solicitudes para Distribuidores

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Nodemailer](https://img.shields.io/badge/Nodemailer-00a8e1?style=for-the-badge)

## 📌 Descripción

El **GoPro Mailer** es un backend robusto diseñado para procesar solicitudes de distribución de productos GoPro. Este sistema automatiza el flujo de trabajo desde la recepción de solicitudes hasta la notificación por correo electrónico tanto al solicitante como al equipo interno.

## ✨ Características Principales

- ✅ **Procesamiento de formularios** para solicitudes de distribución
- ✉️ **Envío automatizado de emails** con confirmación al distribuidor y notificación al equipo interno
- 🔒 **Validación estricta** de datos de entrada
- 📝 **Plantillas personalizables** para correos electrónicos
- 🛠 **Arquitectura modular** y fácil de mantener

## 🛠 Tecnologías Utilizadas

### Backend
- **Node.js**: Entorno de ejecución JavaScript
- **Express**: Framework web rápido y minimalista
- **TypeScript**: Superset tipado de JavaScript
- **Nodemailer**: Módulo para envío de emails
- **Handlebars**: Motor de plantillas para emails
- **Winston**: Sistema de logging avanzado

### Validación y Seguridad
- **Joi/celebrate**: Validación de esquemas de datos
- **CORS**: Middleware para políticas entre dominios
- **Dotenv**: Manejo de variables de entorno

## 🚀 Configuración


1. **Clonar el repositorio**:
2. **Instalar dependencias**: npm install
3. **Configurar variables de entorno**:
    Crear un archivo .env basado en .env.example
    Configurar las credenciales SMTP y otros parámetros necesarios
4. **Ejecutar en desarrollo**: npm run dev
5. **Compilar para produccion**: npm run build, npm start

📋 Variables de Entorno
Variable	Descripción	Ejemplo
PORT	Puerto del servidor	
SMTP_HOST	Servidor SMTP	
SMTP_PORT	Puerto SMTP
SMTP_USER	Usuario SMTP	
SMTP_PASS	Contraseña SMTP
FROM_EMAIL	Email remitente
TO_EMAIL	Email para notificaciones internas

## 🛑 Endpoints Disponibles
POST /apply-form

Procesa solicitudes de distribuidores y envía emails de confirmación.

Body de ejemplo:
json
Copy

{
  "nombre": "Juan",
  "apellido": "Pérez",
  "email": "juan@distribuidor.com",
  "telefono": "5491145678901",
  "pais": "Argentina",
  "capacidadInversion": true,
  "tiendaFisica": false,
  "nichoDeNegocio": "Outdoor"
}

Respuestas:

    200 OK: Solicitud procesada correctamente

    400 Bad Request: Error en los datos enviados

    500 Internal Server Error: Error del servidor

📧 Plantillas de Email

El sistema utiliza plantillas Handlebars ubicadas en:

    src/utils/templates/distributor-email.hbs (para el distribuidor)

    src/utils/templates/internal-email.hbs (para el equipo interno)


## 📊 Estructura del Proyecto
Copy

src/
├── app.ts            # Configuración de Express
├── index.ts          # Punto de entrada
├── routes/           # Definición de rutas
├── controllers/      # Lógica de controladores
├── services/         # Servicios de negocio
├── interfaces/       # Interfaces TypeScript
├── middlewares/      # Middlewares
└── utils/            # Utilidades (mailer, templates)