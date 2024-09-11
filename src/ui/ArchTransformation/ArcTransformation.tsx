import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Warp from 'warpjs';

import { ReactComponent as SampleTextIcon } from '../../assets/images/sampleText.svg';

const BASELINE_Y = 50;

const Container = styled.div`
  width: 32rem;
  height: 12rem;
`;

type SVGBoundaries = {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
};

type SVGData = {
  x: number;
  y: number;
  xMin: number;
  yMin: number;
};

const findTheBoundaries = (
  svgRef: React.MutableRefObject<SVGSVGElement | null>,
): SVGData | null => {
  if (!svgRef.current) return null;
  const path = Array.from(svgRef.current.children) as SVGSVGElement[];

  const { xMin, xMax, yMin, yMax } = path.reduce((acc, el) => {
    const { x, y, width, height } = el.getBBox();
    if (!acc.xMin || x < acc.xMin) acc.xMin = x;
    if (!acc.xMax || x + width > acc.xMax) acc.xMax = x + width;
    if (!acc.yMin || y < acc.yMin) acc.yMin = y;
    if (!acc.yMax || y + height > acc.yMax) acc.yMax = y + height;
    return acc;
  }, {} as SVGBoundaries);

  return { xMin, yMin, x: xMax - xMin, y: yMax - yMin };
};

export const ArcTransformation = () => {
  const [warp, setWarp] = useState<typeof Warp>();
  const [svgData, setSVGData] = useState<SVGData>();

  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const warp = new Warp(ref.current);
    warp.interpolate(4);
    warp.transform(([x, y]: [number, number]) => [x, y, y]);

    setWarp(warp);
    setSVGData(findTheBoundaries(ref)!);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!svgData) return;

    const newSliderValue = ((BASELINE_Y - Number(e.target.value)) / 100) * svgData.y;

    warp.transform(([x, _y, oy]: [number, number, number]) => {
      return [x, oy + newSliderValue * Math.sin((x / svgData.x) * Math.PI)];
    });
  };

  return (
    <>
      <Container>
        <SampleTextIcon ref={ref} />
      </Container>
      <input type="range" id="slider" name="slider" min="0" max="100" onChange={handleChange} />
    </>
  );
};
