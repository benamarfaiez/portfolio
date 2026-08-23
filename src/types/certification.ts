export interface Certification {
  id: string | number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
}

export interface CertificationItemProps {
  certification: Certification;
}