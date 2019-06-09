import ILogging from "typings/ILogging";

export default class RemoteLoggingService implements ILogging {
  async notify(reason: String): Promise<void> {
    if (Math.random() <= 0.3333) {
      throw Error('communication error');
    }
    console.log(`Remote logging: ${reason}`)
  }
}