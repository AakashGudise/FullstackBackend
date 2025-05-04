// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');

// dotenv.config();
// connectDB();

// const app = express();
// app.use(express.json());

// const userRoutes = require('./routers/userRoutes');
// app.use('/api/users', userRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const cors = require('cors');
const questionRoutes = require('./routers/msqQuestionsRouters');




const userRoutes = require('./routers/userRoutes');
const ErollmentRoutes = require('./routers/enrollmentRoutes');







dotenv.config();

// dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());
// app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PATCH, DELETE, PUT ",
    credentials: true
}));



app.use('/api/auth', require('./routers/userRoutes'));
app.use('/api/protected', require('./routers/protectedRoutes'));
app.use('/api/questions', questionRoutes);

app.use('/api/auth', userRoutes);

app.use('/uploads', express.static('uploads'));
const courseRoutes = require('./routers/course');
app.use('/api/courses', courseRoutes); // ✅ This is correct
app.use('/api/enrollments', ErollmentRoutes);









  const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
