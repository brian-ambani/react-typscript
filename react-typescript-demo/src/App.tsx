import React from "react";
import "./App.css";
import { Greet } from "./components/proptypes/Greet";
import { Person } from "./components/proptypes/Person";
import { PersonList } from "./components/proptypes/PersonList";
import { Status } from "./components/proptypes/Status";
import { Heading } from "./components/proptypes/Heading";
import { Oscar } from "./components/proptypes/Oscar";
import { Button } from "./components/proptypes/eventInputProps/Button";
import { Input } from "./components/proptypes/eventInputProps/Input";
import { Container } from "./components/proptypes/Container";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      <Greet name="Brian" isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>

      {/* eventProps */}

      <Button
        handleClick={(event, id) => console.log("Button Clicked", event, id)}
      />

      <Input value="" handleChange={(event) => console.log(event)} />

      {/* styles as props */}
      <Container
        styles={{
          border: "1px solid black",
          padding: "1rem",
          backgroundColor: "whitesmoke",
        }}
      />
      <LoggedIn />
      <User />
    </div>
  );
}

export default App;
