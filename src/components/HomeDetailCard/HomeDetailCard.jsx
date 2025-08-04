import {
  CardContainer,
  CardWrap,
  Title,
  Detail,
  IconWrapper,
  DetailButton,
  DetailContainer,
  CardMain,
} from "./style";

const HomeDetailCard = ({
  icon,
  title,
  detailText,
  detailTextSecond,
  buttonColor,
  hoverColor,
  onRequestDemo,
}) => {
  return (
    <CardContainer>
      <CardMain>
        <CardWrap>
          <Title>{title}</Title>
          <IconWrapper>{icon}</IconWrapper>
        </CardWrap>
        <DetailContainer>
          <Detail>{detailText}</Detail>
          <Detail>{detailTextSecond}</Detail>
        </DetailContainer>
        <DetailButton
          $color={buttonColor}
          $hoverColor={hoverColor}
          onClick={onRequestDemo}
        >
          Solicitar demo
        </DetailButton>{" "}
      </CardMain>
    </CardContainer>
  );
};

export default HomeDetailCard;
