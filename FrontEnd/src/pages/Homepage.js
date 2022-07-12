import React, { useState } from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import SalesStatistics from "../components/partials/default/SalesStatistics";
import OrderStatistics from "../components/partials/default/OrderStatistics";
import StoreStatistics from "../components/partials/default/StoreStatistics";
import RecentOrders from "../components/partials/default/recent-orders/RecentOrders";
import TopProducts from "../components/partials/default/top-products/TopProducts";
import DataCard from "../components/partials/default/DataCard";
import { DropdownToggle, DropdownMenu, UncontrolledDropdown, DropdownItem } from "reactstrap";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Button,
  Row,
  Col,
  BlockBetween,
  BlockDes,
  BlockContent,
} from "../components/Component";
import {
  DefaultCustomerChart,
  DefaultOrderChart,
  DefaultRevenueChart,
  DefaultVisitorChart,
} from "../components/partials/charts/default/DefaultCharts";
import PageContainer from "../layout/page-container/PageContainer";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [sm, updateSm] = useState(false);
  return (
    <React.Fragment>
      <Content>
        <Block>
          <PageContainer>
            <Block className="nk-block-middle wide-md mx-auto">
              <BlockContent className="nk-error-ld text-center">
                {/* <img className="nk-error-gfx" src={ErrorImage} alt="error" /> */}
                <div className="wide-xs mx-auto">
                  <h3 className="nk-error-title">Bienvenido UX Detected</h3>
                  <p className="nk-error-text">
                    este sitio esta destinado a obtener información sobre experiencia de usuario mediante detección facial analizando las emociones
                  </p>
                  <Link to={`${process.env.PUBLIC_URL}/DatosPersonales`}>
                    <Button color="primary" size="lg" className="mt-2">
                      Comenzar
                    </Button>
                  </Link>
                </div>
              </BlockContent>
            </Block>
          </PageContainer>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default Homepage;
