import {request } from 'graphql-request';
import { ApiProps } from '../types/IAPI';

const baseUrl = 'https://tim-test-task-57913b1d1965.herokuapp.com/graphql?';

export const getDemoApi = async ({sortBy = "full_name", orderBy ="asc", searchBy}: ApiProps) => {
  const query = `{
    contractors(_sort: "${sortBy}", _order: "${orderBy}", q: "${searchBy}") {
      full_name
      day_rate
      available
      specialities {
        name
      }
    }
  }`;

  try {
    const response = await request(baseUrl, query);
    return response
  } catch (error) {
    throw error;
  }
};

