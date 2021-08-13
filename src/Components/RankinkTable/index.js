import CountUp from "react-countup";
import { Container } from "./style";

const RankingTable = ({ content }) => {
  console.log(content);
  content.map((i, x) => console.log(i));

  return (
    <Container>
      {content.map((item, index) => (
        <tr key={index}>
          <td className='nameRow'>{item.nome}</td>
          <td>
            <CountUp
              end={item.valor1}
              prefix="D$ "
              separator="."
              decimal=","
              decimals={2}
              duration={0.5}
            />
          </td>
          <td>
            <CountUp
              end={item.valor2}
              prefix="D$ "
              separator="."
              decimal=","
              decimals={2}
              duration={0.5}
            />
          </td>
        </tr>
      ))}
    </Container>
  );
};
export default RankingTable;

{
  /* <CountUp
          end={150000}
          prefix="D$ "
          separator="."
          decimal=","
          decimals={2}
          duration={0.5}
        /> */
}
