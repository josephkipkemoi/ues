import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./search.css"

const SearchComponent = () => {
    return (
        <div className="container p-3">
            <h2 className="text-white mt-4 text-center">Effortlessly find vetted online service providers</h2>
                <div className="search-bar shadow-sm">
                    <input className="form-control p-4 border-secondary bg-light mt-4 rounded-5" placeholder="Service"/>
                    <span className="search-bar-icon"><FontAwesomeIcon size="md" className="bg-light" icon={faSearch} /></span>
                </div>
        </div>
    )
}

export default SearchComponent