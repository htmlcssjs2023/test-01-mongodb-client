# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## How to insert data into database from client side ?
### Client Side Form
```JavaScript
  <div>
        <form className="w-6/12 mx-auto mt-10 mb-8">
          <h2 className="text-2xl py-4 text-cente rounded-md w-8/12">
            Registration Form
          </h2>

          <div className="flex md:flex-col">
            <label className="text-[1.2rem] py-2 px-2" htmlFor="username">
              User Name
            </label>
            <input
              type="text"
              className="text-[1.2rem] border-solid border-2 rounded-md border-green-400 py-2 px-2"
              name="username"
              placeholder="Enter your name"
              id="username"
            />
          </div>
          <div className="flex md:flex-col">
            <label className="text-[1.2rem] py-2 px-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="text-[1.2rem] border-solid border-2 rounded-md border-green-400 py-2 px-2"
              name="email"
              placeholder="Enter your password"
              id="email"
            />
          </div>
          <div className="flex md:flex-col mb-10">
            <label className="text-[1.2rem] py-2 px-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="text-[1.2rem] border-solid border-2 rounded-md border-green-400 py-2 px-2"
              name="password"
              placeholder="Enter your password"
              id="password"
            />
          </div>
          <div className="flex md:flex-col items-end">
            <input
              type="submit"
              className=" text-[1.3rem] border-solid border-2 rounded-md bg-green-500 py-2 px-2 w-3/12 cursor-pointer hover:bg-green-300"
              value="Submit"
            />
          </div>
        </form>
      </div>
 
```
### Catch data from client side form
```JavaScript
  const handleUserForm = (event)=>{
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = {username, email, password};
    console.log(user);

    // send the client side data to the server side using POST API
    fetch('http://localhost:5000/users', {
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId === data.insertedId){
        alert('success')
      }
    })

  }

```
## Server Side 
### Receive from server side and insert into database
```JavaScript
    // create post api
    app.post('/users', async(req, res)=>{
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result);
    })

    // Retrieve all data from database
   app.get('/users', async(req, res)=>{
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
   })
```