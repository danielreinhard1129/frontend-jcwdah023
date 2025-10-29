import { Suspense } from "react";
import FastComponent from "./components/FastComponent";
import ReadyComponent from "./components/ReadyComponent";
import SlowComponent from "./components/SlowComponent";

const StreamingExample = () => {
  return (
    <div>
      <h1>StreamingExample</h1>

      <Suspense fallback={<p>Loading fast component...</p>}>
        <FastComponent />
      </Suspense>

      <Suspense fallback={<p>Loading slow component...</p>}>
        <SlowComponent />
      </Suspense>

      <ReadyComponent />
    </div>
  );
};

export default StreamingExample;
