'use client'

import {
  Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"
import { api } from "@/trpc/react"


const Students = () => {

  const students = api.student.getAll.useQuery()

  return (
    <div className="flex items-center justify-center my-8 mx-8 bg-slate-300">
      <Table>
        <TableCaption>A list of students</TableCaption>
        <TableHeader >
          <TableRow className="flex flex-row items-center justify-between">
            <TableHead className="">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.data?.map(student => (
            <TableRow key={student.id} className="flex flex-row items-center justify-between">
              <TableCell className="">{student.id}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.email}</TableCell>
            </TableRow>
          ))}


        </TableBody>
      </Table>

    </div>
  )
}

export default Students