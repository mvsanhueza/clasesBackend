import express from 'express';


const app = express();
app.use('/users', getAllusers);

app.listen(3000, () => {
    console.log('Server running on port 3000');
})