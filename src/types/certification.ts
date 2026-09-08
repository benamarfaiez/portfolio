export interface CertificationItemProps {
  certification: Certification;
}

export interface Certification {
    id: string | number;
    title: string;
    issuer: string;
    date: string;
    credentialUrl: string;
    column: 'left' | 'right' | null;
}