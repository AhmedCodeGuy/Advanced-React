import { Link } from 'next/link'
const Sell = props => {
  return (
    <div>
      <p>Sell!</p>
      <Link href='/home'>
        <a>Home!</a>
      </Link>
    </div>
  )
}

export default Sell
