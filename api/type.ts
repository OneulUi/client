export interface ButtonText {
  text: string;
  href: string;
  value?: string;
  onClick?: () => void;
}

export interface SurveyType {
  temp: number;
  text: string;
}
