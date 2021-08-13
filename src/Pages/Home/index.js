import { useHistory } from "react-router";
import MenuButton from "../../Components/MenuButtons";
import BackButton from "../../Components/BackButton";

import { Container, SizeContainer, } from "./style";

const Home = () => {
  const history = useHistory();

  return (
    <Container>
      <SizeContainer>
        <BackButton path="/"/>
        <MenuButton img='/images/big_factory.svg' parag='INDÚSTRIA' path='/menuIndustry'/>
        <MenuButton img='/images/marketplace_img.svg' parag='SUPERMERCADO' path='/menuMarketplace'/>
      </SizeContainer>
    </Container>
  );
};
export default Home;
