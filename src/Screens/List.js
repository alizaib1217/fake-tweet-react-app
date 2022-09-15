import { useEffect, useRef, useState } from "react";
import {
  Button,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Card,
} from "reactstrap";

const List = () => {
  const [tweetList, setTweetList] = useState([]);

  useEffect(() => {
    let items = localStorage.getItem("TWEETS");
    items = JSON.parse(items);
    setTweetList(items);
    console.log(items);
  }, []);

  return (
    <div
      style={{
        marginTop: 10,
      }}
    >
      {tweetList.map((item, ind) => {
        const { name, username, time, tweet, file, verified } = item;
        return (
          <Card
            key={ind}
            style={{
              width: "18rem",
              marginBottom: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img
                alt="Sample"
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                }}
                src={
                  "https://pbs.twimg.com/profile_images/769665488746061825/bx9DmYuW_400x400.jpg"
                }
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <img
                  alt="Sample"
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                  }}
                  src={
                    "https://pbs.twimg.com/profile_images/769665488746061825/bx9DmYuW_400x400.jpg"
                  }
                />
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
              </CardBody>
            </div>

            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card‘s content.
            </CardText>

            <CardBody>
              <Button>Button</Button>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default List;
