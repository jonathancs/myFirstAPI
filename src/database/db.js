import mongoose, { connect } from 'mongoose'

async function connectDatabase() {
    await mongoose.connect(
        'mongodb+srv://jonathancasagrande:wgbcnptvNEY2czd@cluster0.vopg2hk.mongodb.net/test'
    )

}


export default connectDatabase