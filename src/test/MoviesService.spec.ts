import MoviesDB from '../resources/MoviesDB'
import MoviesService from "../resources/MoviesService";
import Movie from "../model/Movie";
import RemoteLoggingService from '../resources/RemoteLoggingService';

/**
 * JEST Mock and match functions:
 * https://jestjs.io/docs/en/mock-function-api
 * https://jestjs.io/docs/en/expect.html
 */


let service: MoviesService = new MoviesService();

describe('Movies Service', () => {

  describe('create', () => {
    it('should call logging and database', async () => {
      // GIVEN
      jest.spyOn(RemoteLoggingService.prototype, 'notify');
      // //  manipulate the spy / mock
      //     .mockImplementationOnce(async () => console.log('first logging call'))
      //     .mockImplementationOnce(async () => console.log('second logging call'));

      const dbCreate =
          // spy on and control a specific object
          jest.spyOn(MoviesDB.prototype, 'create');
      // .mockImplementationOnce(async (movie) => {
      //   console.log('mock db creation');
      //   return movie
      // });

      // WHEN
      await service.create(new Movie('Transformers (2007)', 7.1));

      // THEN
      // spy on concrete objects
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
      expect(jest.spyOn(MoviesDB.prototype, 'create')).not.toHaveBeenCalled();
      expect(jest.spyOn(service, 'create')).not.toHaveBeenCalled();
    });

    it('sort movies descending as default', async () => {

    });

    it('sort movies ascending, if specified', async () => {

    });
  });

});
