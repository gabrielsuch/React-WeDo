import { Container, ContainerIcon } from "./style";

import { FiPlus, FiCheck, FiEdit, FiArrowUpRight } from "react-icons/fi";

export const Button = ({ children, secondary, ...rest }) => {
  return (
    <Container secondary={secondary} {...rest}>
      {children}
    </Container>
  );
};

export const IconButton = ({
  add,
  check,
  edit,
  card,
  arrowUp,
  primaryColor,
  ...rest
}) => {
  return (
    <ContainerIcon card={card} primaryColor={primaryColor} {...rest}>
      {add && <FiPlus />}
      {check && <FiCheck />}
      {edit && <FiEdit />}
      {arrowUp && <FiArrowUpRight />}
    </ContainerIcon>
  );
};
