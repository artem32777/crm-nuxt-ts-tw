import { EnumColumnStatus } from '~/types/deals.types'
import type { IColumn } from '~/components/kanban/kanban.types'

export const KANBAN_DATA: IColumn[] = [
  {
    id: EnumColumnStatus['todo'],
    name: 'Входящие',
    items: [],
  },
  {
    id: EnumColumnStatus['to-be-agreed'],
    name: 'Подтверждено',
    items: [],
  },
  {
    id: EnumColumnStatus['in-progress'],
    name: 'В производстве',
    items: [],
  },
  {
    id: EnumColumnStatus['produced'],
    name: 'Произведено',
    items: [],
  },  {
    id: EnumColumnStatus['done'],
    name: 'К отгрузке',
    items: [],
  },
]
