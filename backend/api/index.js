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
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

 
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db("hr");
  const coll = db.collection("employees");

  try {
    if (req.method === "GET") {
        const {type, id} = req.query
        if( type === 'list') {
            const cursor = coll.find();
            const users = await cursor.toArray();
            res.status(200).json(users);
        }
        if ( type === 'select') {
            const cursor = coll.find({employee_id: id});
            const users = await cursor.toArray();
            res.status(200).json(users);
        }
      
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
