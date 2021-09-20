import React, { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import axios from "axios";

const CardContact = ({ match }) => {
  const id = match.params.id;
  console.log("id");
  console.log(id);
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
      <CardComponent id={id} user={users} />
    </>
  );
};

export default CardContact;
