import Client from '../models/Client.js'

async function getClients(req, res) {
    
    const clients = await Client.find()

    return res.json(clients)

}

async function getClientById(req, res) {
    const id = req.params.id

    const returnedClient = await Client.findById(id)

    res.status(200).json(returnedClient)
}

async function createClient(req, res) {
    
    const client = req.body

    const newClient = await Client.create(client)

    return res.json(newClient)

}

async function updateClient(req, res) {
    const id = req.params.id
    const update = req.body
    console.log(update)

    const updatedClient = await Client.findOneAndUpdate(id, update)

    res.status(200).json(updatedClient)
}

async function deleteClient(req, res) {

    const id = req.params.id

    await Client.findByIdAndDelete({_id: id})

    return res.status(200).json({response: "client deleted"})


}

export {getClients, getClientById, createClient, updateClient, deleteClient}