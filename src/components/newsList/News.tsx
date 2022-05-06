import { useNewsApiQuery } from '../../redux'
import Card from '../NewsCard/Card'

function News() {
  const { data } = useNewsApiQuery('getNews')
  console.log(data, 'контент')
  return (
    <div>
      {data
        ? data.map((news) => <Card data={news} key={news.url} />)
        : 'loading'}
    </div>
  )
}

export default News
