import { Link } from 'react-router-dom'

//Icons
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import logo from '../Assets/logo.svg'

export default function Footer(){
    return(
        <footer className="footer">
            <nav>
                <div className="footer__logo">
                    <Link to='/' title="Back to homepage"><img src={logo} alt="Site Logo" /></Link>
                    <p><span className='accent'>rttn.Mango</span> © 2023</p>
                </div>

                <div className="footer__links">
                    <p className='footer__label'>Links</p>
                    <ul role="list">
                        <li><Link to='/compress' title='Start Compressing'>Compress</Link></li>
                        <li><Link to='/convert' title='Convert your Assets'>Convert</Link></li>
                        <li><Link to='https://tinypng.com/' title='Start Compressing'>Tinify</Link></li>
                        <li><Link to='https://cloudmersive.com/' title='Convert your Assets'>Cloudmersive</Link></li>
                    </ul>
                </div>

                <div className="footer__socials">
                    <p className='footer__label'>Socials</p>
                    <div className="footer__socials--links">
                        <Link to="https://www.facebook.com/kiolma09" title="Facebook"><FaFacebookSquare/></Link>
                        <Link to="https://github.com/rttn-Mango" title="Github"><FaGithubSquare/></Link>
                        <Link to="https://www.linkedin.com/in/rttn-mango/" title="Linkedin"><FaLinkedin/></Link>
                    </div>
                </div>
            </nav>
        </footer>
    )
}