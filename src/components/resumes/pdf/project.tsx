import { IconExternalLink } from '@tabler/icons-react';
import type { Project as ProjectType } from 'types/Resume';

type ProjectProps = Pick<
  ProjectType,
  'description' | 'image' | 'name' | 'website'
>;

export default function Project({
  description,
  image,
  name,
  website,
}: ProjectProps) {
  return (
    <div className="flex items-start gap-2">
      <img
        alt={name}
        className="aspect-square border"
        height={48}
        src={image}
        width={48}
      />
      <div>
        <a
          className="text-black hover:text-neutral-500"
          href={website}
          rel="noreferrer"
          target="_blank"
        >
          <span className="inline font-bold">{name}</span>
          <IconExternalLink
            className="inline ml-1 font-normal text-xs"
            size={12}
          />
        </a>
        <div className="font-normal text-sm text-slate-900">{description}</div>
      </div>
    </div>
  );
}
