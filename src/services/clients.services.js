import clientModel from "../models/client.model.js";

const getAllClients = async () => {
  const clientsList = await clientModel.find();
  return clientsList;
};

const getOneClientById = async (id) => {
  const client = await clientModel.findById(id);
  return client;
};

const createOneClient = async (newClient) => {
  const client = await clientModel.create(newClient);
  return client;
};

const deleteClientById = async (id) => {
  const client = await clientModel.findByIdAndDelete(id);
  return client;
};

const updateClientById = async (id, newDataClient) => {
  const client = await clientModel.findByIdAndUpdate(id, newDataClient, {
    new: true,
  });
  return client;
};

const findClientByCode = async (code) => {
  const client = await clientModel.findOne({ code });
  return client;
};

export {
  getAllClients,
  getOneClientById,
  createOneClient,
  findClientByCode,
  deleteClientById,
  updateClientById,
};
