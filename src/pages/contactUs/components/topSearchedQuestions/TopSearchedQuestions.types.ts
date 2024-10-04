interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface TopSearchedQuestionsProps {
  faqData: FAQ[];
}
