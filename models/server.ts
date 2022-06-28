import express, { Application } from "express";
import userRoutes from "../routes/usuarios";
import cors from "cors";
import pool from "../db/connection";
class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: "/api/usuarios",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    // database connection
    this.dbConnection();

    // initial methods
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await pool;
      console.log("database online");
      
    } catch (error) {
      console.log(error, "No se ha podido establecer la conexion");
    }
  }
  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura del body
    this.app.use(express.json());

    // Carpeta publica
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`);
    });
  }
}

export default Server;
