import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogAuthor from "../blog-author/BlogAuthor";

import "./styles.css";
const BlogItem = (props) => {
  const { title, cover, author, _id, img, price, category, asin } = props;
  return (
    <Link to={`books/${asin}`} className="blog-link">
      <Card className="blog-card">
        <Card.Img variant="top" src={img} className="blog-cover" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <p>{price}$</p>
          <p>{category}</p>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default BlogItem;
