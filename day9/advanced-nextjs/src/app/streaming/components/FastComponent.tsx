const FastComponent = async () => {
  // simulated fast data fetching
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <div>FastComponent</div>;
};

export default FastComponent;
