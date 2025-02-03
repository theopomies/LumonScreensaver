import "./index.css";
import { Composition } from "remotion";
import { LumonBounce } from "./LumonBounce";
import { fixtures } from "./fixtures";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="LumonBounce"
      component={LumonBounce}
      durationInFrames={9000}
      fps={30}
      width={fixtures.canvasWidth}
      height={fixtures.canvasHeight}
      defaultProps={{
        height: 150,
      }}
    />
  );
};
