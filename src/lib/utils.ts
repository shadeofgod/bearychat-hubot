export function analyseMention(text) {
  const regex = /@<=(=\S+?)=>/g;
  const result = [];
  let matched;
  while (matched = regex.exec(text)) {
    const [mentionString, userId] = matched;
    result.push({
      userId,
      mentionString,
      index: matched.index,
    });
  }
  return result;
}

export function createMentionString(userId) {
  return '@<=' + userId + '=>';
}

export function sendToChannel(rtm, { vchannel_id, channel_id, refer_key, text }) {
  return rtm.send({
    type: 'channel_message',
    text,
    channel_id,
    vchannel_id: vchannel_id || channel_id,
    refer_key,
  });
}

export function sendP2PMessage(rtm, { text, vchannel_id, refer_key }) {
  return rtm.send({
    type: 'message',
    text,
    vchannel_id,
    refer_key,
  });
}

export function sendChannelTyping(rtm, { channel_id, uid }) {
  return rtm.send({
    type: 'channel_typing',
    channel_id,
    uid,
  });
}

export function createChannelTyping(rtm, { channel_id, uid }) {
  return () => {
    return sendChannelTyping(rtm, { channel_id, uid });
  };
}

export function createReplyWithTyping(rtm, { vchannel_id, channel_id, refer_key, uid }) {
  return (text: string) => {
    sendChannelTyping(rtm, { channel_id, uid });
    return sendToChannel(rtm, {
      text,
      vchannel_id,
      channel_id,
      refer_key,
    });
  };
}

export function createP2PReply(rtm, { vchannel_id, refer_key, uid, to_uid }) {
  return (text: string) => {
    return sendP2PMessage(rtm, {
      text,
      vchannel_id,
      refer_key,
    });
  };
}
