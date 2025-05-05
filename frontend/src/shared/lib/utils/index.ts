type ClassValue = string | number | boolean | undefined | null;

export const cn = (...classes: ClassValue[]) => {
  return classes.filter(Boolean).join(' ');
};

export const formatDate = (date: string | Date) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
};

export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const generateId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return String(error);
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatNumber = (num: number) => {
  return new Intl.NumberFormat('en-US').format(num);
};

export const debounce = <F extends (...args: unknown[]) => unknown>(
  func: F,
  wait: number
) => {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: Parameters<F>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
