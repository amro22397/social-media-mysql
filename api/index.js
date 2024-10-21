
import express from 'express'
import authRoutes from './routes/users.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/users.js'
import commentRoutes from './routes/users.js'
import likeRoutes from './routes/users.js'


const app = express();


app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/likes', likeRoutes);

app.use(express.json());

app.listen(8800, () => {
    console.log("API working!")
})