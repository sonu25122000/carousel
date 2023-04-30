import React from "react";
import "./carsole.css";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayCircleOutlineSharpIcon from "@mui/icons-material/PlayCircleOutlineSharp";
import PauseCircleOutlineSharpIcon from "@mui/icons-material/PauseCircleOutlineSharp";
const Carousel1 = () => {
  const [index, setIndex] = useState(0);
  const [autoplay, setautoplay] = useState(false);
  const handleChange = (cur, prev) => {
    setIndex(cur);
  };

  const handleNext = () => {
    if (index === items.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const handlePrev = () => {
    if (index === 0) {
      setIndex(items.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  var items = [
    {
      img: "https://media.istockphoto.com/id/509488176/photo/paradise-beach.jpg?s=612x612&w=0&k=20&c=zoijXnZ5BqasaiA1NrhSp34mwXIh_G90aYlKwuD4Bh0=",
      name: "Random 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.",
    },
    {
      img: "https://media.istockphoto.com/id/1253837586/photo/blurred-blue-sky-and-sea-with-bokeh-light.jpg?s=612x612&w=0&k=20&c=nQm3RRAuk-5ue7AXbw6liaCSVZRcA4OQx3AUjPFG9_8=",
      name: "Random 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.",
    },
    {
      img: "https://t4.ftcdn.net/jpg/04/39/12/89/360_F_439128927_1MA5jU4I6GjDpHW4O9eaee4Vf2EcGj47.jpg",
      name: "Random 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.",
    },
  ];

  return (
    <div className="carosole">
      <div>
        <div>
          <Carousel
            index={index}
            onChange={handleChange}
            interval={3000}
            duration={500}
            autoPlay={autoplay}
            animation="slide"
            indicators={false}
            navButtonsAlwaysInvisible={true}
            stopAutoPlayOnHover
            swipe={false}
          >
            {items.map((item, i) => (
              <img
                key={i}
                style={{ height: "auto", borderRadius: "50px" }}
                src={item.img}
                alt=""
              />
            ))}
          </Carousel>
        </div>
        <div className="mobilecarsole">
          <div>
            <SkipPreviousIcon
              style={{ fontSize: "4rem" }}
              onClick={handlePrev}
            />
          </div>

          {items.map((item, i) => (
            <div className="imgmobile">
              <img 
                key={i}
                onClick={() => setIndex(i)}
                style={{
                  width: "150px",
                  height: "100px",
                  cursor: "pointer",
                  borderRadius: "30px",
                  filter: i === index ? "grayscale(0%)" : "grayscale(100%)",
                }}
                alt=""
                src={item.img}
              />
            </div>
          ))}
          <div>
            <SkipNextIcon style={{ fontSize: "4rem" }} onClick={handleNext} />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(1,1fr)",
          padding: "0",
          margin: "0",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1,1fr)",
            paddingLeft: "10%",
            paddingRight: "10%",
          }}
        >
          <Carousel
            index={index}
            onChange={handleChange}
            interval={3000}
            autoPlay={autoplay}
            animation="slide"
            duration={500}
            indicators={false}
            stopAutoPlayOnHover
            navButtonsAlwaysInvisible={true}
            swipe={false}
          >
            {items.map((item, i) => (
              <div key={i}>
                <p style={{ color: "#707070", fontSize: "35px" }}>
                  {item.name}
                </p>
                <p
                  style={{
                    textAlign: "left",
                    color: "#B4B3B3",
                    opacity: "100%",
                    fontFamily: "Ubuntu, Regular",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
        <div
          style={{
            display: "block",
            margin: "auto",
            cursor: "pointer",
          }}
          onClick={() => setautoplay(!autoplay)}
        >
          {autoplay ? (
            <PauseCircleOutlineSharpIcon style={{ fontSize: "4rem" }} />
          ) : (
            <PlayCircleOutlineSharpIcon style={{ fontSize: "4rem" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel1;
