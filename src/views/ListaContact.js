import React, { useEffect, useState } from "react";
import ListaComponent from "../components/ListaComponent";
import axios from "axios";

const ListaContact = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const consultarData = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(data);
      } catch (error) {
        console.log(error);
        setUsers(error);
      }
    };
    consultarData();
  }, []);

  return (
    <>
      <ListaComponent user={users} />
    </>
  );
};

export default ListaContact;
