import { useEffect, useState } from 'react';
import UserForm from '../components/user/user.form';
import UserTable from '../components/user/user.table';
import { getAllUsersAPI } from '../services/api.services';

function UserPage() {

  const [dataUsers, setDataUsers] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

    const addNewUser = (newUser) => {
    setDataUsers([newUser, ...dataUsers]);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const response = await getAllUsersAPI();
    setDataUsers(response.data);
  };
  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Tiêu đề trang */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>User Management</h1>
          <p style={{ color: '#666', fontSize: '14px', marginTop: '5px' }}>
            Thêm mới và quản lý danh sách tài khoản hệ thống
          </p>
        </div>

        {/* Khối Form ở trên */}
        <div style={{ marginBottom: '30px' }}>
          <UserForm addNewUser={addNewUser} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>

        {/* Khối Table ở ngay dưới */}
        <div>
          <UserTable dataUsers={dataUsers} setIsModalOpen={setIsModalOpen} />
        </div>

      </div>
    </div>
  );
}

export default UserPage;