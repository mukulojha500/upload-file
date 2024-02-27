import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://mukulojha500:mukul2001@cluster0.0ux0hif.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to DB')
    }catch(error){
        console.log(error)
    }
}

export default connectDB;