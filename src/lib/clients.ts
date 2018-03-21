import { HTTPClient } from 'bearychat';
import * as RTMClient from 'bearychat-rtm-client';
import * as WebSocket from 'ws';
import { HUBOT_TOKEN } from '../token';

export const http = new HTTPClient(HUBOT_TOKEN);

export const rtm = new RTMClient({
  url: function () {
    return http.rtm.start()
      .then(function (data) {
        return data.ws_host;
      });
  },
  WebSocket: WebSocket
});

export const RTMClientEvents = RTMClient.RTMClientEvents;
export const RTMClientState = RTMClient.RTMClientState;
