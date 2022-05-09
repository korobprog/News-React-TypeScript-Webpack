import { Grid } from '@mui/material'
import Card from '../NewsCard/Card'
import CircularProgress from '@mui/material/CircularProgress'
import { Article } from '../../redux'

interface Props {
  news?: Article[]
}

const News: React.FC<Props> = ({ news }) => {
  return (
    <Grid container sx={{ width: '100%' }}>
      {news ? (
        news.map((article) => <Card data={article} key={article.url} />)
      ) : (
        <CircularProgress color="secondary" />
      )}
    </Grid>
  )
}

export default News
