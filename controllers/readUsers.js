 const users = require('../data/userData.json')
 // HTML table header
 let html = `
 <table>
   <tr>
     <th>ID</th>
     <th>First Name</th>
     <th>Last Name</th>
     <th>Email</th>
     <th>Gender</th>
     <th>Job Title</th>
   </tr>
 `;
 
 // Loop through each users and generate table rows
 users.forEach(users => {
   html += `
   <tr>
     <td>${users.id}</td>
     <td>${users.first_name}</td>
     <td>${users.last_name}</td>
     <td>${users.email}</td>
     <td>${users.gender}</td>
     <td>${users.job_title}</td>
   </tr>
   `;
 });

 // Close the table
 html += `</table>`;

 module.exports = html;