import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../../assets/dummy-data/navLinks";
import "./sidebar.css";
import { getUserDetailsFromToken } from "../../utils/axiosConfig";

const Sidebar = () => {
  const userDetails = getUserDetailsFromToken();
  const userRoles = userDetails ? userDetails.roles[0] : [];
  console.log(userRoles);

  // Define which parts of the sidebar should be visible for each role
  const roleBasedVisibility = {
    ROLE_ADMIN: {
      showAdminLink: true,
    },
    ROLE_MODERATOR: {
      showModeratorLink: true,
    },
    ROLE_USER: {
      showModeratorLink: true,
    },
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2>
          <span>
            <i className="ri-taxi-line"></i>
          </span>{" "}
          VMS
        </h2>
      </div>

      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                {(userRoles.includes(item.role)) && (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__link" : "nav__link"
                    }
                  >
                    <span>
                    {item.icon}
                    </span>
                   
                  
                    {item.display}
                  </NavLink>
                )}
              </li>
            ))}

            


          </ul>
        </div>

        <div className="sidebar__bottom">
          <span>
            <i className="ri-logout-circle-r-line"></i> Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
