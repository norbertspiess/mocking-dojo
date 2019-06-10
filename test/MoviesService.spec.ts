import MoviesDB from '../src/resources/MoviesDB'
import MovieService from "../src/MovieService";
import Movie from "../src/model/Movie";
import RemoteLoggingService from '../src/resources/RemoteLoggingService';

/**
 * JEST Mock and match functions:
 * https://jestjs.io/docs/en/mock-function-api
 * https://jestjs.io/docs/en/expect.html
 */


const service: MovieService = new MovieService();

describe('Movies Service', () => {

  afterEach(() => jest.resetAllMocks());

  describe('create', () => {
    it('should call logging and database', async () => {
      // GIVEN
      jest.spyOn(RemoteLoggingService.prototype, 'notify');

      const dbCreate =
          jest.spyOn(MoviesDB.prototype, 'create');

      // WHEN
      await service.create(new Movie('Transformers (2007)', 7.1));

      // THEN
      expect(dbCreate).toHaveBeenCalled();
      expect(RemoteLoggingService.prototype.notify).toHaveBeenCalledTimes(2);
    });
  });

  describe('findAllByTitle should', () => {
    it('return empty array on no stored movies', async ()=> {
      // GIVEN

      // WHEN
      const movies = await service.findMany();

      // THEN
      expect(movies).toEqual([]);
    });
  });

  describe('findAllSortedByRating should', () => {
    it('not create anything on the database', async () => {
      await service.findAllSortedByRating();
      expect(jest.spyOn(service, 'create')).not.toHaveBeenCalled();
    });
  });

});
