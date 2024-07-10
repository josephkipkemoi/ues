import services from "./services.json"
import defaultImg from "../../logo001.png"
import "./service.css"

const ServiceComponent = () => {
    return (
        <div className="container">
            {services.services.map((s,i) => {
                const name = s.name
                return (
                    <div key={i} className="d-flex justify-content-start">
                        <button className="btn btn-outline-light m-1">{name}</button>
                    </div>
                )
            })}

            <div className="mt-5">
            {services.services.map((s,i) => {
                const name = s.name
                return (
                    <div key={i} className="card bg-secondary mb-3 shadow-sm">
                        <div className="mb-3">
                            <h3 className="card-header  text-light">{name}</h3>
                        </div>
                        <div className="card-body card-container m-3">
                            <img className="img-fluid m-1 mb-4" src={defaultImg} alt="service" />
                            <h6 className="text-light">{name}</h6>
                            <p className="text-light">
                                Description:
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>
                            <div>
                             <button className="btn btn-light">Inquire</button>
                            </div>
                        </div>
                  
                    </div>
                  
                )
            })}
            </div>
        </div>
    )
}

export default ServiceComponent