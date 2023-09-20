import { Router } from "express";
import {
  createOneClientController,
  deleteClientByIdController,
  getAllClientsController,
  getOneClientByIdController,
} from "../controllers/clients.controllers.js";
import { createClientDTO } from "../validators/newClientDTO.js";

const clientsRouter = Router();

clientsRouter
  .route("/")
  .get(getAllClientsController)
  .post(createClientDTO, createOneClientController);
clientsRouter
  .route("/:id")
  .get(getOneClientByIdController)
  .delete(deleteClientByIdController);

export default clientsRouter;
