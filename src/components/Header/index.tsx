import { Link } from 'react-router-dom'
import { Container, Content } from './styles'

export function Header() {

  return (
    <Container>
      <Content>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span>Ran<p>dog</p></span>
        </Link>
        <Link to='/favourites'>
          <button type="button">
            Favourites
          </button>
        </Link>
      </Content>
    </Container>
  )
}