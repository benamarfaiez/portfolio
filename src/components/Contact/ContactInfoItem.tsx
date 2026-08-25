import { ContactInfoItemProps } from "../../types/contact";

export function ContactInfoItem({ item }: ContactInfoItemProps) {
  const { icon: Icon, label, value, href } = item;
  
  const containerClasses = 
    "flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all group";

  const content = (
    <>
      <div 
        className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 group-hover:scale-110 transition-transform"
        aria-hidden="true"
      >
        <Icon size={24} />
      </div>
      <div>
        <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
        <p className="font-medium text-slate-900 dark:text-white">{value}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={containerClasses}>
        {content}
      </a>
    );
  }

  return <div className={containerClasses}>{content}</div>;
}