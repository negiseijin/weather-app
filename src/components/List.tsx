import * as React from 'react'

import ListItem from '@/components/ListItem'
import { User } from '@/interfaces/index'

type Props = {
  items: User[]
}

const List: React.VFC<Props> = React.memo(({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
))

export default List
