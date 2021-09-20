import React from "react";

const CardComponent = (id, user) => {
  const data = user.user;
  const dataUser = data.find((user) => user.id === id);
  console.log('dataUser');
  console.log(dataUser);
  return (
    <div className="card" className="w-75 m-auto">
      {dataUser.map((user) => (
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">{user.email}</p>
          <p className="card-text">{user.phone}</p>
          <p className="card-text">{user.city, ` `, user.street}</p>
          <a href={user.website} className="btn btn-primary">{user.website}</a>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
