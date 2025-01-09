import { Router } from "express";
import { verfyToken } from "../../verfytoken.js";
import { createNotes, deleteNotes, geteNotes, updateNotes } from "./notes.controller.js";
  

const noteRoute=Router()

noteRoute.post('/',verfyToken,createNotes)
noteRoute.get('/',verfyToken,geteNotes)
noteRoute.delete('/:id',verfyToken,deleteNotes)
noteRoute.patch('/:id',verfyToken,updateNotes)
 

export default noteRoute