import { useCallback } from "react"
import { TransactionPane } from "./TransactionPane"
import { TransactionsComponent } from "./types"

export const Transactions: TransactionsComponent = ({
  transactions,
  approvedTransactions,
  onSetApproved,
}) => {
  if (transactions === null) {
    return <div className="RampLoading--container">Loading...</div>
  }

  return (
    <div data-testid="transaction-container">
      {transactions.map((transaction) => (
        <TransactionPane
          key={transaction.id}
          transaction={transaction}
          loading={false} // Loading is handled in App.tsx
          approved={approvedTransactions[transaction.id] ?? transaction.approved} // Use state or fallback to initial data
          onSetApproved={onSetApproved}
        />
      ))}
    </div>
  )
}
