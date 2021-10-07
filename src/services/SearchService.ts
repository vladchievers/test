import axios, { AxiosResponse } from 'axios';

export interface ISearchService {
  getSearchData(params: { s: string }): Promise<AxiosResponse>;
}

class SearchService implements ISearchService {
  async getSearchData(params: { s: string }): Promise<AxiosResponse> {
    return axios.get('https://theaudiodb.com/api/v1/json/1/search.php', {
      params: {
        s: params.s
      },
    });
  }
}

export default new SearchService();
