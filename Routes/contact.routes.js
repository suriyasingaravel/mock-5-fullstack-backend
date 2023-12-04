const express = require('express');
const {ContactModel} = require("../Model/contacts.model");

const contactRouter = express.Router();


contactRouter.post("/addcontact",async(req,res)=>{

    try {
        const newContact = new ContactModel(req.body);
        await newContact.save();
        res.status(200).send({"msg": "Contact added successfully", "newContact": newContact});
    } 
    catch (error) {
         res.status(401).send({"msg": "Something went wrong", "error": error});
    }
})    



contactRouter.get("/", async (req, res) => {
    try {
      const query = {};
      
      if (req.query.fullname) {
        query.fullname = {$regex: req.query.fullname, $options: "i"};
      }
  
      const contacts = await ContactModel.find(query);
      res.status(200).send({ "Contacts": contacts });
    } catch (error) {
      res.status(500).send({ "msg": "Something went wrong", "error": error });
    }
  });

contactRouter.patch("/update/:contactId",async(req,res)=>{

    const {contactId} = req.params;

    try {
        const contact = await ContactModel.findByIdAndUpdate({"_id":contactId}, req.body);
        res.status(200).send({"msg": "Contact updated successfully", "contact": contact});
       
    } 
    catch (error) {
        res.status(401).send({"msg": "Something went wrong", "error": error});
    }
})

contactRouter.delete("/delete/:contactId",async(req,res)=>{
    const {contactId} = req.params;

    try {
        const contact = await ContactModel.findByIdAndDelete({"_id": contactId});
        res.status(200).send({"msg": "Contact Deleted successfully"});
    } 
    catch (error) {
        res.status(401).send({"msg": "Something went wrong", "error": error});
    }
})


module.exports = {contactRouter};