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
const allowedOrigins =['http://localhost:5173', 'https://mern-auth-frontend-red.vercel.app/']

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials:true, origin: allowedOrigins}))

// api end point
app.get('/', (req, res) => {
    res.send('Server is running')
})
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})