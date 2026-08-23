// types/education.ts
export interface EducationItem {
  id: string | number;
  degree: string;
  year: string;
  school: string;
  location: string;
}

export interface EducationCardProps {
  education: EducationItem;
  index: number;
}