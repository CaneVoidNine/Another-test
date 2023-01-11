import React from "react";
import { Col, Row } from "react-bootstrap";
import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";
import { useState } from "react";
const BlogList = (props) => {
  const [news, setNews] = useState([]);

  React.useEffect(() => {
    const fetching = async () => {
      let response = await fetch(
        "https://damiansapi-main-production.up.railway.app/books"
      );
      if (response.ok) {
        const fetchedData = await response.json();
        setNews(fetchedData);
      } else {
        console.log("error");
      }
    };
    fetching();
  }, []);

  console.log(news);
  const blogstoprint = news.booksArray;
  return (
    <Row>
      {blogstoprint.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
