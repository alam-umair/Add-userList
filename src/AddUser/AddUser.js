import React, { useState } from "react";

import classes from "./AddUser.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [addUser, setAddUser] = useState("");
  const [addAge, setAddAge] = useState("");
  const [error, setError] = useState();

  const userNameHandler = (e) => {
    setAddUser(e.target.value);
  };

  const ageHandler = (e) => {
    setAddAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (addUser.trim().length === 0 || addAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a valid Name and Age ",
      });
    }
    if (+addAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid Age(Age > 0)",
      });
    }
    setAddUser("");
    setAddAge("");
    // console.log(`Name: ${addUser}, Age: ${addAge}`);
    props.onAddUser(addUser, addAge);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">User Name:</label>
          <input
            type="text"
            id="username"
            onChange={userNameHandler}
            value={addUser}
          />
          <label htmlFor="age">Age:(Years)</label>
          <input type="number" id="age" onChange={ageHandler} value={addAge} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
