var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ArticleSchema object
// This is similar to a Sequelize model
var ProjectSchema = new Schema({

  projectImg: {
    type: String,
    required: false
  },
  projectName: {
    type: String,
    required: true
  },
  projectDes: {
    type: String,
    required: false
  },
  githubURL: {
    type: String,
    required: false
  },
  liveLink: {
    type: String,
    required: false
  },
  techUsed: {
      type: Array,
      required: false
  },
  projectClicks: {
      type: Number,
      required: false
    },
});

// This creates our model from the above schema, using mongoose's model method
var Project = mongoose.model("project", ProjectSchema);

// Export the Article model
module.exports = Project;