import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect("mongodb://127.0.0.1:27017", {
        dbname: "CRUD_APP",
    }).then(() => console.log("Database Connected"))
        .catch((e) => console.log(e));
}

export default connectDB;