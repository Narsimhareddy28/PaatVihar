const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// routes
const authRoutes = require("./src/routes/auth");
const adminRoutes = require("./src/routes/admin/auth");
const categoryRoutes = require("./src/routes/categories/category");
// using .env
dotenv.config();
app.use(express.json());
// middelware
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
	// database connection
	mongoose
		.connect(
			`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.tvjvwwd.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,{
                useNewUrlParser:true,
                useUnifiedTopology:true,
            }
		)
		.then(() => {
			console.log("Database Connected!");
		});
// listening to the PORT
app.listen(process.env.PORT, () => {
	console.log(`Server is running on PORT:${process.env.PORT}`);
});
