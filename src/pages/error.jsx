import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError(); // Lấy thông tin lỗi từ React Router
  console.error(error);

  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>Oops!</h1>
      <h2 style={styles.errorTitle}>Đã xảy ra lỗi hoặc trang không tồn tại.</h2>
      <p style={styles.errorMessage}>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" style={styles.homeLink}>
        Quay về trang chủ
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  errorCode: {
    fontSize: '72px',
    color: '#ff4d4f',
    margin: '0 0 10px 0',
  },
  errorTitle: {
    fontSize: '24px',
    color: '#333333',
    margin: '0 0 10px 0',
  },
  errorMessage: {
    color: '#666666',
    fontSize: '16px',
    margin: '0 0 25px 0',
  },
  homeLink: {
    backgroundColor: '#3b97e8',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
  },
};

export default ErrorPage;