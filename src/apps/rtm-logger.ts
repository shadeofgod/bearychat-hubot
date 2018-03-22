export default function RTMLogger(clients) {
  const rtm = clients.rtm;
  const Events = clients.RTMClientEvents;

  rtm.on(Events.ONLINE, handleOnline);
  rtm.on(Events.OFFLINE, handleOffline);
  rtm.on(Events.EVENT, handleRTMEvent);
  rtm.on(Events.ERROR, handleError);

  function handleOnline(): void {
    console.log('ONLINE');
  }

  function handleOffline(): void {
    console.log('OFFLINE');
  }

  function handleRTMEvent(message: object): void {
    console.log('MESSAGE');
    console.log(message);
  }

  function handleError(errorEvent: object): void {
    console.log('ERROR');
    console.error(errorEvent);
  }
}
