import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { FC } from 'react';
import { Transaction } from '../../data/types';

export interface BudgetTableProps {
  transactions: Transaction[];
}

const BudgetTable: FC<BudgetTableProps> = (props: BudgetTableProps) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Amount</TableCell>
          <TableCell>User Name</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Note</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{getBudgetTableRows(props.transactions)}</TableBody>
    </Table>
  );
};

const getBudgetTableRows = (transactions: Transaction[]) =>
  transactions.map(transaction => (
    <TableRow>
      <TableCell>{transaction.amount}</TableCell>
      <TableCell>{transaction.transactor.name}</TableCell>
      <TableCell>{transaction.category}</TableCell>
      <TableCell>{transaction.note}</TableCell>
    </TableRow>
  ));

export default BudgetTable;
