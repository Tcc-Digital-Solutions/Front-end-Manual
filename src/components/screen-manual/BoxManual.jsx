import '../../styles/css-manual/BoxManual.module.css';
import React, { useState } from 'react';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import PDF from 'https://manual-digital-bosch.vercel.app/assets/pdf.ee34fd9b.pdf';
// import PDF from '../../pdf/pdf.pdf';
// import PDF2 from '../../pdf/gfhjk.pdf'
export const BoxManual = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
      <div className='BoxManual-container'>
        <div className='pdf-container'>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.min.js">
            <Viewer fileUrl="https://manual-digital-bosch.vercel.app/assets/pdf.ee34fd9b.pdf"
              plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        </div>
      </div>
    </>
  );
}
