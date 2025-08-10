import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TableHeader, { type HeadCell } from '../../../components/ui/table/table-header';
import TableBodyRow from '../../../components/ui/table/table-body-row';
import { statusColor } from '../../../utils/functions/status-color-utils';
import CustomMenu from '../../../components/ui/menu';
import { getMuiIcon } from '../../../utils/functions/mui-icon';
import { useUserListMutation } from '../../../features/user/user-api';
import type { UserResponseType } from '../../../types/response/user';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store';

export interface Data {
  _id?: string | null;
  name: React.ReactNode;
  email: React.ReactNode;
  role: React.ReactNode; // if you pass JSX for role
  gender?: React.ReactNode; // if you pass JSX for
  mobile?: React.ReactNode; // if you pass JSX for
  status?: React.ReactNode; // if you pass JSX for status
  actions: React.ReactNode;
}

function createData({
  _id,
  name,
  email,
  employeeId,
  role,
  mobile,
  gender,
  status = 'active',
}: UserResponseType): Data {
  return {
    _id,
    name: (
      <Stack
        direction='row'
        alignItems={'center'}
        spacing={1}
      >
        <Avatar
          sx={{ width: 30, height: 30 }}
          alt={name || 'User Avatar'}
          src='/static/images/avatar/1.jpg'
        />
        <Box>
          <Typography
            variant='body2'
            sx={{
              fontWeight: 600,
              letterSpacing: 0.1,
              color: 'text.light',
              textTransform: 'capitalize',
              '&:hover': { cursor: 'pointer', color: 'primary.main' },
            }}
          >
            {name}
          </Typography>
          <Typography
            variant='caption'
            sx={{ color: 'text.disabled', fontWeight: 400 }}
          >
            {' '}
            {employeeId}
          </Typography>
        </Box>
      </Stack>
    ),
    email: (
      <Typography
        variant='body2'
        sx={{ color: 'text.disabled' }}
      >
        {email || '-'}
      </Typography>
    ),
    role: (
      <Typography
        variant='body2'
        sx={{ color: 'text.disabled', textTransform: 'capitalize' }}
      >
        {role || '-'}
      </Typography>
    ),
    status: (
      <Chip
        label={status}
        sx={{
          background: (theme) => statusColor(theme, status).backgroundColor,
          color: (theme) => statusColor(theme, status).color,
          fontWeight: 500,
          textTransform: 'capitalize',
        }}
        size='small'
      />
    ),
    mobile: (
      <Typography
        variant='body2'
        sx={{ color: 'text.disabled', textTransform: 'capitalize' }}
      >
        {mobile || '-'}
      </Typography>
    ),
    gender: (
      <Typography
        variant='body2'
        sx={{ color: 'text.disabled', textTransform: 'capitalize' }}
      >
        {gender || '-'}
      </Typography>
    ),
    actions: (
      <CustomMenu
        options={[
          { icon: getMuiIcon('view'), label: 'View' },
          { icon: getMuiIcon('edit'), label: 'Edit' },
          { icon: getMuiIcon('delete'), label: 'Delete' },
        ]}
        onSelect={(option) => console.log(`Selected action: ${option} ${_id}`)}
      />
    ),
  };
}

export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Author' | 'Maintainer' | 'Subscriber';
  status: 'active' | 'inactive' | 'pending';
  mobile?: string;
  gender?: string;
  actions?: React.ReactNode; // if you pass JSX for actions
}

const headCells: readonly HeadCell<User>[] = [
  { id: 'name', label: 'Name', numeric: false, disablePadding: false },
  { id: 'email', label: 'Email', numeric: false, disablePadding: false },
  { id: 'role', label: 'Role', numeric: false, disablePadding: false },
  { id: 'mobile', label: 'Mobile', numeric: false, disablePadding: false },
  { id: 'gender', label: 'Gender', numeric: false, disablePadding: false },
  { id: 'status', label: 'Status', numeric: false, disablePadding: false },
  { id: 'actions', label: 'Actions', numeric: false, disablePadding: false },
];

export default function EnhancedTable() {
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { userList: userListArr } = useSelector((state: RootState) => state.user);

  const [userList] = useUserListMutation();
  console.log('userListArr', userListArr);

  const rows: Data[] = React.useMemo(() => {
    return userListArr.map((user) => createData(user));
  }, [userListArr]);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n: Data) => n._id);
      setSelected(newSelected as string[]);
      return;
    }
    setSelected([]);
  };

  React.useEffect(() => {
    userList({ username: 'admin', password: 'admin' }).unwrap();
  }, [userList]);

  const handleClick = (_: React.MouseEvent<unknown>, _id: string) => {
    const selectedIndex = selected.indexOf(_id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, _id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  //  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, padding: '0px' }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby='tableTitle'
          >
            <TableHeader
              onSelectAllClick={handleSelectAllClick}
              numSelected={selected.length}
              rowCount={rows.length}
              headCells={headCells}
            />
            <TableBodyRow
              visibleRows={rows}
              headCells={headCells}
              selected={selected}
              handleClick={handleClick}
            />
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
