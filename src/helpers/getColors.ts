import { possibleColors } from "./possibleColors";

export type Colors = {
  scarlet: string;
  gold: string;
  blue: string;
  bronze: string;
  yellow: string;
  black: string;
  green: string;
  silver: string;
};

export const getColors = (colors: string) => {
  const [primaryColor, _, secondaryColor] = colors.toLowerCase().split(' ');

  return {
    primaryColor: possibleColors[primaryColor as keyof Colors] || "#fff",
    secondaryColor: possibleColors[secondaryColor as keyof Colors] || "#000",
  };
};
