import { Link } from "react-router-dom";

export function Navbar() {


  return (

    <nav className=" navbar navbar-expand-md bg-dark navbar-dark">
      <div className="container">
        <Link to={"/students"} className=" text-white navbar-brand">
          {/* <i class="me-2 fa-solid fa-graduation-cap"></i> */}
          <img src="data:image/jpeg;base64,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" alt="Avinash" style={{width:"11rem"}}/>
          </Link>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mynav">
          <span className="navbar-toggler-icon"></span>
        </button>



        <div className="collapse navbar-collapse " id="mynav">
          <ul className="navbar-nav ms-auto ">
          <li className="nav-item active "><Link to={"/"} className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to={"/books"} className="nav-link">Books</Link></li>
            <li className="nav-item  "><Link to={"/addbooks"} className="nav-link">AddBooks</Link></li>
            <li className="nav-item "><Link to={"/books/take"} className="nav-link">Return Books</Link> </li>

          </ul>
        </div>
      </div>
    </nav>

  );
}