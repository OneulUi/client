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

export interface SurveyIdType {
  surveyId: number;
  options: string;
}

export interface OotdData {
  ootdId: number;
  review: string;
  temperature: string;
  humidity: string;
  satisfaction: string;
  ootdImages: { ootdImageId: number; fileName: string }[];
  member: {
    memberId: number;
    email: string;
    name: string;
    introduction: string | null;
    survey: {
      surveyId: number;
      options: string;
      weights: number;
    };
  };
}
