import React from "react";
import authors from "./data";
import AuthorCard from "./AuthorCard";

function AuthorList(props) {
  const authorrows = props.authors.map(author => (
    <AuthorCard item={author} key={author.first_name} />
  ));
  return (
    <div className="content col-10">
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{authorrows}</div>
      </div>
    </div>
  );
}

export default AuthorList;
