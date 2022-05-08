import Box from '@mui/material/Box'
import BasicDateRangePicker from '../components/NewsCard/Data/BasicDatePicker'
import Grid from '@mui/material/Grid'
import News from '../components/newsList/News'
import Container from '@mui/material/Container'

export default function BoxSx() {
  return (
    <Container
      sx={{
        mt: '1rem',
      }}
    >
      <Box sx={{ flexGrow: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{}}>
            <BasicDateRangePicker />
          </Grid>
          <Grid item xs={12}>
            <News />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
