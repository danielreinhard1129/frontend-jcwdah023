const SlowComponent = async () => {
  // simulated slow data fetching
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return <div>SlowComponent</div>;
};

export default SlowComponent;
