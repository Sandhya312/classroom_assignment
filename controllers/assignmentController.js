
const knex = require('../database');


const getAllAssignment =  async(req,res) =>{
    try {
        await knex('assignment')
            .orderBy('title')
            .then(result => {
                if (result.length !== 0) {
                 
                    return res.status(200).json(result);

                } else {
                    return res.status(200).json({ success: "No assignment available" })
                }
            })
            .catch((err) => {
                console.log(err);
                return res.status(404).json({ message: err.sqlMessage });
            })
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}

const addNewAssignment = async(req,res) =>{
      try{
       
        await knex('assignment')
              .insert({
                title:req.body.title,
                description:req.body.description,
                assignmentDate: new Date(),
              })
              .then(()=>{
                return res.status(200).json({ success: "Successfully added to db" });
              })
              .catch((err) => {
                console.log(err);
                return res.status(400).json({ message: err.sqlMessage });
            })


      }
      catch(err){
        console.log(err);
        res.status(500).send(err.message);
      }
}

const updateAssignment = async(req,res) =>{
    try {

        await knex('assignment')
            .where({ id: req.params.id })
            .update({
                title:req.body.title,
                description:req.body.description,
                assignmentDate: new Date(),
            })
            .then((result) => {
                return res.status(200).json({ success: result });

            })
            .catch((err) => {
                console.log(err);
                return res.status(400).json({ message: err.sqlMessage });

            })

    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}

const deleteAssignment = async(req,res) =>{
    try {

        await knex('assignment')
            .where({ id: req.params.id })
            .del()
            .then((result) => {
                return res.status(200).json({ success: result });

            })
            .catch((err) => {
                console.log(err);
                return res.status(400).json({ message: err.sqlMessage });

            })

    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}

module.exports = {
    getAllAssignment,
    addNewAssignment,
    updateAssignment,
    deleteAssignment
}