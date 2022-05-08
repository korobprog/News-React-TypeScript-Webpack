import { Grid } from '@mui/material'
import { useNewsApiQuery } from '../../redux'
import Card from '../NewsCard/Card'
import CircularProgress from '@mui/material/CircularProgress'

function News() {
  const { data } = useNewsApiQuery('getNews')
  return (
    <Grid container sx={{ width: '100%' }}>
      {data ? (
        data.map((news) => <Card data={news} key={news.url} />)
      ) : (
        <CircularProgress color="secondary" />
      )}
    </Grid>
  )
}

export default News
