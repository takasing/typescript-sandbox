import { EventEmitter } from 'events';

// https://gist.github.com/rsms/3744301784eb3af8ed80bc746bef5eeb
export type Events = 'ping' | 'change';
export type EventEmitterClient<T> = {
  emit(event: T, ...args: any[]): boolean;
};
// propsじゃないのでkeyofじゃない => stringに認識される
export class PingClient implements EventEmitterClient<Events> {
  emitter: EventEmitter;
  constructor() {
    this.emitter = new EventEmitter();
    this.emitter.on('ping', (args: string[]) =>
      args.forEach((a) => console.log(`pong ${a}!`))
    );
  }
  // stringじゃなくしたい
  emit(event: Events, ...args: any[]) {
    if (event !== 'ping') {
      return false;
    }
    this.emitter.emit(event, args);
    return true;
  }
}
