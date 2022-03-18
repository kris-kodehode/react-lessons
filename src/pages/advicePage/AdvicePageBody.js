export const AdvicePageBody = (props) => {
  const { headline, paragraphOne, paragraphTwo, paragraphThree } = props;
  return (
    <>
      <h2>{headline}</h2>
      <p>{paragraphOne}</p>
      <br />
      <p>{paragraphTwo}</p>
      <br />
      <p>{paragraphThree}</p>
      <p>test</p>
    </>
  );
};
