export const dynamic = "force-dynamic";

const DynamicRendering = () => {
  return (
    <div>
      <h1>DynamicRendering</h1>
      {new Date().toTimeString()}
    </div>
  );
};

export default DynamicRendering;
