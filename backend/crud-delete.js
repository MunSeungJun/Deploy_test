import {MongoClient} from "mongodb"

const uri = "mongodb+srv://demouser:demo1234@cluster0.jzdiw.mongodb.net/";
const client = new MongoClient(uri);

export async function deleteUsers(id) {
  try {
    await client.connect();
    const db = client.db("hr");
    const coll = db.collection("employees");
    coll.deleteOne(id)
  } catch (e) {
    console.log(e);
  }
}
