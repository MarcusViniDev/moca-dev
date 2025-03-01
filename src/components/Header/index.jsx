import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { Container, Li, Menu  } from './styles'
import { useState } from 'react'

function Header() {
    const [changeBackground, setChangeBackground] = useState(false)

    window.onscroll = () => {
        if (window.pageYOffset >= 300) {
            setChangeBackground(true)
        } else { setChangeBackground (false)}
    }
    const { pathname } = useLocation ()
    return (
        <Container $changeBackground = {changeBackground}>
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