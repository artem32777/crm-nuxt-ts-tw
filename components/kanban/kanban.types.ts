import type {EnumColumnStatus, ICustomer} from "~/types/deals.types";

export interface ICard {
  id: string
  name: string
  price: number
  $createdAt: string
  companyName?: string
  status: string
}

export interface IColumn {
  id: EnumColumnStatus
  name: string
  items: ICard[]
}
