import { findClientByCode } from "../services/clients.services.js";

const createClientDTO = async (req, res, next) => {
  const { code, name, address, phone, type } = req.body;
  if (code) {
    const isClient = await findClientByCode(code);
    if (isClient)
      return res.status(400).json({ message: "cliente ya registrado" });
  }
  if (!name)
    return res.status(400).json({ message: "se requiere la propiedad name" });
  if (!code)
    return res.status(400).json({ message: "se requiere la propiedad code" });
  if (!address)
    return res
      .status(400)
      .json({ message: "se requiere la propiedad address" });
  if (!phone)
    return res.status(400).json({ message: "se requiere la propiedad phone" });
  if (!type)
    return res.status(400).json({ message: "se requiere la propiedad type" });
  next();
};

export { createClientDTO };
