/*
 * Web App: Ticket Master
 * Authors: Mendoza, Carl Nicolas – 301386435
            To, Cheuk Man Edmond– 301378748
            Dou, Fang – 301381266
            HUI, LIT TUNG – 301387861
*/
const CommentBox = ({ username, comment, createdAt }) => {
  return (
    <div className="d-flex flex-column border p-3 bg-light gap-2 rounded-4">
      <div className="d-flex justify-content-between">
        <span className="h6 text-muted">{username} :</span>
        <span className="text-muted">{createdAt}</span>
      </div>
      <span>{comment}</span>
    </div>
  );
};

export default CommentBox;
