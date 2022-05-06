import Box from '@mui/material/Box'
import Card from '../components/NewsCard/Card'
import BasicDateRangePicker from '../components/Transfer/Transfer'
import Grid from '@mui/material/Grid'
import PopperComponent from '../components/Labels/PopperComponent'
import News from '../components/newsList/News'

export default function BoxSx() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={4}>
          <PopperComponent />
        </Grid>
        <Grid item xs={4}>
          <BasicDateRangePicker />
        </Grid>
        <Grid item xs={12}>
          <News />
        </Grid>
      </Grid>
    </Box>
  )
}
