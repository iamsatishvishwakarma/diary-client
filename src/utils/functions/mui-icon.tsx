import React from 'react';
import EditIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import type { SvgIconProps } from '@mui/material';

type IconKey = 'edit' | 'delete' | 'view' | 'more' | 'check' | 'close' | 'add';

export function getMuiIcon(name: IconKey, props?: SvgIconProps): React.ReactNode {
  const iconMap: Record<IconKey, React.ReactNode> = {
    edit: <EditIcon {...props} />,
    delete: <DeleteIcon {...props} />,
    view: <VisibilityIcon {...props} />,
    more: <MoreVertIcon {...props} />,
    check: <CheckIcon {...props} />,
    close: <CloseIcon {...props} />,
    add: <AddIcon {...props} />,
  };

  return iconMap[name] ?? null;
}
