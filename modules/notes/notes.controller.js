import Usermodel from "../user/user.model.js";
import Notes from "./notes.model.js";

export const createNotes = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    let note = await Notes.create({
      title,
      content,
      userId: req.user.id,
    });
    res.json({ message: "success", note });
  } catch (err) {
    console.log("Errr" + err);
    res.json("err in server");
  }
};
export const geteNotes = async (req, res, next) => {
  try {
    const notes = await Notes.findAll({
      where: { userId: req.user.id },
      include: [
        {
          model: Usermodel,
          attributes: ["name", "email"],
        },
      ],
    });
    res.json(notes);
  } catch (err) {
    console.log("Errr" + err);
    res.json("err in server");
  }
};
export const updateNotes = async (req, res, next) => {
  try {
    const noteId = req.params.id;
    const userId = req.user.id;
    const { title, content } = req.body;

    const note = await Notes.findOne({
      where: { id: noteId, userId },
    });

    if (!note) {
      return res
        .status(404)
        .json({ error: "Note not found or not authorized" });
    }

     
    await note.update({
      title: title || note.title, // Keep the original value if no update is provided
      content: content || note.content,
    });

    res.status(200).json({ message: "Note updated successfully", note });
  } catch (err) {
    console.log("Errr" + err);
    res.json("err in server");
  }
};




export const deleteNotes = async (req, res, next) => {
  try {
    const noteId = req.params.id;
    const userId = req.user.id;

    const note = await Notes.findOne({
      where: { id: noteId, userId }, // Ensure the note belongs to the user
    });

    if (!note) {
      return res
        .status(404)
        .json({ error: "Note not found or not authorized" });
    }

    await note.destroy(); // Delete the note
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (err) {
    console.log("Errr" + err);
    res.json("err in server");
  }
};
