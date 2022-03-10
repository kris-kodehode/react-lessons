const fetchData = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setFact(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
};

export default fetchData;
