console.log("Before");
getUser(1, getRepositorie);
console.log("After");

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

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Connnected to a server...");
    callback({ id: id, userName: "IbrahimO123" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log(username);
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

function getCommit(repo, callback) {
  setTimeout(() => {
    console.log("Retrieved Commit: " + repo);
    callback(null, repo);
  });
}
