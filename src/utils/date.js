const formatDate = (dateString) => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "";
  }

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-indexed
  const year = date.getFullYear();

  return `${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}, ${day}/${month}/${year}`;
};

export default formatDate;
