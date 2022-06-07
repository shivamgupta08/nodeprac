const express = require("express");
const con = require("./config");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  con.query("select * from users", (err, results) => {
    if (err) { res.send("error in api") }
    else { res.send(results) }
  })
});


app.post("/", (req, res) => {
  const data = req.body;
  con.query("INSERT INTO users SET?", data, (error, results, fields) => {
    if (error) throw error;
    res.send(results)
  })
});

app.put("/:id",(req,res)=>{
  const data= [req.body.name,req.body.password,req.body.user_type,req.params.id];
  con.query("UPDATE users SET name = ?, password = ?, user_type = ? WHERE id = ?",
  data,(error,results,fields)=>{
    if(error) throw error;
    res.send(results)
  })
})

app.delete("/:id",(req,res)=>{
    con.query("DELETE FROM users WHERE id =" + req.params.id, (error,results)=>{
      if(error) throw error;
      res.send(results)
    })
  })

app.listen("5000")