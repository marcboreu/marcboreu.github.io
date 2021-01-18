import React from "react";
import Swiper from "react-id-swiper";
import "../../../node_modules/swiper/swiper.scss";
import { miscelania } from "../../data/miscelania";
import SkillBox from "./SkillBox";


class Slides extends React.Component {
  state = {
    skills: miscelania,
  };

  render() {
    let skillsRender = null;

    if (this.state.skills) {
      skillsRender = this.state.skills.map((skill) => (
        <div key={skill.id}>
          <SkillBox skill={skill.preview} />
        </div>
      ));
    }

    const params = {
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 6,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    };
    return <Swiper {...params}>{skillsRender}</Swiper>;
  }
};
export default Slides;
