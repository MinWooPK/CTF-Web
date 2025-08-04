// HomeTemplateDesktop.jsx

import { useRef } from "react";
import { useInView } from "@hooks/useInView";
import HeaderMain from "@layouts/Header/Header";
import TypingText from "@components/TypingText";
import HomeProductCard from "@components/HomeProductCard";
import HomeDetailCard from "@components/HomeDetailCard";
import ContactUs from "@components/ContactUs";
import Footer from "@components/Footer";

import { FintechBanca } from "@assets/icons/FintechBanca";
import { SofwareMedia } from "@assets/icons/SofwareMedia";
import { ERPs } from "@assets/icons/ERPs";
import { Proptech } from "@assets/icons/Proptech";
import { DetailProduct1 } from "@assets/icons/DetailProduct1";
import { DetailProduct2 } from "@assets/icons/DetailProduct2";
import { DetailProduct4 } from "@assets/icons/DetailProduct4";

import Tec1 from "@assets/icons/Tec1.png";
import Tec2 from "@assets/icons/Tec2.png";
import Tec3 from "@assets/icons/Tec3.png";
import Tec4 from "@assets/icons/Tec4.png";
import Tec5 from "@assets/icons/Tec5.png";
import Tec6 from "@assets/icons/Tec6.png";
import Tec7 from "@assets/icons/Tec7.png";

import {
  HomeMain,
  HomeDetail,
  HomeTitleMain,
  HomeSubTitle1Main,
  HomeSubTitle2Main,
  HomeSpanMain,
  HomeButtonMain,
  HomeContainerMain,
  HomeContainer,
  SubTitleContainer,
  ButtonHomeContaienr,
  SpanHomeContainer,
  HomeProducts,
  HomeDetailTitle,
  HomeDetailSubTitle,
  HomeDetailContainer,
  HomeDetailCardContainer,
  HomeDetailTitleWrapper,
  HomeDetailContainerSecond,
  HomeDetailContainerSecondTitleContainer,
  HomeDetailContainerSecondTitle,
  HomeDetailContainerSecondSubTitle,
  HomeDetailContainerSecondCards,
  HomeDetailContainerSecondSubTitleContainer,
  HomeDetailContainerSecondSubTitleSecond,
  HomeDetailContainerSecondContainer,
  Highlight,
  HomeDetailTecno,
  ImgTecItem,
  ImgTec,
  // BgImage,
} from "@pages/Home/style";
// import EtherealHome from "@assets/icons/EtherealHome.jpg";

