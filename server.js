import express from 'express';

const app = express();

app.use(express.static('dist'));
// app.get('/', (req, res) => {
//     res.send('Server is ready!');
// });


app.get('/api/colors', (req, res) => {
    const colors = [
        {
            id: 1,
            title: 'red',
            content: 'This is red color'

        },
        {
            id: 2,
            title: 'blue',
            content: 'This is blue color'

        },
        {
            id: 3,
            title: 'green',
            content: 'This is green color'

        },
        {
            id: 4,
            title: 'purple',
            content: 'This is purple color'

        },
        {
            id: 5,
            title: 'aqua',
            content: 'This is aqua color'

        },
        {
            id: 6,
            title: 'pink',
            content: 'This is pink color'

        }

    ];

    res.send(colors);
});



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);



});