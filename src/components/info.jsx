import foto from "../assets/lucas.jpg"

export default function Info() {
    return (
        <div className="info">
            <img src = {foto} alt="foto"/>
            <div className="info-name">
                <h1>Lucas Scianni</h1>
                <h3>Full Stack Developer</h3>
            </div>
            
            <div className="info-buttons">
                <button className="email-button">
                    <i className="fa-solid fa-envelope"></i>
                    <span>Email</span>
                </button>

                <button className="lkd-button">
                    <i className="fa-brands fa-linkedin"></i>
                    <span>LinkedIn</span>
                </button>
            </div>
            
            
        </div>
        
    )
}