import { IconArrowBigUpFilled, IconDownload } from '@tabler/icons-react';
import PdfResume from 'components/resumes/pdf';
import exampleResume from 'data/john-doe-resume.json';
import { useIntersection } from 'hooks/use-intersection';
import { useWindowScroll } from 'hooks/use-window-scroll';
import { useEffect, useRef, useState } from 'react';

const stringify = (value: object) => JSON.stringify(value, null, '  ');

export default function App() {
  const [value, setValue] = useState(stringify(exampleResume));
  const [resume, setResume] = useState(null);

  const resumeRef = useRef<HTMLDivElement | null>(null);

  const { entry, ref: pdfRef } = useIntersection({
    threshold: 0.18, // 0.15 seems fine, adding 0.03 to display after contact
  });

  const [scroll, scrollTo] = useWindowScroll();

  // ---------------------------------------------------------------------------

  /**
   * Scroll to resume view when generating or updating resume.
   */
  useEffect(() => {
    if (resume && resumeRef.current) {
      scrollTo({ y: resumeRef.current!.offsetTop });
    }
  }, [resume, resumeRef, scrollTo]);

  // ---------------------------------------------------------------------------

  const handleBackToTopClick = () => scrollTo({ y: 0 });

  const handleDownloadResumeClick = () => window.print();

  const handleGenerateResumeClick = () => {
    const resume = JSON.parse(value);
    setResume(resume);

    // update input value (re-format)
    setValue(stringify(resume));
  };

  // ---------------------------------------------------------------------------

  return (
    <div>
      {/* Landing */}
      <div className="min-h-screen p-4 pt-8 sm:p-8 flex flex-col print:hidden">
        <div className="max-w-a4 w-[100%] mx-auto flex flex-col flex-grow gap-8">
          {/* Header */}
          <div>
            <h1 className="mb-4">
              Resumy
              <span className="text-violet-600">.</span>
            </h1>
            <h2 className="font-semibold text-xl text-gray-500">
              Generate your resume from a JSON and download it in PDF format
            </h2>
          </div>

          {/* Form */}
          <div className="flex flex-col flex-grow gap-4">
            <div className="flex flex-col flex-grow">
              <label className="font-bold" htmlFor="json">
                JSON
              </label>
              <textarea
                className="w-[100%] min-h-[300px] flex-grow p-4 rounded-md outline-violet-600 border"
                id="json"
                onChange={(e) => setValue(e.currentTarget.value)}
                value={value}
              />
            </div>

            <button
              className="btn-primary"
              disabled={!value}
              onClick={handleGenerateResumeClick}
            >
              {resume ? 'Update resume' : 'Generate resume'}
            </button>
          </div>
        </div>
      </div>

      {/* Resume */}
      {resume && (
        <div
          className="flex flex-col items-center p-4 pb-24 sm:p-8 sm:pb-24 print:portrait:p-0 print:landscape:p-0 bg-gray-600"
          ref={resumeRef}
        >
          <div
            className="shadow-lg shadow-slate-800 print:shadow-none"
            ref={pdfRef}
          >
            <PdfResume resume={resume} />
          </div>
        </div>
      )}

      {/* Download button */}
      {entry?.isIntersecting && (
        <div className="fixed bottom-6 sm:bottom-4 left-6 sm:left-1/2 sm:-translate-x-1/2 print:hidden">
          <button
            className="btn-primary btn-elevated flex items-center gap-2 leading-4 whitespace-nowrap sm:animate-bounce"
            onClick={handleDownloadResumeClick}
            title="Download resume in PDF format"
          >
            Download PDF
            <IconDownload size={24} />
          </button>
        </div>
      )}

      {/* Back to top button */}
      {scroll.y > 0 && (
        <div className="fixed bottom-6 right-6 print:hidden">
          <button
            className="btn-primary btn-elevated"
            onClick={handleBackToTopClick}
            title="Back to top"
          >
            <IconArrowBigUpFilled size={24} />
          </button>
        </div>
      )}

      {/* Watermark */}
      <div className="absolute top-2 right-2 text-[8px] opacity-30 hidden print:block">
        Generated by{' '}
        <a
          className="underline"
          href="https://lgaspari.github.io/resumy/"
          rel="noreferrer"
          target="_blank"
        >
          Resumy
        </a>
      </div>
    </div>
  );
}
