import { useEffect } from "react";
import { Abstract } from "../../../../shared/assets/images";
import ImageBoxStyled from "./ImageBoxStyled";

let interval: any;
let translateX = 0;
let translateY = 0;
let x = 0;
let y = 0;

const ImageBox = () => {
  useEffect(() => {
    const container = document.getElementById("container");
    const image = document.getElementById("image") as HTMLImageElement;

    const runInterval = () => {
      interval = setInterval(() => {
        if (x > 50 && translateX > -16.6) {
          translateX -= 0.1;
        } else if (x < 50 && translateX < 16.6) {
          translateX += 0.1;
        }
        if (y > 50 && translateY > -16.6) {
          translateY -= 0.1;
        } else if (y < 50 && translateY < 16.6) {
          translateY += 0.1;
        }

        requestAnimationFrame(() => {
          image!.style.transform = `scale(1.5) translate(${translateX}%, ${translateY}%)`;
        });
      }, 16);
    };

    const onMouseOver = (e: MouseEvent) => {
      if (!interval) runInterval();

      const { clientX, clientY } = e;
      const { width, height } = container!.getBoundingClientRect();

      x = (clientX / width) * 100;
      y = (clientY / height) * 100;
    };

    const onMouseLeave = () => {
      clearInterval(interval);
      interval = null;
      translateX = 0;
      translateY = 0;

      requestAnimationFrame(() => {
        image!.style.transform = `scale(1.5) translate(0, 0)`;
        image!.style.transition = "transform 1s";
      });
    };

    container?.addEventListener("mousemove", onMouseOver);
    container?.addEventListener("mouseleave", onMouseLeave);
  }, []);

  return (
    <ImageBoxStyled>
      <div id="container">
        <img src={Abstract} alt="Abstract" id="image" />
      </div>
    </ImageBoxStyled>
  );
};

export default ImageBox;
