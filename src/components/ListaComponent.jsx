import React from "react";
import { useHistory } from "react-router";

const ListaComponent = (user) => {
  const dataUser = user.user;
  const history = useHistory()

  console.log(dataUser);

  const Card =(id)=>{
    history.push(`/card/${id}`)
  }

  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">NickName</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        {dataUser.map((user) => (
          <tr key={user.id} onClick={()=>Card(user.id)}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListaComponent;
