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

const RankingIndustry = () => {
  //apagar obj para simular

  const rounds = [
    [
      {
        nome: "Sadia",
        valor1: 2000000,
        valor2: 9710000,
      },
      {
        nome: "Perdigão",
        valor1: 2000000,
        valor2: 8050000,
      },
      {
        nome: "Rica",
        valor1: 2000000,
        valor2: 5500000,
      },
    ],
    [
      {
        nome: "Sadia",
        valor1: 2000000,
        valor2: 1000000,
      },
      {
        nome: "Perdigão",
        valor1: 2000000,
        valor2: 2500000,
      },
      {
        nome: "Rica",
        valor1: 2000000,
        valor2: 4500000,
      },
    ],
  ];

  const accumulated = [
    [
      {
        nome: "Sadia",
        valor1: 2000000,
        valor2: 9710000,
      },
      {
        nome: "Perdigão",
        valor1: 2000000,
        valor2: 8050000,
      },
      {
        nome: "Rica",
        valor1: 2000000,
        valor2: 5500000,
      },
    ],
    [
      {
        nome: "Sadia",
        valor1: 2000000,
        valor2: 1000000,
      },
      {
        nome: "Perdigão",
        valor1: 2000000,
        valor2: 2500000,
      },
      {
        nome: "Rica",
        valor1: 2000000,
        valor2: 4500000,
      },
    ],
  ];

  return (
    <Container>
      <SizeContainer>
        <TitlePages text="Ranking Indústria" />
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
export default RankingIndustry;
