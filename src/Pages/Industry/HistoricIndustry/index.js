import BackButton from "../../../Components/BackButton";
import CountUp from "react-countup";
import TitlePages from "../../../Components/TitlePages";
import {
  Container,
  SizeContainer,
  Header,
  ContainerReport,
  ParagraphValue,
  ParagraphValuePositive,
} from "./style";

const HistoricIndustry = () => {
 
  return (
    <Container>
      <SizeContainer>
        <TitlePages text="Histórico Indústria" />
          <BackButton path="/menuIndustry" />
        <Header>
          <p>
             <span>2</span> Rodada
          </p>
          <p>
             <span>2</span> Grupo
          </p>
        </Header>
        <ContainerReport>
          <ParagraphValuePositive>
            <span>
              <img src="./images/add_button.svg" alt="add_button" />
              Venda Bruta
            </span>
            <span>
              <CountUp
                prefix="+ D$"
                end={20000.0}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            </span>
          </ParagraphValuePositive>
          <ParagraphValue>
            <span>
              <img src="./images/negative_icon.svg" alt="negative_icon" />
              Impostos
            </span>
            <span>
              <CountUp
                prefix="- D$"
                end={2000.0}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            </span>
          </ParagraphValue>
          <ParagraphValue>
            <span>
              <img src="./images/negative_icon.svg" alt="negative_icon" />
              Despesas de Marketing
            </span>
            <span>
              <CountUp
                prefix="- D$"
                end={2000.0}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            </span>
          </ParagraphValue>
          <ParagraphValuePositive>
            <span>
              <img src="./images/point.svg" alt="point" />
              Receita Despesa Financeira
            </span>
            <span>
              <CountUp
                prefix="+ D$"
                end={4000.0}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            </span>
          </ParagraphValuePositive>
          <ParagraphValue>
            <span>
              <img src="./images/negative_icon.svg" alt="negative_icon" />
              Despessa Pessoal
            </span>
            <span>
              <CountUp
                prefix="- D$"
                end={2000.0}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            </span>
          </ParagraphValue>
          <ParagraphValue>
            <span>
              <img src="./images/negative_icon.svg" alt="negative_icon" />
              Despesa de Treinamento
            </span>
            <span>
              <CountUp
                prefix="- D$"
                end={2000.0}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            </span>
          </ParagraphValue>
          <ParagraphValue>
            <span>
              <img src="./images/negative_icon.svg" alt="negative_icon" />
              CMV
            </span>
            <span>
              <CountUp
                prefix="- D$"
                end={2000.0}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            </span>
          </ParagraphValue>
          <ParagraphValuePositive>
            <span>
              <img src="./images/gross_margin.svg" alt="gross_margin" />
              Margem Brutal
            </span>
            <span>
              <CountUp
                prefix="D$"
                end={20000.0}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            </span>
          </ParagraphValuePositive>
          <ParagraphValue>
            <span>
              <img src="./images/negative_icon.svg" alt="negative_icon" />
              Aluguel
            </span>
            <span>
              <CountUp
                prefix="- D$"
                end={2000.0}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            </span>
          </ParagraphValue>
          <ParagraphValue>
            <span>
              <img src="./images/negative_icon.svg" alt="negative_icon" />
              Outros
            </span>
            <span>
              <CountUp
                prefix="- D$"
                end={2000.0}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            </span>
          </ParagraphValue>
          <ParagraphValuePositive>
            <span>
              <img src="./images/point.svg" alt="point" />
              Lucros Bruto/Prejuizos
            </span>
            <span>
              <CountUp
                prefix="+ D$"
                end={20000.0}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            </span>
          </ParagraphValuePositive>
        </ContainerReport>
      </SizeContainer>
    </Container>
  );
};
export default HistoricIndustry;
