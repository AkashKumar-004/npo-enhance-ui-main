require('dotenv').config();
const express =require('express')
const cors =require('cors')
const app=express();
const DBcon=require('./Config/db')
const Desboard=require('./routes/Desboardroute')
const donation=require('./routes/Donationroutes')
const event=require("./routes/Eventroutes")
const notification=require('./routes/notificationroutes')
const service=require('./routes/Serviceroute')
const user=require('./routes/Userrouter')
const volunteer=require('./routes/Volunteerroute')
const volunteersec=require('./routes/Volunteerroutes')
app.use(express.json())
app.use(cors());
console.log("server")
DBcon()
  .then(() => {
    console.log("Database connected successfully");
    const port = 7777 || 7778;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed", err);
  });

  app.use('/desboard',Desboard)
  app.use('/donation',donation)
  app.use('/event',event)
  app.use('/notifi',notification)
  app.use('/servicess',service)
  app.use('/user',user)
  app.use('/vol',volunteer)
  app.use('/volsec',volunteersec)
  app.get('/', (req, res) => {
    res.json({ message: "message" });
  });
  