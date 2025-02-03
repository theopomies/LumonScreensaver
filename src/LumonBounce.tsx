import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { LumonLogo } from "./LumonLogo";

// Triangle wave function: maps a value in [0,1) to [0,1] with a linear rise and fall
const triangleWave = (t: number): number => {
  return t < 0.5 ? t * 2 : 2 - t * 2;
};

export function LumonBounce() {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Use rendered logo dimensions for consistency
  const logoHeight = 200;
  const logoWidth = (726 / 369) * logoHeight; // keeps the same aspect ratio (~393 when logoHeight is 200)

  // Container dimensions (from Root.tsx)
  const containerWidth = 1728;
  const containerHeight = 1116;

  // Define how many complete bounce cycles should happen in each direction over the entire video duration.
  // For example, horizontalCycles = 3 means the logo will go from left edge to right edge and back to left edge three times.
  // Similarly, verticalCycles = 2 means two full vertical bounces over the duration.
  const horizontalCycles = 12;
  const verticalCycles = 15;

  // Compute normalized phase for horizontal and vertical motion
  const phaseX = ((frame / durationInFrames) * horizontalCycles) % 1;
  const phaseY = ((frame / durationInFrames) * verticalCycles) % 1;

  // Apply a triangle wave to get a linear bounce effect (sawtooth folded into a triangle)
  const posX = triangleWave(phaseX) * (containerWidth - logoWidth);
  const posY = triangleWave(phaseY) * (containerHeight - logoHeight);

  return (
    <AbsoluteFill className="bg-[#000000]">
      <div style={{ position: "absolute", left: posX, top: posY }}>
        <LumonLogo height={logoHeight} width={logoWidth} />
      </div>
    </AbsoluteFill>
  );
}
