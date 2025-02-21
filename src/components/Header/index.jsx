import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.gif'
import { Container, Li, Menu  } from './styles'

function Header() {
    console.log(window)
    const { pathname } = useLocation ()
    return (
        <Container>
            <img src={Logo} alt="Logo-Movies" />

            <Menu>
                <Li $isActive = {pathname === '/'}>
                    <Link to="/">Home</Link>
                </Li>
                <Li $isActive = {pathname.includes('Movie')}>
                    <Link to="/Movies">Filmes</Link>
                </Li>
                <Li $isActive = {pathname.includes('Series')}>
                    <Link to="/Series">Séries</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header