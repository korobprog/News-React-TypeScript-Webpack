import { useState } from 'react'
import Box from '@mui/material/Box'
import BasicDateRangePicker from '../components/NewsCard/DataCalendar/BasicDatePicker'
import Grid from '@mui/material/Grid'
import News from '../components/newsList/News'
import Container from '@mui/material/Container'
import { useNewsApiQuery } from '../redux'
import { endOfDay, startOfDay } from 'date-fns'

const Home = () => {
  const [date, setDate] = useState<Date>()
  const { data } = useNewsApiQuery({
    from: date ? startOfDay(date).toISOString() : undefined,
    to: date ? endOfDay(date).toISOString() : undefined,
  })

  return (
    <Container
      sx={{
        mt: '1rem',
      }}
    >
      <Box sx={{ flexGrow: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <BasicDateRangePicker date={date} setDate={setDate} />
          </Grid>
          <Grid item xs={12}>
            <News news={data} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Home
