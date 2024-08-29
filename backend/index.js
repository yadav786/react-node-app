const express =  require('express');
const cors = require('cors')
const port = process.env.port || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/images', express.static('public/images'));
app.get('/api', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
