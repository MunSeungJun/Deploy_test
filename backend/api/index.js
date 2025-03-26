import { MongoClient } from "mongodb";






export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // 모든 도메인 허용 (*)
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
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
      coll.updateOne({ employee_id: req.params.id }, req.body);
      res.status(200).json({
        message: "success",
      });
    }
    if (req.method === "DELETE") {
      coll.deleteOne({ employee_id: req.params.id });
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
