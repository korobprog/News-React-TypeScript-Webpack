import { YMaps, Map, Placemark } from 'react-yandex-maps'

const About = () => (
  <YMaps>
    <Map defaultState={{ center: [48.480229, 135.071917], zoom: 12 }}>
      <Placemark defaultGeometry={[48.463295, 135.084224]} />
    </Map>
  </YMaps>
)

export default About
