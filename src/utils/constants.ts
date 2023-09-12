import { ITabs } from "../types/ITabs"

export enum ApiMethod{
  POST = 'post',
  PUT = 'put',
  GET = 'get',
  DELETE = 'delete'
}

export const queryKeys = {
  GET_DEMO_API: 'GET_DEMO_API'
}

export const Tabs:ITabs []= [
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
