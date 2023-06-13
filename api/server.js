=// // SUNUCUYU BU DOSYAYA KURUN

// // if http, it is as below but iwill continue withh express
// // const http = require('http');
// // const server =http.createServer((req,res)=>{
// //     res.statusCode = "200";
// //     res.setHeader('Content-Type','text/plain');
// //     res.end('hello world from http server')
// // });
const express = require('express');
const server = express();
const userList =require("./users/model")

server.use(express.json());

// // check if "Serkan" is sent to check in postman
// //  server.get('/',(req,res)=>{
// //     res.send("Serkan")
// //   })

// //CRUD Operations

// //Task 1-1 Create - Post
server.post("/api/users", async (req, res) => {
  try {
      const { name, bio } = req.body;
      if (!name || !bio) {
          res.status(400).json({ message: "Lütfen kullanıcı için bir name ve bio sağlayın" });
      } else {
          const inserted = await userList.insert({ name: name, bio: bio });
          res.status(201).json(inserted);
      }
  } catch (error) {
      res.status(500).json({ message: "Veritabanına kaydedilirken bir hata oluştu" });
  }
});
  
//Task 1-2 Read - Get /api/users // using .then
    server.get('/api/users',(req,res)=>{
      userList.find()
        .then((response) =>{
          res.json(response)
        })
        .catch((err)=>
          res.status(499).json({message:"Kullanıcı bilgileri alınamadı"})
        )
        .finally(console.log("merhaba"))
    });
  //   server.get("/api/users", async (req, res) => {
  //   try {
  //     const getData = await userList.find();
  //     res.json(getData);
  //   } catch (error) {
  //     res.status(500).json({ message: "Kullanıcı bilgileri alınamadı" });
  //   }
  // });


//Task 1-3 Read - Get / /api/users/:id 
server.get("/api/users/:id", async (req, res) => {
  try {
    const getUser = await userList.findById(req.params.id);
    if (getUser) {
      res.json(getUser);
    } else {
      res
        .status(404)
        .json({ message: "Belirtilen ID'li kullanıcı bulunamadı" });
    }
  } catch (error) {
    res.status(500).json({ message: "Kullanıcı bilgisi alınamadı" });
  }
});

//Task 1-4 Delete - Delete

server.delete("/api/users/:id", async (req, res) => {
  try {
    const deletedUser = await userList.remove(req.params.id);
    if (deletedUser) {
      res.json(deletedUser);
    } else {
      res
        .status(404)
        .json({ message: "Belirtilen ID li kullanıcı bulunamadı" });
    }
  } catch (error) {
    res.status(500).json({ message: "Kullanıcı silinemedi" });
  }
});


// //Task 1-5 Update - Put
server.put("/api/users/:id", async (req, res) => {
  try {
    const { name, bio } = req.body;
    if (!name || !bio) {
      res
        .status(400)
        .json({ message: "Lütfen kullanıcı için name ve bio sağlayın" });
    } else {
      const updatedUser = await userList.update(req.params.id, req.body);
      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res
          .status(404)
          .json({ message: "Belirtilen ID'li kullanıcı bulunamadı" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Kullanıcı bilgileri güncellenemedi" });
  }
});


module.exports = server; // SERVERINIZI EXPORT EDİN {}
