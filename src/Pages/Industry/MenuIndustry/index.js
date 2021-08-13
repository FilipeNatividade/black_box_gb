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
        <Buttons title='Setup' path='/menuIndustry'/>
        <Buttons title='Importar caixa preta' path='/menuIndustry'/>
        <Buttons title='Export' path='/menuIndustry'/>
        <Buttons title='Ranking' path='/menuIndustry'/>
        <Buttons title='Histórico' path='/menuIndustry'/>
      </SizeContainer>
    </Container>
  );
};
export default MenuIndustry;
