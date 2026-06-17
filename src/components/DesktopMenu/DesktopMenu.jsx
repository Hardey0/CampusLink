import './DesktopMenu.css';

export function DesktopMenu () {

  return (
    <>
      <div className="top-section">
        <ul className="menu">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Profile & Wallet</a></li>
        </ul>
      </div>

      <div className="search-section">
        <div className="dropdown">
          <button className="dropdown-btn">
            <span>Market Place</span>
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Electronics</a>
            <a href="#">Fashion</a>
            <a href="#">Groceries</a>
            <a href="#">Accessories</a>
          </div>
        </div>

        <div className="search-bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="What are you looking for?" />
            <button className="search-btn">Search</button>
        </div>

        <div className="dropdown">
          <button className="dropdown-btn light">
            <span>Select Category</span>
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Phones</a>
            <a href="#">Laptops</a>
            <a href="#">Health</a>
            <a href="#">Fashion</a>
          </div>
        </div>
      </div>

    </>

  );

}