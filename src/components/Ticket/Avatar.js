const Avatar = ({ username }) => {
  return (
    <div
      className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center"
      style={{ width: "50px", height: "50px", fontSize: "20px" }}
    >
      {username.charAt(0)}
    </div>
  );
};

export default Avatar;
