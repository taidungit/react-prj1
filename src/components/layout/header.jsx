import { NavLink } from 'react-router-dom'; // 1. Đổi Link thành NavLink
import './header.css';

const Header = () => {
    return (
        <header className="app-header">
            <nav className="nav-links">
                {/* Dùng NavLink thay cho Link */}
                <NavLink to="/" className="nav-item" end>Home</NavLink>
                <NavLink to="/users" className="nav-item">User</NavLink>
                <NavLink to="/products" className="nav-item">Product</NavLink>
            </nav>
        </header>
    );
};

export default Header;