const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/projectsDB",
  
);

const projectList = [
  {
    projectImg: "http://via.placeholder.com/250x250",
    projectName: "Project One Name",
    projectDes: "A cool project",
    githubURL: "https://github.com/kovacicmichael/FriendFinder/blob/master/README.md",
    liveLink: "https://github.com",
    techUsed: "node.js, express.js",
    projectClicks: 0
  },
  {
    projectImg: "http://via.placeholder.com/250x250",
    projectName: "Project Two Name",
    projectDes: "A cool project",
    githubURL: "https://github.com/kovacicmichael/FriendFinder/blob/master/README.md",
    liveLink: "https://github.com",
    techUsed: "node.js, express.js",
    projectClicks: 0
  }
]

db.Project
  .remove({})
  .then(() => db.Project.collection.insert(projectList))
  .then(data => {
    console.log(data)
    console.log(data.insertedCount + " records inserted into Portfolio!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });