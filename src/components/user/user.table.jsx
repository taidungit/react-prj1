import { Table, Card, Button } from 'antd';

// Nhận thêm props setIsModalOpen từ component cha xuống
const UserTable = ({ dataUsers, setIsModalOpen }) => {
  
  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
  ];


  return (
    <Card 
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Users List</span>
          {/* Nút Create User nằm ở góc phải của Card */}
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            Create User
          </Button>
        </div>
      }
      style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', borderRadius: '12px' }}
    >
      <Table 
        dataSource={dataUsers} 
        columns={columns} 
        rowKey="_id" 
        pagination={{ pageSize: 5 }}
      />
    </Card>
  );
}

export default UserTable;