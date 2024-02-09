import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
     // Array of color options
  const colorOptions = [
    { name: "Blue", backgroundColor: "blue" },
    { name: "Green", backgroundColor: "green" },
    { name: "Orange", backgroundColor: "Orange" },
    { name: "Purple", backgroundColor: "purple" },
  ];

  const handleColorChange = (color) => {
    document.body.style.backgroundColor = color;
  };

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <div>
          {colorOptions.map((colorOption, index) => (
            <button
              key={index}
              onClick={() => handleColorChange(colorOption.backgroundColor)}
              className="btn mx-1"
              style={{
                backgroundColor: colorOption.backgroundColor,
                color: "white",
              }}
            >
              {colorOption.name}
            </button>
          ))}
        </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li> 
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">{props.aboutText}</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button cla
                        ssName="btn btn-primary" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    // aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    // aboutText: 'About'
  };