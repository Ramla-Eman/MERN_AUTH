import express, { application } from 'express'
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import connectDB from './config/mongodb.js'
import authRouter from './routes/authRoutes.js'
import userRouter from './routes/userRoutes.js'

const app = express()
const port = process.env.PORT || 5000
connectDB(  )

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials:true, origin: 'http://localhost:3000'}))

// api end point
app.get('/', (req, res) => {
    res.send('Server is running')
})
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})