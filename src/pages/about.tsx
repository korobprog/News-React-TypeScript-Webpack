import { Container, Grid, Paper } from '@mui/material'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

const About = () => (
  <Container>
    <Grid item xs={12}>
      <Paper>
        <YMaps>
          <Map defaultState={{ center: [48.480229, 135.071917], zoom: 12 }}>
            <Placemark defaultGeometry={[48.463295, 135.084224]} />
          </Map>
        </YMaps>
      </Paper>
    </Grid>
    <Grid xs={12}></Grid>
  </Container>
)

export default About
