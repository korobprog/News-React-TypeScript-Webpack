import * as React from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Container from '@mui/material/Container'

interface Props {
  date?: Date
  setDate?: (date: Date) => void
}
const BasicDatePicker: React.FC<Props> = ({ date, setDate }) => {
  return (
    <Container>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Поиск новости по дате"
          value={date}
          onChange={(newValue) => {
            setDate(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Container>
  )
}

export default BasicDatePicker
