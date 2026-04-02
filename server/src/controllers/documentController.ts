import { Request, Response } from "express"
import Document from "../models/Document"



// GET document
export const getDocument = async (req: Request, res: Response) => {
  const id = req.params.id as string

  let doc = await Document.findOne({ docId: id })

  if (!doc) {
    doc = await Document.create({ docId: id, content: "" })
  }

  res.json(doc)
}

// SAVE document
export const saveDocument = async (req: Request, res: Response) => {
  const id = req.params.id as string
  const { content } = req.body

  const doc = await Document.findOneAndUpdate(
    { docId: id },
    { content },
    { upsert: true, returnDocument: "after" }
  )

  res.json(doc)
}