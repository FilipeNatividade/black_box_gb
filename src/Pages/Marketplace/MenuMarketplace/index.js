import MenuButton from "../../../Components/MenuButtons";
import Buttons from '../../../Components/buttons'
import BackButton from "../../../Components/BackButton";

import { Container, SizeContainer } from "./style";

const MenuMarketplace = () => {

  return (
    <Container>
      <SizeContainer>
        <BackButton path="/home" />
        <MenuButton img='/images/marketplace_img.svg' parag='SUPERMERCADO' path='/menuMarketplace'/>
        <Buttons title='Setup' path='/setupMarketplace'/>
        <Buttons title='Importar' path='/importMarketplace'/>
        <Buttons title='Exportar' path='/exportMarketplace'/>
        <Buttons title='Ranking' path='/rankingMarketplace'/>
        <Buttons title='Histórico' path='/historicMarketplace'/>
      </SizeContainer>
    </Container>
  );
};
export default MenuMarketplace;
