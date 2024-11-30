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
