import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentBox from "./CommentBox";
import Avatar from "./Avatar";

const TicketInfo = () => {
  const { id } = useParams();
  const [newComment, setNewComment] = useState("");
  const [ticket, setTicket] = useState(null);
  const [comments, setComments] = useState([
    {
      username: "Stephen Hui",
      comment: "This is a comment",
      createdAt: "2021-01-01",
    },
    {
      username: "Stephen Hui",
      comment: "This is a comment",
      createdAt: "2021-01-01",
    },
    {
      username: "Stephen Hui",
      comment: "This is a comment",
      createdAt: "2021-01-01",
    },
  ]);

  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <div className="my-3 mx-3">
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column">
          <span>Number:</span>
          <span>{id}</span>
        </div>
        <div className="">
          <div className="d-flex gap-4">
            <div className="d-flex flex-column">
              <span>Created:</span>
              <span>{"6d ago"}</span>
            </div>
            <div className="d-flex flex-column">
              <span>Status:</span>
              <span>{"Closed"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column mt-3 border">
        <span className="p-3 border-bottom bg-light text-md h4">
          {"Description"}
        </span>
        <div className="p-3 d-flex gap-4">
          <div className="d-flex flex-column">
            <span className="h6 text-muted">{"Created by"}</span>
            <span>{"Stephen"}</span>
          </div>
          <div className="d-flex flex-column">
            <span className="h6 text-muted">{"Priority"}</span>
            <span>{"High"}</span>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column mt-5 border">
        <span className="p-3 border-bottom bg-light text-md h4">
          {"Comments"}
        </span>
        <div className="p-3 d-flex gap-4 w-100 mb-4 ">
          <Avatar username={"Stephen"} />
          <input
            type="text"
            placeholder="Leave a comment"
            className="w-75 p-2"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button className="btn btn-outline-secondary">Post</button>
        </div>
        <div className="p-3 d-flex flex-column gap-4 my-4">
          {comments.map((comment, index) => (
            <CommentBox
              key={index}
              username={comment.username}
              comment={comment.comment}
              createdAt={comment.createdAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketInfo;
