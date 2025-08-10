import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

interface ReusableDialogProps {
  open: boolean;
  onClose: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

export default function CustomDialog({
  open,
  onClose,
  title,
  children,
  actions,
}: ReusableDialogProps) {
  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby='reusable-dialog-title'
      open={open}
    >
      <DialogTitle
        sx={{ m: 0, p: 2 }}
        id='reusable-dialog-title'
      >
        {title}
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 30,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </BootstrapDialog>
  );
}
