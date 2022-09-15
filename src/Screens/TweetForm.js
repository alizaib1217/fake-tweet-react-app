import { useEffect, useRef, useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Card,
} from "reactstrap";

const TweetForm = () => {
  const form = useRef(null);
  const [tweetList, setTweetList] = useState([]);

  useEffect(() => {
    let items = localStorage.getItem("TWEETS");
    items = JSON.parse(items);
    if (items.length) {
      setTweetList(tweetList);
    }
  }, []);

  function onSubmit(event) {
    event.preventDefault();
    let data = {
      name: event.target.name.value,
      username: event.target.username.value,
      time: event.target.time.value,
      tweet: event.target.tweet.value,
      file: event.target.file.value,
      verified: event.target.verified.value,
    };
    tweetList.push(data);
    localStorage.setItem("TWEETS", JSON.stringify(tweetList));
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: "30rem",
          padding: 20,
        }}
      >
        <Form ref={form} onSubmit={onSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              required
              id="name"
              name="name"
              placeholder="Your Name here..."
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="username">UserName</Label>
            <Input
              required
              id="username"
              name="username"
              placeholder="Enter username here..."
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="time">Time</Label>
            <Input
              required
              id="time"
              name="time"
              placeholder="Enter time here in text"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="tweet">Tweet</Label>
            <Input required id="tweet" name="tweet" type="textarea" />
          </FormGroup>
          <FormGroup>
            <Label for="file">File</Label>
            <Input required id="file" name="file" type="file" />
          </FormGroup>
          <FormGroup check>
            <Input type="checkbox" name="verified" />
            <Label check>Verified</Label>
          </FormGroup>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default TweetForm;
