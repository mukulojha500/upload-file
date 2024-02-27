import express from 'express';
import connectDB from './db.mjs'
import authRoutes from './Routes/auth.mjs'

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(express.json())

app.use('/api/auth', authRoutes);
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})