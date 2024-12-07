import { useState } from "react";
import { updateTicket } from "../../datasource/api-ticket";

const TicketResolution = ({ resolution, ticketID, updateTicketInfo }) => {
  const [description, setDescription] = useState("");

  const handleSave = () => {
    try {
      let payload = {
        status: "Closed",
        resolution: description,
      };
      updateTicket(ticketID, payload).then((data) => {
        if (data && data.success) {
          updateTicketInfo();
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex flex-column mt-5 border">
      <span className="p-3 border-bottom bg-light text-md h4">
        Final Resolution
      </span>
      <div className="d-flex justify-content-center my-5">
        <textarea
          style={{ resize: "none" }}
          className="p-2"
          disabled={resolution ? true : false}
          value={resolution || description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      {!resolution && (
        <div className="d-flex justify-content-end px-5 pb-5">
          <button className="btn btn-secondary" onClick={() => handleSave()}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default TicketResolution;
