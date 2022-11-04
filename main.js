const app = require('./app');

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`trying to use three.js! on Port: ${PORT}`);
});
