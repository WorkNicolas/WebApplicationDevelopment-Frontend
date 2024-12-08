/*
 * Web App: Ticket Master
 * Authors: Mendoza, Carl Nicolas – 301386435
            To, Cheuk Man Edmond– 301378748
            Dou, Fang – 301381266
            HUI, LIT TUNG – 301387861
*/
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentBox from "./CommentBox";
import Avatar from "./Avatar";
import { getTicket } from "../../datasource/api-ticket";
import { create as createComment } from "../../datasource/api-ticketiteration";
import { getUsername, getRole } from "../auth/auth-helper";
import formatDate from "../../utils/date";
import { updateTicket } from "../../datasource/api-ticket";
import TicketResolution from "./TicketResolution";

const TicketInfo = () => {
  const { id } = useParams();
  const username = getUsername();
  const userRole = getRole();
  const [newComment, setNewComment] = useState("");
  const [ticket, setTicket] = useState();
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  const submitComment = async (product) => {
    try {
      const response = await createComment(product);

      if (!response.success) {
        alert(response.message);
        return;
      }

      setNewComment("");
      updateTicketInfo();
    } catch (err) {
      console.log(err);
    }
  };

  const updateTicketInfo = async () => {
    try {
      getTicket(id).then((data) => {
        if (data) {
          setTicket(data[0]);
          setStatus(data[0]?.status);
          setPriority(data[0]?.priority);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const updateToProgress = async () => {
    try {
      const response = await updateTicket(id, { status: "In Progress" });

      if (!response.success) {
        return;
      }

      updateTicketInfo();
    } catch (err) {
      console.log(err);
    }
  };

  const updateStatus = async (newStatus) => {
    try {
      const response = await updateTicket(id, { status: newStatus });

      if (!response.success) {
        return;
      }

      updateTicketInfo();
    } catch (err) {
      console.log(err);
    }
  };

  const updatePriority = async (newPriority) => {
    try {
      const response = await updateTicket(id, { priority: newPriority });

      if (!response.success) {
        return;
      }

      updateTicketInfo();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTicket(id)
      .then((data) => {
        if (data) {
          // success
          if (data[0].status === "NEW" && userRole === "admin") {
            // admin view the new ticket, update to in progress
            updateToProgress();
          } else {
            setTicket(data[0]);
            setStatus(data[0]?.status);
            setPriority(data[0]?.priority);
          }
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
      <div className="d-flex justify-content-between mt-4">
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
              <span>
                {userRole === "admin" ? (
                  <select
                    className="form-select"
                    value={status}
                    onChange={(e) => {
                      if (
                        window.confirm(
                          `Are you sure you want to change the status to ${e.target.value}?`
                        )
                      ) {
                        updateStatus(e.target.value);
                      }
                    }}
                  >
                    <option value="In Progress">In Progress</option>
                    <option value="Dispatched">Dispatched</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                ) : (
                  <span>{status}</span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column mt-3 border">
        <span className="p-3 border-bottom bg-light text-md h4">
          {ticket?.description}
        </span>
        <div className="p-3 d-flex gap-5">
          <div className="d-flex align-items-center gap-3">
            <span className="text-muted">{"Created by: "}</span>
            <span>{ticket?.userDetails[0]?.username}</span>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <span className="text-muted">{"Priority: "}</span>
            <span>
              <select
                className="form-select"
                value={priority}
                onChange={(e) => {
                  if (
                    window.confirm(
                      `Are you sure you want to change the priority to ${e.target.value}?`
                    )
                  ) {
                    updatePriority(e.target.value);
                  }
                }}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </span>
          </div>
        </div>
      </div>
      {(userRole === "admin" || ticket?.status === "Closed") && (
        <TicketResolution
          ticketID={id}
          resolution={ticket?.resolution}
          updateTicketInfo={updateTicketInfo}
        />
      )}
      <div className="d-flex flex-column mt-5 border">
        <span className="p-3 border-bottom bg-light text-md h4">
          {"Iterations"}
        </span>
        {ticket?.status !== "Closed" && (
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
        )}

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
