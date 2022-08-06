import ReactSVG from 'react-inlinesvg';

interface SvgProps {
  name: string;

  className?: string;
  width?: number;
  height?: number;
}
export const Svg = ({ name, width = 24, height = 24, className, ...props }: SvgProps) => {
  return (
    <ReactSVG
      className={className}
      src={`icons/${name}.svg`}
      width={width}
      height={height}
      {...props}
    />
  );
};
