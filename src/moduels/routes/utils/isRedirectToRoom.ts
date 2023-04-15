const isRedirectToRoom = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);

  const roomId = urlSearchParams.get("id");

  if (roomId) {
    localStorage.setItem("roomId", roomId);
  }
};

export default isRedirectToRoom;
