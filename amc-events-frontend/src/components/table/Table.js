import React from 'react'
import MaterialTable from 'material-table'

export default function Table({guests}) {
  guests = guests.map(m => {
    return m.attributes
  });

    const columns = [
        {
            title: "Vorname",
            field: "Firstname"
        },
        {
            title: "Nachname",
            field: "Lastname"
        },
        {
            title: "Typ",
            field: "Option"
        }
    ]
  return (
    <MaterialTable title="Guest List" data={guests} columns={columns} options={{
      exportButton: true,
      draggable: false
    }} />
  )
}
