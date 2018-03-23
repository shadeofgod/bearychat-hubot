export default function RTMLogger(clients) {
  const rtm = clients.rtm;
  const Events = clients.RTMClientEvents;

  rtm.on(Events.ONLINE, handleOnline);
  rtm.on(Events.OFFLINE, handleOffline);
  rtm.on(Events.EVENT, handleRTMEvent);
  rtm.on(Events.ERROR, handleError);

  function handleOnline(): void {
    console.log('====================================');
    console.log('ONLINE');
    console.log('====================================\n\n');
  }

  function handleOffline(): void {
    console.log('====================================');
    console.log('OFFLINE');
    console.log('====================================\n\n');
  }

  function handleRTMEvent(message: object): void {
    console.log('====================================');
    console.log('EVENT MESSAGE RECEIVED:');
    console.log('========');
    console.log(message);
    console.log('====================================\n\n');
  }

  function handleError(errorEvent: object): void {
    console.log('====================================');
    console.log('ERROR');
    console.log('=========');
    console.error(errorEvent);
    console.log('====================================\n\n');
  }
}
