export const formatTime = (time) => {
    if (!time) return "Không có hạn";
    const dateTime = new Date(time);
    const formattedDateTime = `
    ${dateTime.getDate()}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()} 
    ${dateTime.getHours()}:${dateTime.getMinutes()} 
    `;
    return formattedDateTime;
  };
