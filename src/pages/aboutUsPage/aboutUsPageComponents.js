const AdviceOne = () => <div>First Advice</div>;

const AdviceTwo = () => {
  console.log("adviceTwo");
  return <div></div>;
};

const AdviceThree = () => {
  console.log("adviceThree");
  return (
    <div>
      <p>Advice Three</p>
    </div>
  );
};
