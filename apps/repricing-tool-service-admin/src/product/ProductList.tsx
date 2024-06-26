import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  DateField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="buyBoxStatus" source="buyBoxStatus" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="currentPrice" source="currentPrice" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="stockLevel" source="stockLevel" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
