import * as React from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Container from '@mui/material/Container'

export default function BasicDatePicker() {
  const [value, setValue] = React.useState<Date | null>(null)

  return (
    <Container>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Поиск новости по дате"
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Container>
  )
}
