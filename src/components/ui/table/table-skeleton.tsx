import Skeleton from '@mui/material/Skeleton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
interface TableSkeletonProps {
  rows: number;
  columns: number;
  isCheckBox?: boolean;
}

export default function TableSkeleton({ rows, columns, isCheckBox = false }: TableSkeletonProps) {
  return (
    <TableBody>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {isCheckBox && (
            <TableCell padding='checkbox'>
              <Skeleton
                variant='rectangular'
                width={24}
                height={24}
              />
            </TableCell>
          )}
          {Array.from({ length: columns }).map((_, colIndex) => (
            <TableCell
              key={colIndex}
              sx={{ padding: 1 }}
            >
              <Skeleton
                variant='text'
                sx={{ fontSize: '1rem' }}
              />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}
