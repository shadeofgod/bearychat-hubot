import { HTTPClient } from 'bearychat';
import * as RTMClient from 'bearychat-rtm-client';
import * as WebSocket from 'ws';
import { HUBOT_TOKEN } from '../token';

export const http: HTTPClient = new HTTPClient(HUBOT_TOKEN);

export const rtm: RTMClient = new RTMClient({
  url(): string {
    return http.rtm.start()
      .then((data) => data.ws_host);
  },
  WebSocket,
});

export const RTMClientEvents = RTMClient.RTMClientEvents;
export const RTMClientState = RTMClient.RTMClientState;
