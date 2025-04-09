const app = require('./app')
const port = 3005

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})