import { FunctionComponent } from "react"
import { Transaction } from "../../utils/types"

export type SetTransactionApprovalFunction = (params: {
  transactionId: string
  newValue: boolean
}) => Promise<void>

type TransactionsProps = {
  transactions: Transaction[] | null
  approvedTransactions: Record<string, boolean>
  onSetApproved: (transactionId: string, approved: boolean) => void
}

type TransactionPaneProps = {
  transaction: Transaction
  loading: boolean
  approved: boolean
  onSetApproved: (transactionId: string, approved: boolean) => void
}

export type TransactionsComponent = FunctionComponent<TransactionsProps>
export type TransactionPaneComponent = FunctionComponent<TransactionPaneProps>
