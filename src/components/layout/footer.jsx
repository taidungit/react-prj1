
import './footer.css'; // File CSS kèm theo bên dưới

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="footer-content">
                <p>&copy; 2026 Todo App. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#privacy" className="footer-link">Privacy Policy</a>
                    <a href="#terms" className="footer-link">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;