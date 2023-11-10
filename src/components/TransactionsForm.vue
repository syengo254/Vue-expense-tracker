<script setup>
import { reactive, ref } from 'vue';
import useTransactions from '../composables/useTransactions';

const { addTransaction } = useTransactions();

const addingAs = ref('');

const newTransaction = reactive({
  name: '',
  amount: null,
})

const setAddingAs = (asType) => {
  addingAs.value = asType;
};

const handleSubmit = () => {
  if (newTransaction.name.length > 3 && newTransaction.amount > 0) {
    const added = addTransaction({
      type: addingAs.value,
      ...newTransaction
    });

    if (added) {
      handleCancleAdd();
    }
  }
};

function handleCancleAdd() {
  addingAs.value = '';

  // reset form bindings
  newTransaction.name = '';
  newTransaction.amount = null;
}

</script>

<template>
  <div class="form">

    <h4 style="text-align: center; margin-block: .5rem;">Add transactions</h4>

    <div v-if="!addingAs" class="btn-types">

      <button type="button" @click="setAddingAs('income')" class="btn income">Add Income</button>
      <button type="button" @click="setAddingAs('expense')" class="btn expense">Add Expense</button>

    </div>

    <div v-else class="input-form">

      <form @submit.prevent="handleSubmit">

        <h5>Transaction details</h5>

        <div class="form-group">
          <label for="">Expense name: </label>
          <input type="text" v-model="newTransaction.name"
            placeholder="E.g. Salary, investment returns, Dining, etc..." />
        </div>

        <div class="form-group">
          <label for="">Amount: </label>
          <input type="number" v-model="newTransaction.amount" placeholder="00.00" />
        </div>

        <div class="form-btns">
          <button type="reset" class="btn" @click="handleCancleAdd">Cancel</button>
          <button type="submit" class="btn">Add</button>
        </div>

      </form>

    </div>

  </div>
</template>
