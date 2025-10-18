import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Chip, Switch, Button } from '@mui/material';
import { useAppState } from '../../data/Store';

// Кастомная тема
const theme = createTheme({
  palette: {
    primary: {
      main: '#ec4899',
    },
    secondary: {
      main: '#a855f7',
    },
    error: {
      main: '#ef4444',
    },
  },
});

const MuiComponents: React.FC = () => {
  const { users, toggleUserStatus } = useAppState();

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Имя', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
    {
      field: 'role',
      headerName: 'Роль',
      width: 130,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={
            params.value === 'admin' ? 'error' : 
            params.value === 'moderator' ? 'secondary' : 'primary'
          }
          variant="outlined"
        />
      ),
    },
    {
      field: 'status',
      headerName: 'Статус',
      width: 130,
      renderCell: (params) => (
        <Switch 
          checked={params.value} 
          onChange={() => toggleUserStatus(params.row.id)}
          color="primary" 
        />
      ),
    },
    { field: 'department', headerName: 'Отдел', width: 150 },
    { field: 'joinDate', headerName: 'Дата регистрации', width: 150 },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">Material-UI Компоненты</h2>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Button variant="contained" color="primary" size="large">
            Primary Кнопка
          </Button>
          <Button variant="outlined" color="secondary" size="large">
            Secondary Кнопка
          </Button>
          <Button variant="contained" color="error" size="large">
            Danger Кнопка
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-inner">
          <DataGrid
            rows={users}
            columns={columns}
            autoHeight
            pageSizeOptions={[5, 10, 20]}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            sx={{
              border: 'none',
              '& .MuiDataGrid-cell:hover': {
                color: 'primary.main',
              },
            }}
          />
        </div>

        <div className="text-center text-pink-600 mt-4">
          <p>✨ Таблица пользователей с {users.length} записями</p>
          <p className="text-sm text-purple-600">
            Попробуйте переключить статус пользователя или добавить нового на вкладке Chakra UI!
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MuiComponents;