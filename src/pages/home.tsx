import Box from '@mui/material/Box'
import RecipeReviewCard from '../components/Card/Card'
import BasicDateRangePicker from '../components/Transfer/Transfer'
import Grid from '@mui/material/Grid'

export default function BoxSx() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={4}>
          <BasicDateRangePicker />
        </Grid>
        <Grid item xs={8}>
          <RecipeReviewCard />
        </Grid>
      </Grid>
    </Box>
  )
}
