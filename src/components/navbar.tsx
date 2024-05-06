import { Link } from 'react-router-dom';
import epis from './img/logo-light-CyGpnn9t.svg';

interface NavbarProps {}

const Navbar = (props: NavbarProps) => (
  <>
    <div className=" navbar relative flex h-[150px]  w-full justify-center gap-[100px]">
      <div>
        <Link to="/" className=" relative right-[60px] cursor-pointer text-3xl">
          <img src={epis} alt="" />
        </Link>
      </div>
      <div className=" relative left-[100px] flex items-center justify-center gap-[80px]">
        <Link to="/rate" className="cursor-pointer text-xl">
          Web xizmatlar
        </Link>
        <Link to="/about" className="cursor-pointer text-xl">
          Nega biz?
        </Link>
        <Link to="/contact" className="boglanish cursor-pointer text-xl">
          Bog'lanish
        </Link>
        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
          <div className="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              UZ
            </button>
            <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <li>
                <a className="dropdown-item" href="RUS">
                  RU
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="Eng">
                  EN
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button type="button" className=" btn btn-outline-info w-[170px] rounded-[25px]">
          <Link to="/buyurtma">Buyurtma</Link>
        </button>
      </div>
    </div>
  </>
);

export default Navbar;
