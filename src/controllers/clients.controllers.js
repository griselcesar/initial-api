import {
  createOneClient,
  getAllClients,
  getOneClientById,
  deleteClientById,
  updateClientById,
} from "../services/clients.services.js";

const getAllClientsController = async (req, res, next) => {
  const clientsList = await getAllClients();
  return res.status(200).json({
    message: "clientes registrados",
    count: clientsList.length,
    clients: clientsList.map((client) => {
      return {
        id: client._id,
        name: client.name,
        code: client.code,
        type: client.type,
        phone: client.phone,
        address: client.address,
      };
    }),
  });
};

const getOneClientByIdController = async (req, res, next) => {
  const { id } = req.params;
  const client = await getOneClientById(id);
  if (!client)
    return res.status(404).json({ message: "cliente no encontrado" });

  return res.status(200).json({
    message: "datos del cliente",
    client: {
      id: client._id,
      name: client.name,
      code: client.code,
      type: client.type,
      phone: client.phone,
      address: client.address,
    },
  });
};

const createOneClientController = async (req, res, next) => {
  const { code, name, address, phone, type } = req.body;
  const newClient = { code, name, address, phone, type };
  const client = await createOneClient(newClient);
  return res.status(201).json({
    message: `cliente ${client.name} creado`,
    client: {
      id: client._id,
      name: client.name,
      code: client.code,
      type: client.type,
      phone: client.phone,
      address: client.address,
    },
  });
};

const deleteClientByIdController = async (req, res, next) => {
  const { id } = req.params;
  const client = await deleteClientById(id);
  if (!client)
    return res.status(404).json({ message: "cliente no encontrado" });

  return res.status(200).json({ message: "cliente eliminado" });
};

const updateClientByIdController = async (req, res, next) => {
  const { id } = req.params;
  const { code, name, address, phone, type } = req.body;
  const newDataClient = { code, name, address, phone, type };
  const client = await updateClientById(id, newDataClient);
  if (!client)
    return res.status(404).json({ message: "cliente no encontrado" });

  return res.status(200).json({
    message: "cliente actualizado",
    client: {
      id: client._id,
      name: client.name,
      code: client.code,
      type: client.type,
      phone: client.phone,
      address: client.address,
    },
  });
};

export {
  getAllClientsController,
  getOneClientByIdController,
  createOneClientController,
  deleteClientByIdController,
  updateClientByIdController,
};
