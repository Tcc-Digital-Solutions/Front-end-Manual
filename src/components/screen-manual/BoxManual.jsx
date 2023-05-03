import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library

export default function Home() {
  const isBrowser = typeof window !== "undefined";
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return isBrowser ?(
    <>
      <div className='BoxManual-container'>
        <div className='pdf-container'>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.min.js">
            <Viewer fileUrl={'https://arxiv.org/pdf/quant-ph/0410100.pdf'}
              plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        </div>
      </div>
    </>
  ):null
}

