 import "./header.css"
 import Logo from "../../logo001.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faPhone } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    return (
        <header>
            <nav className="d-flex justify-content-between align-items-center p-3 mt-3">
                <div>
                    <a href="/" className="text-white">
                        <img src={Logo} className="img-fluid" alt="logo"/>
                    </a>
                    <button className="btn text-light">
                        <span className="service-span">Services</span>
                        <FontAwesomeIcon icon={faChevronDown} size="sm" />
                    </button>
                    <button className="btn text-light">
                        Shop
                    </button>
                </div>
                <div>
                    <a className="d-flex align-items-center text-white" href="/">
                        <FontAwesomeIcon size="sm" icon={faPhone} />
                       <span className="call-us-icon">Call Us</span> 
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header