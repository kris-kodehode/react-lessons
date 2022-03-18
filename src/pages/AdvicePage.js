import { AdvicePageBody } from "./advicePage/AdvicePageBody";

const advicePageConst = {
  headline: "Advice Page",
  paragraphOne: "this is the first paragraph and shit",
  paragraphTwo: "this is the second paragraph and shit",
  paragraphThree: "this is the third paragraph and shit",
};

const AdvicePage = () => {
  const { headline, paragraphOne, paragraphTwo, paragraphThree } =
    advicePageConst;
  return (
    <div>
      <AdvicePageBody
        headline={headline}
        paragraphOne={paragraphOne}
        paragraphTwo={paragraphTwo}
        paragraphThree={paragraphThree}
      />
    </div>
  );
};

export default AdvicePage;
