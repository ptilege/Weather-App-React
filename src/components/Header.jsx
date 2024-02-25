export default function Header() {
  return (
    <div>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img className="bi me-2" width="40" height="32" src="../../public/weather.png" alt="weather"></img>
            <span className="fs-4">Weather App</span>
          </a>

          <div className="d-flex align-items-center">
            <form className="w-100 me-3" role="search">
              <input type="search" className="form-control" placeholder="Search..." aria-label="Search"></input>
            </form>

            <div className="flex-shrink-0 dropdown">
              <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"></img>
              </a>
              <ul className="dropdown-menu text-small shadow">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
