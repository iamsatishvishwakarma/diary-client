import { alpha, type Theme } from '@mui/material/styles';

type StatusType =
  | 'active'
  | 'inactive'
  | 'pending'
  | 'error'
  | 'success'
  | 'warning'
  | 'info'
  | string;

export const statusColor = (theme: Theme, status: StatusType) => {
  let color: string;

  switch (status) {
    case 'active':
    case 'success':
      color = theme.palette.success.main;
      break;
    case 'inactive':
    case 'error':
      color = theme.palette.error.main;
      break;
    case 'pending':
    case 'warning':
      color = theme.palette.warning.main;
      break;
    case 'info':
      color = theme.palette.info.main;
      break;
    default:
      color = theme.palette.secondary.main;
  }

  return {
    backgroundColor: alpha(color, 0.1),
    color: color,
  };
};
