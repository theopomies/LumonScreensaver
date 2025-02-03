import "./index.css";
import { Composition } from "remotion";
import { LumonBounce } from "./LumonBounce";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="LumonBounce"
      component={LumonBounce}
      durationInFrames={9000}
      fps={30}
      width={1728}
      height={1116}
      defaultProps={{
        height: 150,
      }}
    />
  );
};
