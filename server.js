//server ko store karne ke liye

import { connectDB } from "./data/database.js";
import { app } from "./app.js";

connectDB();

// console.log(process.env.PORT); 4000

app.listen(4000, () => {
  console.log("Server is working");
});
