import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { CompetitorList } from "./competitor/CompetitorList";
import { CompetitorCreate } from "./competitor/CompetitorCreate";
import { CompetitorEdit } from "./competitor/CompetitorEdit";
import { CompetitorShow } from "./competitor/CompetitorShow";
import { PerformanceReportList } from "./performanceReport/PerformanceReportList";
import { PerformanceReportCreate } from "./performanceReport/PerformanceReportCreate";
import { PerformanceReportEdit } from "./performanceReport/PerformanceReportEdit";
import { PerformanceReportShow } from "./performanceReport/PerformanceReportShow";
import { RepricingRuleList } from "./repricingRule/RepricingRuleList";
import { RepricingRuleCreate } from "./repricingRule/RepricingRuleCreate";
import { RepricingRuleEdit } from "./repricingRule/RepricingRuleEdit";
import { RepricingRuleShow } from "./repricingRule/RepricingRuleShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"RepricingToolService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Competitor"
          list={CompetitorList}
          edit={CompetitorEdit}
          create={CompetitorCreate}
          show={CompetitorShow}
        />
        <Resource
          name="PerformanceReport"
          list={PerformanceReportList}
          edit={PerformanceReportEdit}
          create={PerformanceReportCreate}
          show={PerformanceReportShow}
        />
        <Resource
          name="RepricingRule"
          list={RepricingRuleList}
          edit={RepricingRuleEdit}
          create={RepricingRuleCreate}
          show={RepricingRuleShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
