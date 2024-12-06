const express = require("express");
const cors = require("cors");
const Joi = require("joi");
const app = express();

const corsOptions = {
    origin:'https://csce242project-z84c.onrender.com',
    //origin:'http://localhost:3000',
    methods:'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization'
};

app.use(cors(corsOptions));
app.use(express.static("public"));

const multer = require("multer");

const mongoose = require("mongoose");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

mongoose
    .connect(
        "mongodb+srv://coolkevino:hh.8QK4JxuX274@csce242.bdyb6.mongodb.net/?retryWrites=true&w=majority&appName=csce242"
    )
    .then(()=>{
        console.log("connected to mongo");
    })
    .catch((error)=>{
        console.log("couldn't connect",error);
    })

const recordSchema = new mongoose.Schema({
    _id: Number,
    title: String,
    image: String,
    description: String,
    holder: String,
    holderDesc: String,
    prevHolder: String,
    prevDesc: String,
});

const Record = mongoose.model("Record",recordSchema);

const upload = multer({ storage: storage });



app.listen(3001,()=>{
    console.log("listening...");

});

app.get("/",(request,response)=>{
    response.sendFile(__dirname+"/index.html");
});

app.get("/api/records",async (request,response)=>{
    const records = await Record.find();
    response.send(records);
})

app.get("/api/records/:record_id",async(request,response)=>{
    const record = await Record.findOne({record_id: id});
    response.send(record);
})

app.post("/api/records", upload.single("img"),async (request, response) => {
    console.log("In a post request");

    const result = validateRecord(request.body);

    if (result.error) {
        response.status(400).send(result.error.details[0].message);
        console.log("I have an error");
        return;
    }

    const record = new Record({
        _id: records.length + 1,
        title: request.body.record_title,
        desc: request.body.record_description,
        holder: request.body.record_holder,
        holderDesc: request.body.record_holder_desc,
        prev: request.body.prev_record_holder,
        prevDesc: request.body.prev_record_holder_desc
    });

    if (request.file) {
        record.record_image = request.file.filename;
    }

    const newRecord = await record.save();

    console.log(record);
    response.status(200).send(newRecord);
});

app.put("/api/records/:record_id", upload.single("img"),async (req,res)=>{
    
  
    const result = validateRecord(req.body);
  
    if(result.error){
      res.status(400).send(result.error.details[0].message);
      return;
    }
    
    let fieldsToUpdate = {
        _id:records.length + 1,
        title: req.body.record_title,
        desc: req.body.record_description,
        holder: req.body.record_holder,
        holderDesc: req.body.record_holder_desc,
        prev: req.body.prev_record_holder,
        prevDesc: req.body.prev_record_holder_desc
    }

    if(req.file){
        record.record_image = req.file.filename;
    }

    const wentThrough = await Record.updateOne(
        {_id: req.params.id},
        fieldsToUpdate
    );
    
    const updatedRecord = await Record.findOne({_id: req.params.id});

    res.status(200).send(updatedRecord);
  });
  
  app.delete("/api/records/:id", async (req,res)=>{
    const record = await Record.findByIdAndDelete(req.params.id);
    res.status(200).send(record);
  });
  
  const validateRecord = (record) => {
    const schema = Joi.object({
        id: Joi.number().required(),
        title: Joi.string().min(3).required(),
        desc: Joi.string().min(3).required(),
        holder: Joi.string().min(3).required(),
        holderDesc: Joi.string().min(3).required(),
        prev: Joi.string().min(3).required(),
        prevDesc: Joi.string().min(3).required()
    });

    return schema.validate(record);
};
  