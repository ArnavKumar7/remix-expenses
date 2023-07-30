// expenses => shared layout for all expenses routes
import { Outlet } from "@remix-run/react";
import expensesStyles from "~/styles/expenses.css";
import ExpensesList from "~/components/expenses/ExpensesList";

export default function ExpensesLayout() {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "First Expense",
      amount: 12.99,
      date: new Date().toISOString(),
    },
    {
      id: "e2",
      title: "Second Expense",
      amount: 16.99,
      date: new Date().toISOString(),
    },
  ];
  return (
    <>
      <Outlet />
      <main>
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}
