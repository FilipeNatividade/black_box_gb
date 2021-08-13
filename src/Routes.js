import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ExportIndustry from "./Pages/Industry/ExportIndustry";
import RankingIndustry from "./Pages/Industry/RankingIndustry";
import ImportIndustry from "./Pages/Industry/ImportIndustry";
import MenuIndustry from "./Pages/Industry/MenuIndustry";
import SetupIndustry from "./Pages/Industry/SetupIndustry";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import HistoricIndustry from "./Pages/Industry/HistoricIndustry";
import ExportMarketplace from "./Pages/Marketplace/ExportMarketplace";
import RankingMarketplace from "./Pages/Marketplace/RankingMarketplace";
import ImportMarketplace from "./Pages/Marketplace/ImportMarketplace";
import MenuMarketplace from "./Pages/Marketplace/MenuMarketplace";
import SetupMarketplace from "./Pages/Marketplace/SetupMarketplace";
import HistoricMarketplace from "./Pages/Marketplace/HistoricMarketplace";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>

      <Route exact path="/menuIndustry">
        <MenuIndustry />
      </Route>
      <Route exact path="/setupIndustry">
        <SetupIndustry />
      </Route>
      <Route exact path="/importIndustry">
        <ImportIndustry />
      </Route>
      <Route exact path="/exportIndustry">
        <ExportIndustry />
      </Route>
      <Route exact path="/rankingIndustry">
        <RankingIndustry />
      </Route>
      <Route exact path="/historicIndustry">
        <HistoricIndustry />
      </Route>

      <Route exact path="/menuMarketplace">
        <MenuMarketplace />
      </Route>
      <Route exact path="/setupMarketplace">
        <SetupMarketplace />
      </Route>
      <Route exact path="/importMarketplace">
        <ImportMarketplace />
      </Route>
      <Route exact path="/exportMarketplace">
        <ExportMarketplace />
      </Route>
      <Route exact path="/rankingMarketplace">
        <RankingMarketplace />
      </Route>
      <Route exact path="/historicMarketplace">
        <HistoricMarketplace />
      </Route>
    </Switch>
  );
};
export default Routes;
