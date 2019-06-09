import IResource from "typings/IResource";
import Movie from "../model/Movie";

let movies: Movie[] = []

export default class MoviesDB implements IResource {

  async create(data: Movie) {
    await this.sleep(4000);
    movies.push(data);
    return data
  }

  async findMany() {
    await this.sleep(4000);
    return movies;
  }

  private sleep(ms): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}