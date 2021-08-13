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

const ExportIndustry = () => {
  return (
    <Container>
      <SizeContainer>
        <TitlePages text="Caixa Preta Indústria" />
        <BackButton path="/menuIndustry" />
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
export default ExportIndustry;
