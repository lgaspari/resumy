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
      <div className="min-h-screen p-8 flex flex-col print:hidden">
        <div className="max-w-a4 w-[100%] mx-auto flex flex-col flex-grow gap-8">
          {/* Header */}
          <div>
            <h1 className="mb-4">
              Resumy<span className="text-violet-600">.</span>
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
              className="px-2 py-4 rounded-md text-white text-lg font-bold uppercase bg-violet-600 hover:bg-violet-800 disabled:bg-gray-400"
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
        <div className="relative" ref={resumeRef}>
          {/* PDF */}
          <div className="flex flex-col items-center p-8 pb-24 print:p-0 bg-gray-600 overflow-visible">
            <div
              className="shadow-lg shadow-black print:shadow-none"
              ref={pdfRef}
            >
              <PdfResume resume={resume} />
            </div>
          </div>

          {/* Download */}
          {entry?.isIntersecting && (
            <div className="fixed bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center print:hidden">
              <button
                className="p-4 flex items-center gap-2 rounded-md text-white text-lg font-bold uppercase bg-violet-600 hover:bg-violet-800 shadow-lg shadow-black animate-bounce"
                onClick={handleDownloadResumeClick}
                title="Download resume in PDF format"
              >
                <span>Download PDF</span>
                <IconDownload size={24} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Back to top */}
      {scroll.y > 0 && (
        <div className="fixed bottom-4 right-4 flex flex-col items-center print:hidden">
          <button
            className="p-3 rounded-full text-white bg-violet-600 hover:bg-violet-800 shadow-lg shadow-black"
            onClick={handleBackToTopClick}
            title="Back to top"
          >
            <IconArrowBigUpFilled size={24} />
          </button>
        </div>
      )}
    </div>
  );
}
