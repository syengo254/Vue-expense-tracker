import { computed, ref } from 'vue';
import { generateID, getTransactionsLS } from '../utils/functions';

const transactions = ref(getTransactionsLS());

/* [{
  id: generateID(),
  name: 'Salary',
  amount: 1200000,
  type: 'income',
}] */

const getters = {
  getTotalIncome: computed(() => {
    return transactions.value
      .filter(t => t.type === 'income')
      .reduce((acc, t) => acc + t.amount, 0);
  }),
  getTotalExpenses: computed(() => {
    return transactions.value
      .filter(t => t.type === 'expense')
      .reduce((acc, t) => acc + t.amount, 0);
  }),
  getBalance: computed(() => (getters.getTotalIncome.value - getters.getTotalExpenses.value)),
};

const setters = {
  addTransaction: (transaction) => {
    transactions.value.splice(0, 0, { ...transaction, id: generateID() });
    return true;
  },
  removeTransaction: (transId) => {
    transactions.value = transactions.value.filter(t => t.id !== transId);
  }
};

export default function () {

  return {
    transactions,
    ...getters,
    ...setters,
  }
}
