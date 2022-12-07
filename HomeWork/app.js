const { rejects } = require('assert')
const express = require('express')
const { resolve } = require('path')
const app = express()
const port = 3000

function exe(resolve, reject){
  console.log("실행");
  resolve();
}

app.get("/han", async (req, res) => {
  res.send('<script> alert("Hallow!"); </script>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})