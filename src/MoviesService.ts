import Movie from "./model/Movie";
import ILogging from "typings/ILogging";
import IResource from "typings/IResource";
import MoviesDB from "./resources/MoviesDB";
import RemoteLoggingService from "./resources/RemoteLoggingService";

export default class MoviesService {
  private db: IResource;
  private logger: ILogging;

  constructor() {
    this.db = new MoviesDB();
    this.logger = new RemoteLoggingService();
  }

  async create(movie: Movie): Promise<Movie> {
    await this.logger.notify('movie creation request');
    await this.db.create(movie);
    await this.logger.notify('new movie stored');
    return movie;
  }

  async findMany(): Promise<Movie[]> {
    await this.logger.notify('movie find many request');
    return this.db.findMany();
  }

  async findByTitle(title: String): Promise<Movie> {
    await this.logger.notify('movie find by title request');
    return (await this.db.findMany()).find(movie => movie.name === title);
  }

  async findAllSortedByRating(order: SortOrder = SortOrder.DESC): Promise<Movie[]> {
    await this.logger.notify('find all with rating sorted request');

    const movies = await this.db.findMany();
    switch (order) {
      case SortOrder.ASC:
        return movies.sort((m1, m2) => m1.rating - m2.rating);
      case SortOrder.DESC:
        return movies.sort((m1, m2) => m2.rating - m1.rating);
    }
  }
}

export enum SortOrder {
  ASC, DESC
}