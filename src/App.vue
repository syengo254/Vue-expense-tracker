<script setup>
import { watch, watchEffect } from 'vue';

import Header from './components/Header.vue';
import Summary from './components/Summary.vue';
import TransactionsForm from './components/TransactionsForm.vue';
import TransactionsList from './components/TransactionsList.vue';

import useTransactions from './composables/useTransactions';
import { saveTransactionsLS } from './utils/functions';

const { transactions } = useTransactions();

watchEffect(() => {
  saveTransactionsLS(transactions.value);
});
</script>

<template>
  <main class="container">

    <Header />

    <Summary />

    <TransactionsForm />

    <TransactionsList />

  </main>
</template>
