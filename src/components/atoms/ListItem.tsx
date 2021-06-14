import Link from 'next/link'
import React from 'react'

import { User } from '@/interfaces/index'

type Props = {
  data: User
}

const ListItem: React.VFC<Props> = React.memo(({ data }) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
))

export default ListItem
