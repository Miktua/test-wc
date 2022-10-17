import React from "react";
import { useInjection } from "inversify-react";
import { observer } from "mobx-react";
import type { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import { UserStore } from "../stores/UserStore";
import { HeroBlock, MapBlock, Steps } from "../components";
import Footer from "../layout/Footer";
import "swiper/css";

const Home: NextPage = observer(() => {
  const userStore = useInjection(UserStore);

  return (
    <>
        <HeroBlock />

{/*     
    <Swiper
      className="mySwiper"
      direction="vertical"
      mousewheel={{ sensitivity: 1 }}
      slidesPerView={1}
      observer
      observeParents
      modules={userStore?.currentStep === 0?[Mousewheel]:undefined}
      speed={800}
      allowSlideNext={userStore?.currentStep === 0}
      allowSlidePrev={userStore?.currentStep === 0}
    >
      <SwiperSlide>
        <HeroBlock />
      </SwiperSlide>
      <SwiperSlide>
        <MapBlock />
      </SwiperSlide>
      <SwiperSlide>
        <Footer />
      </SwiperSlide>
    </Swiper>

    <Steps
    currentStep={userStore?.currentStep}
    selectedCity={userStore?.selectedCity}
    /> */}

    </>

  );
});

export default Home;
