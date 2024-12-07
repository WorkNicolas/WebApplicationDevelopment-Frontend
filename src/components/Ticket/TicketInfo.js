import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentBox from "./CommentBox";
import Avatar from "./Avatar";
import { getTicket } from "../../datasource/api-ticket";
import { getTicketIteration } from "../../datasource/api-ticketiteration";
import { getUsername, getUserId } from "../auth/auth-helper";

const TicketInfo = () => {
  const { id } = useParams();
  const [ticketIteration, setTicketIteration] = useState("");
  const [newComment, setNewComment] = useState("");
  const [ticket, setTicket] = useState(null); // Set initial state to null
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch ticket details when the component is mounted
  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const data = await getTicket(id);
        setTicket(data);  // Set the ticket state with fetched data
        setLoading(false);  // Set loading state to false when data is fetched
      } catch (err) {
        setError("Failed to load ticket");
        setLoading(false);  // Ensure loading state is false even on error
      }
    };

    fetchTicket();
  }, [id]);

  // Log ticket after it has been set
  useEffect(() => {
    if (ticket && ticket.length > 0) {
      const ticketData = ticket[0]; // Access the first item in the array
      const { description, priority, userId, status, resolution, recordNumber, createdAt, updatedAt } = ticketData;

      console.log(description, priority, status, resolution, recordNumber, createdAt, updatedAt);
      console.log("Description: " + description);
      console.log("Priority: " + priority);
      console.log("Status: " + status);
      console.log("Resolution: " + resolution);
      console.log("Record Number: " + recordNumber);
      console.log("Created At: " + createdAt);
      console.log("Updated At: " + updatedAt);
    }
  }, [ticket]);
  
  
  // Access ticket data outside the useEffect
  const ticketDescription = ticket ? ticket[0]?.description : null;  // Access description from the first ticket
  const ticketPriority = ticket ? ticket[0]?.priority : null;
  const ticketStatus = ticket ? ticket[0]?.status : null;
  const ticketResolution = ticket ? ticket[0]?.resolution : null;
  const ticketRecordNumber = ticket ? ticket[0]?.recordNumber : null;
  const ticketCreatedAt = ticket ? ticket[0]?.createdAt : null;
  const ticketUpdatedAt = ticket ? ticket[0]?.updatedAt : null;

  // Early return if ticket is not loaded yet
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="my-3 mx-3">
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column">
          <span>Number:</span>
          <span>{ticketRecordNumber}</span>
        </div>
        <div className="d-flex gap-4">
          <div className="d-flex flex-column">
            <span>Created:</span>
            <span>{ticketUpdatedAt}</span>
          </div>
          <div className="d-flex flex-column">
            <span>Status:</span>
            <span>{ticketStatus}</span>
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
            <span>{ticket?.userId}</span> {/* Access userId */}
          </div>
          <div className="d-flex flex-column">
            <span className="h6 text-muted">{"Priority"}</span>
            <span>{ticketPriority}</span> {/* Access priority */}
          </div>
        </div>
      </div>

      <div className="d-flex flex-column mt-5 border">
        <span className="p-3 border-bottom bg-light text-md h4">
          {"Iterations"}
        </span>
        <div className="p-3 d-flex gap-4 w-100 mb-4 ">
          <Avatar username={"Stephen"} />
          <input
            type="text"
            placeholder="Post iteration"
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
