document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('click', addPost);

// Get text
function getText(){
    fetch('sample.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data);
    })
    .catch((err) => console.log(err)); // Catch errors
}

// The above function can be written as follows with arrow functions

// function getText(){
//     fetch('sammple.txt')
// .then((res)=>res.text())
// .then((data)=>console.log(data))
// }

//Get JSON
function getUsers(){
    fetch('users.json')
    .then((res)=> res.json())
    .then((data)=> {
        let output = '<h2 class="mb-4">Users</h2>';
        data.forEach(function(user){
            output += `
            <ul class="list-group mb-3">
            <li class="list-group-item">id: ${user.id}</li>
            <li class="list-group-item">name: ${user.name}</li>
            <li class="list-group-item">email: ${user.email}</li>
            </ul>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
}

//Get API Posts

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=> res.json())
    .then((data)=> {
        let output = '<h2>Posts</h2>';
        data.forEach(function(post){
            output += `
            <div class="card-card-body mb-3>
              <h3>${post.title}</h3>
              <p>${post.body}</p>
            </div>
        `;
        });
        document.getElementById('output').innerHTML = output;
    })
}

//Add Post - This does not get persisted to the database - you can view it in the console.

function addPost(e){
  e.preventDefault();// This prevents the form from actually submitting to a file
  
  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
          'Accept' : 'application/json, text/plain, */*',
          'Content-type' : 'application/json'
      },
      body:JSON.stringify({title:title, body:body})
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
}