const HomeTemplateDesktop = () => {
  const [refMain, isMainVisible] = useInView({ threshold: 0.1 });
  const [refDetail, isDetailVisible] = useInView({ threshold: 0.1 });
  const [refSecondDetail, isSecondDetailVisible] = useInView({
    threshold: 0.1,
  });
  const [refContact, isContact] = useInView({
    threshold: 0.1,
  });

  const loremIpsum =
    "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";
  const homeDetailCards = [
    {
      icon: <DetailProduct1 />,
      title: "Factur.IA",
      detailText: loremIpsum,
      detailTextSecond: loremIpsum,
      buttonColor: "#053745",
      hoverColor: "#03252f",
    },
    {
      icon: <DetailProduct2 />,
      title: "Pas.IA",
      detailText: loremIpsum,
      detailTextSecond: loremIpsum,
      buttonColor: "#B7260C",
      hoverColor: "#931f0a",
    },
    {
      icon: <DetailProduct2 />,
      title: "Agentes de IA",
      detailText: loremIpsum,
      detailTextSecond: loremIpsum,
      buttonColor: "#4638A7",
      hoverColor: "#372c85",
    },
    {
      icon: <DetailProduct4 />,
      title: "Tesore.IA + Consol.IA ",
      detailText: loremIpsum,
      detailTextSecond: loremIpsum,
      buttonColor: "#D17B18",
      hoverColor: "#a86213",
    },
  ];

  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <>
      <HomeMain>
        <HeaderMain scrollToContact={scrollToContact} />
        <HomeContainer>
          <HomeContainerMain
            ref={refMain}
            className={`section ${isMainVisible ? "visible" : ""}`}
          >
            {" "}
            <HomeTitleMain>CodeToFit</HomeTitleMain>
            <SubTitleContainer>
              <TypingText text={"</>"} speed={100} />

              <HomeSubTitle1Main>Innovación Tecnológica</HomeSubTitle1Main>
              <HomeSubTitle2Main>para empresas</HomeSubTitle2Main>
            </SubTitleContainer>
            <SpanHomeContainer>
              <HomeSpanMain>
                Convertimos la tecnología en tu aliada, no en tu obstaculo
              </HomeSpanMain>
            </SpanHomeContainer>
            <ButtonHomeContaienr>
              <HomeButtonMain variant="primary" onClick={scrollToContact}>
                Solicitar demo
              </HomeButtonMain>{" "}
              <HomeButtonMain variant="secondary" onClick={scrollToContact}>
                Contacto
              </HomeButtonMain>
            </ButtonHomeContaienr>
            <HomeProducts>
              <HomeProductCard
                icon={<FintechBanca />}
                title="Fintech & Banca"
                subtitle=""
              />
              <HomeProductCard
                icon={<Proptech />}
                title="Proptech"
                subtitle=""
              />{" "}
              <HomeProductCard icon={<ERPs />} title="ERPs&CRMs" subtitle="" />{" "}
              <HomeProductCard
                icon={<SofwareMedia />}
                title="Software a medida"
                subtitle="Apps, web-apps, landings, in-company tool software"
              />
            </HomeProducts>
          </HomeContainerMain>
          <HomeDetail
            ref={refDetail}
            className={`section ${isDetailVisible ? "visible" : ""}`}
          >
            <HomeDetailContainer>
              <HomeDetailTitleWrapper className="bg-red">
                <HomeDetailTitle>Creadores de software</HomeDetailTitle>
                <HomeDetailSubTitle>
                  que tus colaboradores amarán usar{" "}
                </HomeDetailSubTitle>
              </HomeDetailTitleWrapper>
              <HomeDetailCardContainer>
                {homeDetailCards.map((card, index) => (
                  <HomeDetailCard
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    detailText={card.detailText}
                    detailTextSecond={card.detailTextSecond}
                    buttonColor={card.buttonColor}
                    hoverColor={card.hoverColor}
                    onRequestDemo={scrollToContact}
                  />
                ))}
              </HomeDetailCardContainer>
            </HomeDetailContainer>
            <HomeDetailContainerSecond
              ref={refSecondDetail}
              className={`section ${isSecondDetailVisible ? "visible" : ""}`}
            >
              <HomeDetailContainerSecondTitleContainer>
                <HomeDetailContainerSecondTitle>
                  Además de personalizar soluciones
                </HomeDetailContainerSecondTitle>
                <HomeDetailContainerSecondSubTitleContainer>
                  <HomeDetailContainerSecondSubTitle>
                    exactamente a tus necesidades:{" "}
                  </HomeDetailContainerSecondSubTitle>
                  <HomeDetailContainerSecondSubTitleSecond>
                    Ninguna empresa es igual a otra, y cada una merece un traje
                    a la medida.
                  </HomeDetailContainerSecondSubTitleSecond>
                </HomeDetailContainerSecondSubTitleContainer>
                <HomeDetailContainerSecondContainer>
                  <HomeDetailContainerSecondCards>
                    <Highlight> Transformación digital </Highlight>
                  </HomeDetailContainerSecondCards>{" "}
                  <HomeDetailContainerSecondCards>
                    Desarrollo de
                    <Highlight>Software a medida</Highlight>
                  </HomeDetailContainerSecondCards>{" "}
                  <HomeDetailContainerSecondCards>
                    Integración de
                    <Highlight>sistemas </Highlight>
                  </HomeDetailContainerSecondCards>
                </HomeDetailContainerSecondContainer>{" "}
                <HomeDetailTecno>
                  Confome las últimas tendencias tecnológicas
                  <ImgTec>
                    <ImgTecItem src={Tec1} width="158px" height="57px" />
                    <ImgTecItem src={Tec2} width="141px" height="64px" />
                    <ImgTecItem src={Tec3} width="184px" height="49px" />{" "}
                    <ImgTecItem src={Tec4} width="71px" height="91px" />
                    <ImgTecItem src={Tec5} width="118px" height="59px" />
                    <ImgTecItem src={Tec6} width="168px" height="67px" />
                    <ImgTecItem src={Tec7} width="192px" height="55px" />
                  </ImgTec>
                </HomeDetailTecno>
              </HomeDetailContainerSecondTitleContainer>
            </HomeDetailContainerSecond>
            <div
              ref={(el) => {
                contactRef.current = el; // para scroll programado
                refContact.current = el;
              }}
              className={`section ${isContact ? "visible" : ""}`}
            >
              <ContactUs bgColor="none" />{" "}
            </div>
          </HomeDetail>
        </HomeContainer>
        <Footer />
      </HomeMain>
    </>
  );
};

export default HomeTemplateDesktop;
