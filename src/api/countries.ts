import axios from 'axios';

export type CountriesMap = Record<string, string>;

export async function axiosCountries(): Promise<CountriesMap> {
// Axios — это популярная библиотека для выполнения HTTP-запросов в JavaScript/TypeScript.
// Используется в React, Node.js, Vue, Angular
  const res = await axios.get('/countries.json');
  return res.data;
}
