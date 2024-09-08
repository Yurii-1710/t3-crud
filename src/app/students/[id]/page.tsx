import React from 'react'

const Student = ({ params }: { params: { id: string } }) => {
  return (
    <div>Student {params.id}</div>
  )
}

export default Student