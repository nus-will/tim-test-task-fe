export interface IContractors {
  contractors: IContractor[]
}

export interface IContractor {
  full_name: string
  day_rate: number
  available: boolean
  specialities: ISpecialties[]
  bgColor?: string
}

export interface ISpecialties {
  name: string
}
