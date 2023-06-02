import type { Certification as CertificationType } from 'types/Resume';

type CertificationProps = Pick<
  CertificationType,
  'image' | 'name' | 'organization' | 'year'
>;

export default function Certification({
  image,
  name,
  organization,
  year,
}: CertificationProps) {
  return (
    <div className="flex items-start gap-2">
      <img
        alt={organization}
        className="aspect-square border"
        height={48}
        src={image}
        width={48}
      />
      <div>
        <div className="font-bold text-base text-black">{organization}</div>
        <div className="font-normal text-sm text-slate-900">{name}</div>
        <div className="font-semibold text-xs text-slate-400">{year}</div>
      </div>
    </div>
  );
}
