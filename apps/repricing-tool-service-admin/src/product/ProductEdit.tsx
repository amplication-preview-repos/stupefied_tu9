import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { CompetitorTitle } from "../competitor/CompetitorTitle";
import { PerformanceReportTitle } from "../performanceReport/PerformanceReportTitle";
import { RepricingRuleTitle } from "../repricingRule/RepricingRuleTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="buyBoxStatus" source="buyBoxStatus" />
        <ReferenceArrayInput
          source="competitors"
          reference="Competitor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompetitorTitle} />
        </ReferenceArrayInput>
        <NumberInput label="currentPrice" source="currentPrice" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="performanceReports"
          reference="PerformanceReport"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PerformanceReportTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="repricingRules"
          reference="RepricingRule"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RepricingRuleTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="stockLevel" source="stockLevel" />
      </SimpleForm>
    </Edit>
  );
};
