import { CardContainer, CardWrap, Title, Subtitle, IconWrapper } from "./style";

const HomeProductCard = ({ icon, title, subtitle }) => {
  return (
    <CardContainer>
      <CardWrap
        className="p-[  padding: 20px 36px;
]"
      >
        <IconWrapper>{icon}</IconWrapper>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </CardWrap>
    </CardContainer>
  );
};

export default HomeProductCard;
