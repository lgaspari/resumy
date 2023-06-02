import {
  IconBrandLinkedin,
  IconBriefcase,
  IconCertificate,
  IconDeviceLaptop,
  IconId,
  IconLanguage,
  IconMail,
  IconMapPinFilled,
  IconPhone,
  IconRocket,
  IconSchool,
} from '@tabler/icons-react';
import { getExperiencePositionDifference } from 'helpers/datetime';
import type Resume from 'types/Resume';
import Certification from './certification';
import Contact from './contact';
import Education from './education';
import Experience from './experience';
import Header from './header';
import Language from './language';
import ProfilePicture from './profile-picture';
import Project from './project';
import Section from './section';
import Skill from './skill';

interface PdfResumeProps {
  resume: Resume;
}

export default function PdfResume({
  resume: {
    about,
    certifications,
    contact,
    education,
    experiences,
    fullName,
    languages,
    profilePicture,
    projects,
    skills,
    title,
  },
}: PdfResumeProps) {
  return (
    <div
      /**
       * A4 page size (portrait).
       *
       * 210x297mm ~= 793x1122px
       */
      className="min-h-a4 max-w-a4 w-[100%] bg-white"
    >
      {/* Header */}
      <div className="p-8 flex flex-wrap items-start gap-8 bg-neutral-500">
        <ProfilePicture fullName={fullName} profilePicture={profilePicture} />
        <div>
          <h1 className="mb-2 text-slate-100">{fullName}</h1>
          <h2 className="mb-4 text-slate-900">{title}</h2>

          <div className="flex flex-col items-start gap-2">
            <Contact contact={contact.location} Icon={IconMapPinFilled} />
            <Contact contact={contact.email} Icon={IconMail} />
            <Contact contact={contact.phone} Icon={IconPhone} />
            <Contact contact={contact.linkedin} Icon={IconBrandLinkedin} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        <div>
          <Section header={<Header Icon={IconId}>About me</Header>}>
            <div className="flex flex-col gap-2">
              {about.map((paragraph) => (
                <p className="text-sm" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Section>

          <Section header={<Header Icon={IconRocket}>Projects</Header>}>
            <div className="flex flex-col gap-4">
              {projects.map(({ description, image, name, website }) => (
                <Project
                  description={description}
                  image={image}
                  key={name}
                  name={name}
                  website={website}
                />
              ))}
            </div>
          </Section>

          <Section header={<Header Icon={IconBriefcase}>Experience</Header>}>
            <div className="flex flex-col divide-y">
              {experiences
                .map((experience) => {
                  const positions = experience.positions.map((position) => ({
                    ...position,
                    duration: getExperiencePositionDifference(
                      position.from,
                      position.to,
                    ),
                  }));

                  return {
                    ...experience,
                    duration: positions.reduce(
                      (sum, { duration }) => (sum += duration),
                      0,
                    ),
                    positions,
                  };
                })
                .map(({ company, duration, image, positions }) => (
                  <Experience
                    company={company}
                    duration={duration}
                    image={image}
                    key={`${company}-${duration}`}
                    positions={positions}
                  />
                ))}
            </div>
          </Section>
        </div>

        <div className="bg-slate-50">
          <Section header={<Header Icon={IconLanguage}>Languages</Header>}>
            <div className="grid grid-cols-2 gap-4">
              {languages.map(({ image, name, level }) => (
                <Language
                  image={image}
                  key={`${name}-${level}`}
                  name={name}
                  level={level}
                />
              ))}
            </div>
          </Section>

          <Section
            header={<Header Icon={IconCertificate}>Certifications</Header>}
          >
            <div className="grid grid-cols-2 gap-4">
              {certifications.map(({ name, organization, image, year }) => (
                <Certification
                  image={image}
                  name={name}
                  organization={organization}
                  key={`${organization}-${name}-${year}`}
                  year={year}
                />
              ))}
            </div>
          </Section>

          <Section header={<Header Icon={IconSchool}>Education</Header>}>
            <div className="grid grid-cols-2 gap-4">
              {[
                education.map(({ degree, image, school, year }) => (
                  <Education
                    degree={degree}
                    image={image}
                    key={`${school}-${degree}-${year}`}
                    school={school}
                    year={year}
                  />
                )),
              ]}
            </div>
          </Section>

          <Section header={<Header Icon={IconDeviceLaptop}>Skills</Header>}>
            <div className="grid grid-cols-3 gap-2">
              {skills.map(({ details, highlight, name }) => (
                <Skill
                  details={details}
                  highlight={highlight}
                  key={name}
                  name={name}
                />
              ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}
