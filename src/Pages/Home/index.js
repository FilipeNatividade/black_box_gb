import { useHistory } from "react-router";
import MenuButton from "../../Components/MenuButtons";

import { Container, SizeContainer, BackButton } from "./style";

const Home = () => {
  const history = useHistory();

  return (
    <Container>
      <SizeContainer>
        <BackButton onClick={() => history.push("/")} />
        <MenuButton img='/images/big_factory.svg' parag='INDÚSTRIA' path='/menuIndustry'/>
        <MenuButton img='/images/marketplace_img.svg' parag='SUPERMERCADO' path='/menuMarketplace'/>
      </SizeContainer>
    </Container>
  );
};
export default Home;
