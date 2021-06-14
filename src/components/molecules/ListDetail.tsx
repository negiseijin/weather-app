import React from 'react'

import { User } from '@/interfaces/index'

type Props = {
  item: User
}

const ListDetail: React.VFC<Props> = React.memo(({ item: user }) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
))

export default ListDetail
