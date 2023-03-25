import React from "react";
import CustomText from "../../../../shared/components/CustomText/CustomText";
import ExplanationBoxStyled from "./ExplanationBoxStyled";

const ExplanationBox = () => {
  const explanationText =
    "Share music with anyone, anywhere with MusiQ. Create your playlist and start jamming!";

  return (
    <ExplanationBoxStyled>
      <CustomText label={explanationText} size="50" />
    </ExplanationBoxStyled>
  );
};

export default ExplanationBox;
