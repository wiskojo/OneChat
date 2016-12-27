export const sendMessage = function(message)
{
  return {
    type: "SEND_MESSAGE",
    payload: message
  };
}
