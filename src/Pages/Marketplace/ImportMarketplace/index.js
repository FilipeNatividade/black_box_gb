import BackButton from "../../../Components/BackButton";
import TitlePages from "../../../Components/TitlePages";
import {
  Container,
  SizeContainer,
  Title,
  MainContainer,
  ButtonRequest,
  InfoDiv,
} from "./style";

const ImportMarketplace = () => {
  return (
    <Container>
      <SizeContainer>
        <TitlePages text="Caixa Preta Supermercado" />
        <BackButton path="/menuMarketplace" />
        <Title>
          Importar rodada <span>1</span>
        </Title>
        <MainContainer>
        <InfoDiv>
          <div>OK</div>
          <div>N OK</div>
        </InfoDiv>
        <InfoDiv>
          <div>OK</div>
          <div>N OK</div>
        </InfoDiv>
        <InfoDiv>
          <div>OK</div>
          <div>N OK</div>
        </InfoDiv>
        <InfoDiv>
          <div>OK</div>
          <div>N OK</div>
        </InfoDiv>
        <InfoDiv>
          <div>OK</div>
          <div>N OK</div>
        </InfoDiv>
        <InfoDiv>
          <div>OK</div>
          <div>N OK</div>
        </InfoDiv>
        <InfoDiv>
          <div>OK</div>
          <div>N OK</div>
        </InfoDiv>
        
        <ButtonRequest>PROCESSAR</ButtonRequest>
        </MainContainer>
      </SizeContainer>
    </Container>
  );
};
export default ImportMarketplace;
