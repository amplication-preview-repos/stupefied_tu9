import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PRODUCT_TITLE_FIELD } from "./ProductTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="buyBoxStatus" source="buyBoxStatus" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="currentPrice" source="currentPrice" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="stockLevel" source="stockLevel" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Competitor"
          target="productId"
          label="Competitors"
        >
          <Datagrid rowClick="show">
            <TextField label="competitorPrice" source="competitorPrice" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="marketCondition" source="marketCondition" />
            <ReferenceField
              label="product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PerformanceReport"
          target="productId"
          label="PerformanceReports"
        >
          <Datagrid rowClick="show">
            <TextField label="competitorAnalysis" source="competitorAnalysis" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="pricingHistory" source="pricingHistory" />
            <ReferenceField
              label="product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="sales" source="sales" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RepricingRule"
          target="productId"
          label="RepricingRules"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="maximumPrice" source="maximumPrice" />
            <TextField label="minimumPrice" source="minimumPrice" />
            <ReferenceField
              label="product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ruleDescription" source="ruleDescription" />
            <TextField label="targetProfitMargin" source="targetProfitMargin" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
