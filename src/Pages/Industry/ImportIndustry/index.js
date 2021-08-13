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

const ImportIndustry = () => {
  return (
    <Container>
      <SizeContainer>
        <TitlePages text="Caixa Preta Indústria" />
        <BackButton path="/menuIndustry" />
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
export default ImportIndustry;
