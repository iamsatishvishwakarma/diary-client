import type { ApiError } from '../types/api';

export const handleApiError = (error: ApiError) => {
  const status = error?.status ?? error?.originalStatus;
  const message = error?.data?.message || error?.error || error?.message || 'Something went wrong';

  switch (status) {
    case 400:
      // Bad request
      return { status, message: message || 'Bad Request' };

    case 401:
      // Unauthorized - maybe trigger logout
      return { status, message: message || 'Unauthorized. Please login again.' };

    case 403:
      // Forbidden
      return { status, message: message || 'Access denied.' };

    case 404:
      // Not found
      return { status, message: message || 'Resource not found.' };

    case 500:
      // Internal server error
      return { status, message: message || 'Internal Server Error' };

    default:
      return { status, message };
  }
};
