import { useState } from "react"

export default function NavBar({setCategory}){
  const [searchEle,setSearchEle]=useState("");
  function searchFun(){
    setCategory(searchEle);
    setSearchEle("")
  }
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark sticky-top" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link active" aria-current="page" onClick={()=>setCategory("general")} >Home</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("technology")} >Technology</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("health")} >Health</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("sports")} >Sports</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("business")} >Business</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("politics")} >Politics</div>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
              
            </ul>
            <div className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search....." aria-label="Search" value={searchEle} onInput={(e)=>setSearchEle(e.target.value)} />
              <button className="btn btn-outline-warning" onClick={()=>searchFun()} type="submit">Search</button>
            </div>
          </div>
        </div>
      </nav>
        </>
    )
}