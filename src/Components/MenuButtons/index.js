import { useHistory } from "react-router";
import { Container } from "./style"

const MenuButton = ({img, parag, path}) => {
  const history = useHistory();

    return(
        <Container  onClick={() => history.push(`${path}`)}>
            <img src={img} alt='icon'/>
            <p>{parag}</p>
        </Container>
    )
}
export default MenuButton