<script setup>
import { computed } from 'vue';
import useTransactions from '../composables/useTransactions';
import { formatNumber } from '../utils/functions';

const { getBalance, getTotalIncome, getTotalExpenses } = useTransactions();

</script>

<template>
  <div class="summary">

    <div class="total-bal">
      <span style="font-weight: 500;">Balance: </span>
      <span>{{ formatNumber(getBalance) }}</span>
    </div>

    <div class="breakdown">

      <div class="income">
        <span>Total income</span>
        {{ formatNumber(getTotalIncome) }}
      </div>

      <div class="divider vertical"></div>

      <div class="expenses">
        <span>Total expenses</span>
        {{ formatNumber(getTotalExpenses) }}
      </div>

    </div>

  </div>
</template>
