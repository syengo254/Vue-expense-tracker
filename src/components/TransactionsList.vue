<script setup>
import { formatNumber } from '../utils/functions';

import useTransactions from '../composables/useTransactions';

const { transactions, removeTransaction } = useTransactions();

const handleRemove = (transId) => {
  if (window.confirm('Are you sure?')) {
    removeTransaction(transId);
  }
}
</script>

<template>
  <div class="list-container">
    <h5 style="margin-block: .5rem; text-align: center;">Transactions list</h5>

    <ul v-if="transactions.length" v-for="(trans, index) in transactions" :key="index + trans.id">

      <li :class="trans.type === 'income' ? 'income-item' : 'expense-item'">
        <div class="trans-name">{{ index + 1 }}. {{ trans.name }} :</div>
        <div class="trans-amount">{{ formatNumber(trans.amount) }}</div>
        <div class="actions">
          <button title="Remove item" @click="handleRemove(trans.id)">-</button>
        </div>
      </li>

      <!-- <li class="expense-item">
            <div class="trans-name">2. Rent</div>
            <div class="trans-amount">KES 36,000.00</div>
            <div class="actions">
              <button title="Remove item">-</button>
            </div>
          </li> -->

    </ul>

    <div v-else class="no-trans">You have no transactions</div>

  </div>
</template>
