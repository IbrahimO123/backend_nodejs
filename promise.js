const { get } = require("config");

// console.log("Before");
// getUser(1, getRepositorie);
// console.log("After");

function getRepositorie(user) {
  //Get User Repositries
  console.log("user", user);
  getRepositories(user.userName, getCommits);
}

function getCommits(userRepo) {
  getCommit(userRepo, displayCommit);
}

function displayCommit(commits) {
  console.log("Commit: " + commits);
}
console.log("Before")
getUser(1)
  .then((user) => getRepositories(user.userName))
  .then((repos) => getCommit(repos[0]) )
  .then((commit) => console.log("Commit: " + commit))
  .catch(err => console.log("Error: " + err.message));
console.log("After")

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Connnected to a server...");
      resolve({ id: id, userName: "IbrahimO123" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling Github API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommit(repos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Retrieved Commit:... ");
      resolve("Commit");
    });
  });
}
