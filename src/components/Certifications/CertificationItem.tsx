import { CertificationItemProps } from '../../types/certification';

export function CertificationItem({ certification }: CertificationItemProps) {

  return (
    <li className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
      <a
        href={certification.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm"
      >
        {certification.title}
      </a>
      <span className="block text-sm font-semibold text-blue-600 dark:text-blue-400 pl-5 mt-0.5">
        {certification.issuer} - {certification.date}
      </span>
    </li>
  );
}