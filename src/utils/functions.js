import { STORAGE_NAME } from "./constants";

export const formatNumber = (amount) => {
  return new Intl.NumberFormat(
    'en-KE',
    {
      style: "currency",
      currency: "KES",
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    }
  ).format(amount);
}

export const generateID = () => {
  return Math.floor(Math.random() * 1000000);
}

export const getTransactionsLS = () => {
  return JSON.parse(localStorage.getItem(STORAGE_NAME) || '[]');
};

export const saveTransactionsLS = (trans) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(trans));
};
