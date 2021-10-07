import axios, { AxiosResponse } from 'axios';

export interface IArtistService {
  getArtistData(params: { i: string }): Promise<AxiosResponse>;
  getAlbumsData(params: { i: string }): Promise<AxiosResponse>;
}

class ArtistService implements IArtistService {

  async getArtistData(params: { i: string }): Promise<AxiosResponse> {
    return axios.get('https://theaudiodb.com/api/v1/json/1/artist.php', {
      params: {
        i: params.i
      },
    });
  }

  async getAlbumsData(params: { i: string }): Promise<AxiosResponse> {
    return axios.get('https://theaudiodb.com/api/v1/json/1/album.php', {
      params: {
        i: params.i
      },
    });
  }
}

export default new ArtistService();
