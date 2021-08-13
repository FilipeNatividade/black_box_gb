import MenuButton from "../../../Components/MenuButtons";
import Buttons from '../../../Components/buttons'
import BackButton from "../../../Components/BackButton";

import { Container, SizeContainer } from "./style";

const MenuIndustry = () => {

  return (
    <Container>
      <SizeContainer>
        <BackButton path="/home" />
        <MenuButton img='/images/big_factory.svg' parag='INDÚSTRIA' path='/menuIndustry'/>
        <Buttons title='Setup' path='/setupIndustry'/>
        <Buttons title='Importar' path='/importIndustry'/>
        <Buttons title='Exportar' path='/exportIndustry'/>
        <Buttons title='Ranking' path='/rankingIndustry'/>
        <Buttons title='Histórico' path='/historicIndustry'/>
      </SizeContainer>
    </Container>
  );
};
export default MenuIndustry;
