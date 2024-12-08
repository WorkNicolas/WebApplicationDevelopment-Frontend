/*
 * Web App: Ticket Master
 * Authors: Mendoza, Carl Nicolas – 301386435
            To, Cheuk Man Edmond– 301378748
            Dou, Fang – 301381266
            HUI, LIT TUNG – 301387861
*/

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
