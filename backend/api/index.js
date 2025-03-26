import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  const uri =
    "mongodb+srv://vercel-admin-user:8FPLjbXwx9znESJY@cluster0.jzdiw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("hr");
  const coll = db.collection("employees");

  try {
    if (req.method === "GET") {
      const cursor = coll.find();
      const users = await cursor.toArray();
      res.status(200).json(users);
    }
    if (req.method === "POST") {
      coll.insertOne(req.body);
      res.status(200).json({
        message: "success",
      });
    }
    if (req.method === "PUT") {
      coll.updateOne({ employee_id: req.query.id }, req.body);
      res.status(200).json({
        message: "success",
      });
    }
    if (req.method === "DELETE") {
      coll.deleteOne({ employee_id: req.query.id});
      res.status(200).json({
        message: "success",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "실패",
    });
  }
}
