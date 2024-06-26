import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";

export const RepricingRuleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="maximumPrice" source="maximumPrice" />
        <NumberInput label="minimumPrice" source="minimumPrice" />
        <ReferenceInput source="product.id" reference="Product" label="product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <TextInput label="ruleDescription" multiline source="ruleDescription" />
        <NumberInput label="targetProfitMargin" source="targetProfitMargin" />
      </SimpleForm>
    </Edit>
  );
};
