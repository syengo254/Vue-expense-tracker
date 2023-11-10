<template>
  <main class="container">

    <div class="header">
      <h2>Expense Tracker App</h2>
    </div>

    <div class="summary">

      <div class="total-bal">KES 100,000.90</div>

      <div class="breakdown">

        <div class="income">KES 250,000.55</div>
        <div class="expenses">KES 150,000.55</div>

      </div>

    </div>

    <div class="form">

      <div class="btn-types">

        <button type="button">Add Income</button>
        <button type="button">Add Expense</button>

      </div>

      <div class="input-form">

        <form>

          <div class="form-group">
            <label for="">Transaction name</label>
            <input type="text" name="" id="" placeholder="E.g. Salary, investment returns, Dining, etc..." />
          </div>

          <div class="form-group">
            <label for="">Transaction Amount</label>
            <input type="number" name="" id="" placeholder="00.00" />
          </div>

          <div class="form-group right">
            <button type="submit">Add</button>
          </div>

        </form>

      </div>

      <div class="list-container">

        <ul class="transactions-list">

          <li class="income-item">
            <div class="trans-name">Salary</div>
            <div class="trans-amount">KES 3,600,000.00</div>
            <div class="actions">
              <button title="Remove item">-</button>
            </div>
          </li>

          <li class="expense-item">
            <div class="trans-name">Rent</div>
            <div class="trans-amount">KES 36,000.00</div>
            <div class="actions">
              <button title="Remove item">-</button>
            </div>
          </li>

        </ul>

      </div>

    </div>

  </main>
</template>
