import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentBox from "./CommentBox";
import Avatar from "./Avatar";
import { getTicket } from "../../datasource/api-ticket";
import { create as createComment } from "../../datasource/api-ticketiteration";
import { getUsername } from "../auth/auth-helper";
import formatDate from "../../utils/date";

const TicketInfo = () => {
  const { id } = useParams();
  const username = getUsername();
  const [newComment, setNewComment] = useState("");
  const [ticket, setTicket] = useState();

  const submitComment = async (product) => {
    try {
      const response = await createComment(product);

      if (!response.success) {
        alert(response.message);
        return;
      }

      setNewComment("");

      getTicket(id).then((data) => {
        if (data) {
          console.log(data[0]);
          setTicket(data[0]);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTicket(id)
      .then((data) => {
        if (data) {
          console.log(data[0]);
          setTicket(data[0]);
        }
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  }, []);

  // Early return if ticket is not loaded yet
  if (!ticket) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-3 mx-3">
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column">
          <span>Number:</span>
          <span>{ticket?.recordNumber}</span>
        </div>
        <div className="">
          <div className="d-flex gap-4">
            <div className="d-flex flex-column">
              <span>Created:</span>
              <span>{formatDate(ticket?.createdAt)}</span>
            </div>
            <div className="d-flex flex-column">
              <span>Status:</span>
              <span>{ticket?.status}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column mt-3 border">
        <span className="p-3 border-bottom bg-light text-md h4">
          {ticket?.description}
        </span>
        <div className="p-3 d-flex gap-4">
          <div className="d-flex flex-column">
            <span className="h6 text-muted">{"Created by"}</span>
            <span>{ticket?.userDetails[0]?.username}</span>
          </div>
          <div className="d-flex flex-column">
            <span className="h6 text-muted">{"Priority"}</span>
            <span>{ticket?.priority}</span>
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
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() =>
              submitComment({
                ticketID: id,
                comment: newComment,
                username: username,
              })
            }
          >
            Post
          </button>
        </div>
        <div className="p-3 d-flex flex-column gap-4 my-4 flex-column-reverse">
          {ticket.iterations.map((comment, index) => (
            <CommentBox
              key={index}
              username={comment?.username}
              comment={comment?.comment}
              createdAt={formatDate(comment?.timestamp)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketInfo;
