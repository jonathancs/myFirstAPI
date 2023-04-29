import { Router } from "express"
import { getClients, getClientById, createClient, updateClient, deleteClient } from "./controllers/UserController.js"

const routes = Router()


// GET
routes.get('/clients', getClients)
routes.get('/clients/:id', getClientById)


// POST
routes.post('/clients', createClient)
routes.post('/clients/:id', updateClient)


// DELETE
routes.delete('/clients/:id', deleteClient)


export default routes