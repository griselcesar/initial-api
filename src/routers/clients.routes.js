import { Router } from "express";
import {
  createOneClientController,
  deleteClientByIdController,
  getAllClientsController,
  getOneClientByIdController,
  updateClientByIdController,
} from "../controllers/clients.controllers.js";
import { createClientDTO, updateClientDTO } from "../validators/ClientDTO.js";

const clientsRouter = Router();

clientsRouter
  .route("/")
  .get(getAllClientsController)
  .post(createClientDTO, createOneClientController);
clientsRouter
  .route("/:id")
  .get(getOneClientByIdController)
  .delete(deleteClientByIdController)
  .put(updateClientDTO, updateClientByIdController);

export default clientsRouter;
