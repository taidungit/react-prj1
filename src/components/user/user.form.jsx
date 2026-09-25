import { useState } from 'react';
import { Input, message, Modal } from 'antd';
import { createUserAPI } from '../../services/api.services';
const UserForm = (props)=> {

  const {addNewUser, isModalOpen, setIsModalOpen} = props;
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setFormData({
      fullName: '',
      email: '',
      password: '',
      phone: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password) {
      message.error('Vui lòng điền đầy đủ các thông tin bắt buộc!');
      return;
    }

      setLoading(true);
      const response = await createUserAPI(
        formData.fullName,
        formData.email,
        formData.password,
        formData.phone
      );
      setLoading(false);

      if (response && response.statusCode && response.statusCode >= 400) {
        message.error(response.message || 'Đã có lỗi xảy ra!');
        return; 
      }
      addNewUser(response.data);
      message.success('Tạo người dùng thành công!');
      handleCancel();
  };

  return (
    <Modal
      title="Create User"
      open={isModalOpen}
      onOk={handleSubmit}
      onCancel={handleCancel}
      confirmLoading={loading}
      okText="CREATE"
      cancelText="Cancel"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500, color: '#333' }}>
            Full Name
          </label>
          <Input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Nguyen Van A"
            size="large"
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500, color: '#333' }}>
            Email
          </label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@domain.com"
            size="large"
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500, color: '#333' }}>
            Password
          </label>
          <Input.Password
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            size="large"
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500, color: '#333' }}>
            Phone number
          </label>
          <Input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="0912345678"
            size="large"
          />
        </div>
      </div>
    </Modal>
  );
}

export default UserForm;