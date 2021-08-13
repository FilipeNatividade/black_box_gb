import CountUp from "react-countup";
import BackButton from "../../../Components/BackButton";
import TitlePages from "../../../Components/TitlePages";
import {
  Container,
  SizeContainer,
  Title,
  MainContainer,
  ButtonsDiv,
  ButtonCompanies,
  ButtonDeleteCompanies,
  ButtonAddCompanies,
  RoundsNBlackout,
  InfoMain,
  InfoDiv,
  ButtonRequest,
} from "./style";

const SetupMarketplace = () => {
  return (
    <Container>
      <SizeContainer>
        <TitlePages text="Setup Supermercados" />
        <BackButton path="/menuMarketplace" />
        <Title>
          Número de Supermercados <span>3</span>
        </Title>
        <MainContainer>
          <ButtonsDiv>
            <ButtonCompanies>Pão de açucar</ButtonCompanies>
            <ButtonDeleteCompanies>X</ButtonDeleteCompanies>
          </ButtonsDiv>
          <ButtonsDiv>
            <ButtonCompanies>Prezunic</ButtonCompanies>
            <ButtonDeleteCompanies>X</ButtonDeleteCompanies>
          </ButtonsDiv>
          <ButtonsDiv>
            <ButtonCompanies>Carrefour</ButtonCompanies>
            <ButtonDeleteCompanies>X</ButtonDeleteCompanies>
          </ButtonsDiv>
          <ButtonsDiv>
            <ButtonAddCompanies>+</ButtonAddCompanies>
          </ButtonsDiv>
          <RoundsNBlackout>
            <p>
              Rodada <span>12</span>
            </p>
          </RoundsNBlackout>

          <InfoMain>
            <InfoDiv>
              <p>Valor do aluguel</p>
              <span>
                <CountUp
                  end={150000}
                  prefix="D$ "
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              </span>
            </InfoDiv>
            <InfoDiv>
              <p>Capital inicial</p>
              <span>
                <CountUp
                  end={1000000}
                  prefix="D$ "
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              </span>
            </InfoDiv>
            <InfoDiv>
              <p>Número de rodadas</p>
              <span>
                <CountUp end={12} duration={0.5} />
              </span>
            </InfoDiv>
            <InfoDiv>
              <p>Taxa de juros aplicados</p>
              <span>
                <CountUp end={3} suffix="%" duration={0.5} />
              </span>
            </InfoDiv>
            <InfoDiv>
              <p>Taxa de juros e empréstimos</p>
              <span>
                <CountUp end={10} suffix="%" duration={0.5} />
              </span>
            </InfoDiv>
            <InfoDiv>
              <p>Valor de consultoria</p>
              <span>
                <CountUp
                  end={5000}
                  prefix="D$ "
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              </span>
            </InfoDiv>
          </InfoMain>

          <RoundsNBlackout>
            <p>
              <span>0</span> Apagão
            </p>
          </RoundsNBlackout>
          <ButtonRequest>EXPORTAR</ButtonRequest>
        </MainContainer>
      </SizeContainer>
    </Container>
  );
};
export default SetupMarketplace;
