import React, { useEffect, useState } from "react";
import { Card, Button, Img, Body, Title } from "react-bootstrap";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data) {
    return (
      <div class="card">
        {data.map((user) => (
          <Card style={{ width: "100" }} key={user.id}>
            <Card.Img variant="top" src={user.avatar_url} />
            <Card.Body>
              <Card.Title>{user.login}</Card.Title>
              <Card.Text>Type: {user.type}</Card.Text>
            </Card.Body>
          </Card>
        ))}
        <Button variant="primary" onClick={() => setData([])}>
          Remove Data
        </Button>
      </div>
    );
  }

  return <p> Data not found! </p>;
}
