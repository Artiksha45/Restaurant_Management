/*const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const AdminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

// Hash password before saving
AdminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("Admin", AdminSchema);*/

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const AdminSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true
  },
  email: { 
    type: String, 
    unique: true, 
    required: true
  },
  password: { 
    type: String, 
    required: true
  }
});

// Hash password before saving
AdminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Add method to verify password
AdminSchema.methods.verifyPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

// Static method for admin login
AdminSchema.statics.login = async function(email, password) {
  // Input validation
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  // Find admin by email
  const admin = await this.findOne({ email });
  
  // If admin not found
  if (!admin) {
    throw new Error("Invalid credentials");
  }

  // Verify password
  const isValidPassword = await admin.verifyPassword(password);
  
  // If password doesn't match
  if (!isValidPassword) {
    throw new Error("Invalid credentials");
  }

  return admin;
};

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
