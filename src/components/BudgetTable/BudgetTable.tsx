import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { SFC } from 'react';
import { Transaction } from '../../data/types';

export interface BudgetTableProps {
  transactions: Transaction[];
}

const BudgetTable: SFC<BudgetTableProps> = (props: BudgetTableProps) => {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Amount</TableCell>
            <TableCell>User Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{getBudgetTableRows(props.transactions)}</TableBody>
      </Table>
    </Paper>
  );
};

const getBudgetTableRows = (transactions: Transaction[]) =>
  transactions.map(transaction => (
    <TableRow key={transaction.id}>
      <TableCell>{transaction.amount}</TableCell>
      <TableCell>{transaction.transactor.name}</TableCell>
    </TableRow>
  ));

export default BudgetTable;
