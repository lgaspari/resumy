import exampleResume from 'data/john-doe-resume.json';
import { useState } from 'react';

const stringify = (value: object) => JSON.stringify(value, null, '  ');

export default function App() {
  const [value, setValue] = useState(stringify(exampleResume));

  return (
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
          >
            Generate resume
          </button>
        </div>
      </div>
    </div>
  );
}
