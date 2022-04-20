const express = require('express')
const axios = require('axios')

const app = express()

const axiosInstance = axios.create({
    baseURL: 'https://62581914e4e0b73142871e36.mockapi.io',
    header: { "Content-Type": "application/json", }
})

app.get("/", async (req, res, next) => {
    try {
      const response = await axiosInstance.get("/user");
    //   console.log(response.data);
      const usersData = response.data;
      //You need To send data from using send method
      res.status(200).send(usersData);
      
      //Or you can use json method to send the data
    //   res.status(200).json(response.data.result);
  
    } catch (err) {
      res.status(400).send(err);
    }
    
});


app.listen(3000, () => {
    console.log('listening on port 3000')
})