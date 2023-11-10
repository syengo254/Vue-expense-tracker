<template>
  <main class="container">

    <div class="header">
      <h2>Expense Tracker App</h2>
    </div>

    <div class="summary">

      <div class="total-bal">
        <span style="font-weight: 500;">Balance: KES </span>
        <span>100,000.90</span>
      </div>

      <div class="breakdown">

        <div class="income">
          <span>Total income</span>
          KES 250,000.55
        </div>
        <div class="divider vertical"></div>
        <div class="expenses">
          <span>Total expenses</span>
          KES 150,000.55
        </div>

      </div>

    </div>

    <div class="form">

      <h4 style="text-align: center; margin-block: .5rem;">Add transactions</h4>

      <div class="btn-types">

        <button type="button" class="btn income">Add Income</button>
        <button type="button" class="btn expense">Add Expense</button>

      </div>

      <div class="input-form">

        <form>

          <h5>Transaction details</h5>

          <div class="form-group">
            <label for="">Expense name: </label>
            <input type="text" name="" id="" placeholder="E.g. Salary, investment returns, Dining, etc..." />
          </div>

          <div class="form-group">
            <label for="">Amount: </label>
            <input type="number" name="" id="" placeholder="00.00" />
          </div>

          <div>
            <button type="submit" class="btn">Add</button>
          </div>

        </form>

      </div>

      <div class="list-container">
        <h5 style="margin-block: .5rem; text-align: center;">Transactions list</h5>

        <ul>

          <li class="income-item">
            <div class="trans-name">1. Salary</div>
            <div class="trans-amount">KES 3,600,000.00</div>
            <div class="actions">
              <button title="Remove item">-</button>
            </div>
          </li>

          <li class="expense-item">
            <div class="trans-name">2. Rent</div>
            <div class="trans-amount">KES 36,000.00</div>
            <div class="actions">
              <button title="Remove item">-</button>
            </div>
          </li>
          <li class="income-item">
            <div class="trans-name">1. Salary</div>
            <div class="trans-amount">KES 3,600,000.00</div>
            <div class="actions">
              <button title="Remove item">-</button>
            </div>
          </li>

          <li class="expense-item">
            <div class="trans-name">2. Rent</div>
            <div class="trans-amount">KES 36,000.00</div>
            <div class="actions">
              <button title="Remove item">-</button>
            </div>
          </li>
          <li class="income-item">
            <div class="trans-name">1. Salary</div>
            <div class="trans-amount">KES 3,600,000.00</div>
            <div class="actions">
              <button title="Remove item">-</button>
            </div>
          </li>

          <li class="expense-item">
            <div class="trans-name">2. Rent</div>
            <div class="trans-amount">KES 36,000.00</div>
            <div class="actions">
              <button title="Remove item">-</button>
            </div>
          </li>
          <li class="income-item">
            <div class="trans-name">1. Salary</div>
            <div class="trans-amount">KES 3,600,000.00</div>
            <div class="actions">
              <button title="Remove item">-</button>
            </div>
          </li>

          <li class="expense-item">
            <div class="trans-name">2. Rent</div>
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
