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

const ExportMarketplace = () => {
  return (
    <Container>
      <SizeContainer>
        <TitlePages text="Caixa Preta Supermercado" />
        <BackButton path="/menuMarketplace" />
        <Title>
          Exportar rodada <span>1</span>
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
        
        <ButtonRequest>Exportar</ButtonRequest>
        </MainContainer>
      </SizeContainer>
    </Container>
  );
};
export default ExportMarketplace;
