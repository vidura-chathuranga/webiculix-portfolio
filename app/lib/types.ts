export type ReviewCardType = {
  img: string;
  name: string;
  username: string;
  body: string;
};

export interface MagicCardProps {
  children?: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientFrom?: string;
  gradientTo?: string;
}
