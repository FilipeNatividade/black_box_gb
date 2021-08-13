import { useHistory } from "react-router";
import { Container } from "./style"

const BackButton = ({path}) => {
  const history = useHistory();

    return(
        <Container onClick={() => history.push(`${path}`)}/>
    )
}
export default BackButton