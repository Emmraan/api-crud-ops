const users = require("../data/userData.json");

// Export a function that handles the route logic
module.exports = function (req, res) {
  const userId = req.params.userId;
  // Find the user with the matching ID
  const user = users.find((user) => {  //also work without return:  user.id === parseInt(userId);
    return user.id === parseInt(userId);
  });

  // If user is found, generate HTML to display user information
  if (user) {
    const html = `
    <h1>User found in DataBase</h1>
    <table>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Job Title</th>
      </tr>
      <tr>
        <td>${user.id}</td>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td>${user.email}</td>
        <td>${user.gender}</td>
        <td>${user.job_title}</td>
      </tr>
    </table>
    `;
    res.send(html);
  } else {
    // If user with the given ID is not found, send a 404 error
    res.status(404).send(`<h1>User not found in DataBase</h1>`);
  }
};
