import React , {useState} from "react";

const CreateUser = () => {

    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [address, setAddress] = useState();
    const  [dataa, setData] = useState();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            id : new Date(),
            name ,
            email,
            password,
            address
        }
        console.log(data);
        localStorage.setItem('data',data);
        setData(data);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <label for="name">Name</label>
      <input type="text" value={name} onChange={ (e) => { setName(e.target.value)}}/>
      <br />
      <label for="name">Email</label>
      <input type="text" value={email} onChange={ (e) => { setEmail(e.target.value)}}/>
      <br />
      <label for="name">Password</label>
      <input type="text" value={password} onChange={ (e) => { setPassword(e.target.value)}}/>
      <br />
      <label for="name">Address</label>
      <input type="text" value={address} onChange={ (e) => { setAddress(e.target.value)}}/>
       <br/>
      <button type="submit">Submit </button>
      </form>
      {dataa? dataa.map((item) => {
         return <p>item</p>
      }) : ""
              
    }

    </div>
  );
};

export default CreateUser;
