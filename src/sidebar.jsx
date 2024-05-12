
import { useState } from "react";
import { Link } from "react-router-dom";

const sidebar = ()=>{
    const[show,setShow]=useState(false);
    return(
        <>
        <div className="navbar">
            <div className="container">
                <div className="row align-center">
                    <div className="col-2">
                        <Link to="/"><h1>Mathica</h1></Link>
                    </div>
                    <div className="col-10">
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/About">About</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>


        </>
    )
}
export default sidebar;