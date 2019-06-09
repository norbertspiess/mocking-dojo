import Movie from "../../model/Movie";

export default interface IResource {
  create(data: any): Promise<Movie>
  findMany(): Promise<Movie[]>
}