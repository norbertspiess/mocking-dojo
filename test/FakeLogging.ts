import ILogging from "../src/typings/ILogging";

export default class FakeLogging implements ILogging {
  async notify(msg: String): Promise<void> {
    console.log(`fake logging: ${msg}`);
  }
}