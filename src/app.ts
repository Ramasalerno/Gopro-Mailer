import express, { Application, urlencoded, json} from "express";

require('dotenv').config();
//rutas
import routesIndex from "./routes/index.routes"
//middlewares
import notFound from "./routes/notFound404";
import morgan from "morgan";
import cors from "cors";

export class App {
    app: Application;
    private port: number | undefined

    constructor(port?: number) {
        this.port = port;
        this.app = express();
        this.GlobalMiddlewares();
        this.Routing();

    }
    GlobalMiddlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(urlencoded({ extended: true }));
        this.app.use('/public', express.static('public'));
        this.app.use(morgan("tiny"));
    }
    Routing() {
        this.app.use(routesIndex);
        this.app.use(notFound);
    }
    async listen() {
        this.app.listen(process.env.PORT || this.port, () => console.log(`Server Running on ${process.env.PORT || this.port}`));
    }
}