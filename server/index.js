const app = require('./server.js');
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server has started on ${port}!!`);
});