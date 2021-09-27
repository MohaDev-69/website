import { Github, Reddit, Twitter } from '@styled-icons/simple-icons'

function Footer() {
    return (
        <footer className="footer animate__animated animate__slideInUp">
            <div className="socials">
                <a href="https://github.com/Itchat-app">
                    <Github />
                </a>
                <a href="/soon">
                    <Reddit />
                </a>
                <a href="/soon">
                    <Twitter />
                </a>
            </div>

            <div className="links">
                <div className="column">
                    <span>Developers</span>
                    <a href="/docs">Documentation</a>
                    <a href="/contribute">Contribute</a>
                </div>

                <div className="column">
                    <span>Team</span>
                    <a href="/about">About us</a>
                    <a href="mailto:support@itchat.world">Email</a>
                </div>

                <div className="column">
                    <span>Lagels</span>
                    <a href="/tos">Terms of service</a>
                    <a href="/privacy">Privacy policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
