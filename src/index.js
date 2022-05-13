const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const { config } = require("process");

const app = express();

app.use(cors());
app.use(bodyparser.json());

// database connection

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "empower",
  port: 3306,
});

//check database connection

db.connect((err) => {
  if (err) {
    console.log(err, "dberr");
  }
  console.log("database connected ...");
});

//get all data
app.get("/course", (req, res) => {
  let qr = "select * from course";
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "errs");
    }
    if (result.length > 0) {
      res.send({
        message: "all course data",
        data: result,
      });
    }
  });
});
//get all data qcm
app.get("/qcm", (req, res) => {
  let qr = "select * from qcm";
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "errs");
    }
    if (result.length > 0) {
      res.send({
        message: "all qcm data",
        data: result,
      });
    }
  });
});
result = [];
//get single data qcm
app.get("/qcm/:IdQcm", (req, res) => {
  let gID = req.params.IdQcm;
  let qr = `select * from qcm where id_qcm = ${gID}`;

  db.query(qr, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.length > 0) {
      res.send({
        message: "get single data",
        data: result,
      });
    } else {
      res.send({
        message: "data not found",
      });
    }
  });
});

//get single data course
app.get("/course/:Id", (req, res) => {
  let gID = req.params.Id;
  let qr = `select * from course where id = ${gID}`;

  db.query(qr, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.length > 0) {
      res.send({
        message: "get single data",
        data: result,
      });
    } else {
      res.send({
        message: "data not found",
      });
    }
  });
});

//create data qcm
app.post("/qcm", (req, res) => {
  console.log(req.body, "createddata");

  let description = req.body.description;
  let nbr_question = req.body.nbr_question;
  let points = req.body.points;
  let title = req.body.title;
  let mark = req.body.mark;

  let qr = `insert into qcm (description,nbr_question,points,title,mark) values('${description}','${nbr_question}','${points}','${title}','${mark}')`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result, "result");
    res.send({
      message: "data inserted",
    });
  });
});
//create data course
app.post("/course", (req, res) => {
  console.log(req.body, "createddata");

  let date_d = req.body.date_d;
  let date_s = req.body.date_s;
  let description = req.body.description;
  let image = req.body.image;
  let name = req.body.name;
  let price = req.body.price;
  let rating =req.body.rating

  let qr = `insert into course (date_d,date_s,description,image,name,price,rating) values('${date_d}','${date_s}','${description}','${image}','${name}','${price}','${rating}')`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result, "result");
    res.send({
      message: "data inserted",
    });
  });
});


//update data qcm
app.put("/qcm/:id", (req, res) => {
  console.log(req.body, "updatedata");

  let gID = req.params.id;
  let description = req.body.description;
  let nbr_question = req.body.nbr_question;
  let points = req.body.points;
  let title = req.body.title;
  let mark = req.body.mark;

  let qr = `update qcm set description='${description}',nbr_question='${nbr_question}',points='${points}',title='${title}',mark='${mark}'  where id_qcm =${gID}`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send({
      message: "data updated",
    });
  });
});

//update data course
app.put("/course/:id", (req, res) => {
  console.log(req.body, "updatedata");

  let gID = req.params.id;
  let date_d = req.body.date_d;
  let date_s = req.body.date_s;
  let description = req.body.description;
  let image = req.body.image;
  let name = req.body.name;
  let price = req.body.price;
  let rating =req.body.rating


  let qr = `update course set date_d='${date_d}',date_s='${date_s}',description='${description}',image='${image}',name='${name}',price='${price},'${rating}''  where id=${gID}`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send({
      message: "data updated",
    });
  });
});

//delete data qcm
app.delete("/qcm/:id", (req, res) => {
  let qID = req.params.id;

  let qr = `delete from qcm where id_qcm ='${qID}'`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send({ message: "data deleted" });
  });
});

//delete data course
app.delete("/course/:id", (req, res) => {
  let qID = req.params.id;

  let qr = `delete from course where id='${qID}'`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send({ message: "data deleted" });
  });
});


app.listen(3000, () => {
  console.log("server running");
});

