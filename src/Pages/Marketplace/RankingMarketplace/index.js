import BackButton from "../../../Components/BackButton";
import RankingTable from "../../../Components/RankinkTable";
import TitlePages from "../../../Components/TitlePages";
import {
  Container,
  SizeContainer,
  Header,
  MainContainer,
  AccumulatedHeader
} from "./style";

const RankingMarketplace = () => {
  //apagar obj para simular

  const rounds = [
    [
      {
        nome: "Pão de açucar",
        valor1: 2000000,
        valor2: 9710000,
      },
      {
        nome: "Carefour",
        valor1: 2000000,
        valor2: 8050000,
      },
      {
        nome: "Prezunic",
        valor1: 2000000,
        valor2: 5500000,
      },
    ],
    [
      {
        nome: "Pão de açucar",
        valor1: 2000000,
        valor2: 1000000,
      },
      {
        nome: "Carefour",
        valor1: 2000000,
        valor2: 2500000,
      },
      {
        nome: "Prezunic",
        valor1: 2000000,
        valor2: 4500000,
      },
    ],
  ];

  const accumulated = [
    [
      {
        nome: "Pão de açucar",
        valor1: 2000000,
        valor2: 9710000,
      },
      {
        nome: "Carefour",
        valor1: 2000000,
        valor2: 8050000,
      },
      {
        nome: "Prezunic",
        valor1: 2000000,
        valor2: 5500000,
      },
    ],
    [
      {
        nome: "Pão de açucar",
        valor1: 2000000,
        valor2: 1000000,
      },
      {
        nome: "Carefour",
        valor1: 2000000,
        valor2: 2500000,
      },
      {
        nome: "Prezunic",
        valor1: 2000000,
        valor2: 4500000,
      },
    ],
  ];

  return (
    <Container>
      <SizeContainer>
        <TitlePages text="Ranking Supermercado" />
        <Header>
          <BackButton path="/menuIndustry" />
          <p>
            Rodada <span>2</span>
          </p>
        </Header>
        <MainContainer>
          {rounds.map((item, index) => (
            <RankingTable key={index} content={item} />
          ))}
          <AccumulatedHeader>
            <h3>Acumulado</h3>
          </AccumulatedHeader>
          {accumulated.map((item, index) => (
            <RankingTable key={index} content={item} />
          ))}
        </MainContainer>
      </SizeContainer>
    </Container>
  );
};
export default RankingMarketplace;
