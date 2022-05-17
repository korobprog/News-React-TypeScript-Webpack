import { Container, Divider, Grid, Paper, Typography } from '@mui/material'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

const About = () => (
  <Container
    maxWidth="xs"
    sx={{
      mt: '1rem',
    }}
  >
    <Grid xs={12}>
      <Divider>НАШ АДРЕС</Divider>
      <Typography component="h6">
        ООО «Фогстрим» 680000, г. Хабаровск, ул. Пионерская 1 +7 (4212) 90-98-09
        forg@fogstream.ru
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Paper>
        <YMaps>
          <Map
            width={400}
            height={400}
            defaultState={{ center: [48.480229, 135.071917], zoom: 12 }}
          >
            <Placemark defaultGeometry={[48.463295, 135.084224]} />
          </Map>
        </YMaps>
      </Paper>
    </Grid>
  </Container>
)

export default About
