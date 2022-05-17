import { useState } from 'react'
import BasicDateRangePicker from '../components/NewsCard/DataCalendar/BasicDatePicker'
import { Grid, Typography, Container, Divider } from '@mui/material'
import News from '../components/newsList/News'
import { useNewsApiQuery } from '../redux'
import { endOfDay, startOfDay } from 'date-fns'

const Home = () => {
  const [date, setDate] = useState<Date>(new Date())
  const [page, setPage] = useState<number>(1)
  const { data } = useNewsApiQuery({
    from: date ? startOfDay(date).toISOString() : undefined,
    to: date ? endOfDay(date).toISOString() : undefined,
    page: page ? page : undefined,
  })
  return (
    <Container>
      <Divider>
        <Typography variant="h6">новости</Typography>
      </Divider>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <BasicDateRangePicker date={date} setDate={setDate} />
        </Grid>
        <Grid
          xs={12}
          md={4}
          sx={{
            mt: '1rem',
          }}
        >
          <News news={data} page={page} setPage={setPage} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
