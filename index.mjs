import express from 'express';
import connectDB from './db.mjs'
import authRoutes from './Routes/auth.mjs'
import fileroutes from './Routes/file.mjs'
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(express.json())
app.use(cors())

app.use('/api/auth', authRoutes);
app.use('/api/file', fileroutes);
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})