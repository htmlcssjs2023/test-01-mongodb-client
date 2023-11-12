const Form = () => {
  const handleUserForm = (event)=>{
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = {username, email, password};
    // console.log(user);

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
      // console.log(data);
      
    })

  }
  return (
    <div>
      <div>
        <form className="w-6/12 mx-auto mt-10 mb-8" onSubmit={handleUserForm}>
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
    </div>
  );
};

export default Form;
