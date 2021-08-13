import { useHistory } from "react-router";
import { Container } from "./style"

const Buttons = ({title,path}) => {
  const history = useHistory();

    return(
        <Container  onClick={() => history.push(`${path}`)}>
            {title}
        </Container>
    )
}
export default Buttons