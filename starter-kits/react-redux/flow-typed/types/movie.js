// @flow
declare module 'Movie-types' {
  declare type Movie = {
    score?: number,
    show: {
      id: number,
      name?: string,
      summary?: string,
      genres: Array<string>,
      image: {
        medium: string
      },
      rating: {
        average: number
      }
    }
  };

  declare type Movies = Array<Movie>;
}