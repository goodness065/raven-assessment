import { Link } from "react-router-dom";

import logo from "../../assets/icons/logo.png";
import signout from "../../assets/icons/logout.svg";
import globe from "../../assets/icons/globe.svg";
import menu from "../../assets/icons/menu.svg";

//style
import "./styles/navbar.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Dropdown } from "antd";
import { useAuthProviderContext } from "../../providers/auth-provider/AuthProvider";

const items = [
  {
    label: <Link to="/exchange">Exchange</Link>,
    key: "0",
  },
  {
    label: <p>Wallets</p>,
    key: "1",
  },
  {
    label: <p>Roqqu Hub</p>,
    key: "3",
  },
  {
    label: <Link to="/">Log out </Link>,
    key: "4",
  },
];

const Navbar = () => {
  const { email, gravatarHash } = useAuthProviderContext();

  return (
    <nav className="navbar-container">
      <div>
        <img src={logo} alt="logo" className="navbar-container__logo" />
        <ul>
          <li className="navbar-container__selected">Exchange</li>
          <li>Wallets</li>
          <li>Roqqu Hub</li>
        </ul>
      </div>
      <div className="navbar-container-right">
        <div className="navbar-container-right-mobile">
          <div className="navbar-container-right-gravaterCon">
            <img
              src={`https://www.gravatar.com/avatar/${gravatarHash}`}
              alt=""
            />
          </div>
        </div>
        <div className="navbar-container-right-des navbar-container-right-des--colored">
          <div className="navbar-container-right-gravaterCon">
            <img
              src={`https://www.gravatar.com/avatar/${gravatarHash}`}
              alt=""
            />
          </div>
          <div>
            <p title={email}>{email}</p>
          </div>
          <MdKeyboardArrowRight className="candle-chart-container__nav__nav-list__arrow" />
        </div>
        <img src={globe} alt="" />
        <div className="navbar-container-right-mobile">
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            overlayClassName="navbar-container-dropdown-container"
          >
            <a onClick={(e) => e.preventDefault()}>
              <img src={menu} alt="" className="navbar-container-right-menu" />
            </a>
          </Dropdown>
        </div>
        <div className="navbar-container-right-des">
          <Link to="/">
            <img src={signout} alt="" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
