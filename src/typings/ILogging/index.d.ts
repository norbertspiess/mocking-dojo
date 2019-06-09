export default interface ILogging {
  notify(msg: String): Promise<void>
}