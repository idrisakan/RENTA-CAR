import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-width flex justify-between items-center px-6 py-4">
        <Link to="/">
          <img src="/bmw.png" alt="" width={50}/>
        </Link>
        <Button title='Kaydol'/>
      </nav>
    </header>
  );
};

export default Header;
