export default async function commander(clients, utils) {
  const rtm = clients.rtm;
  const http = clients.http;
  const Events = clients.RTMClientEvents;

  const me = await http.user.me();

  rtm.on(Events.EVENT, handleRTMEvent);

  function handleRTMEvent(message) {
    switch (message.type) {
      case 'message':
        handleP2PMessage(message);
        break;
      case 'channel_message':
      //   TODO handleChannelMessage(message);
        break;
      case 'update_user':
      //   TODO handleUpdateUser(message);
        break;
      default:
    }
  }

  function handleP2PMessage(message) {
    const reply = utils.createP2PReply(rtm, {
      refer_key: message.key,
      vchannel_id: message.vchannel_id,
    });

    if (message.uid !== me.id) {
      reply(message.text);
    }
  }
}
