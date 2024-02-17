exports.formatDuration = (timeInSeconds) => {
  if (typeof timeInSeconds !== "number" || isNaN(timeInSeconds)) {
    return "00:00";
  }

  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};
