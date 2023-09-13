import { ITabs } from "../types/ITabs"

export enum ApiMethod {
  POST = 'post',
  PUT = 'put',
  GET = 'get',
  DELETE = 'delete'
}

export const queryKeys = {
  GET_CONTRACTORS: 'GET_CONTRACTORS'
}

export const Tabs: ITabs[] = [
  {
    tabName: 'Overview',
  },
  {
    tabName: 'Tasks',
  },
  {
    tabName: 'Projects',
  },
  {
    tabName: 'Payments',
  },
  {
    tabName: 'Users',
  },
]
