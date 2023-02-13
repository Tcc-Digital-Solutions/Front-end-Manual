import '../../assets/css/css-manual/BoxManual.css';
import { Document, Page,pdfjs } from 'react-pdf';
import React, { useState } from 'react';
import PDF from '../../pdf.pdf';
import setaesquerda from '../../assets/img/seta-esquerda.png'
import setadireita from '../../assets/img/seta-direita.png'
// #toolbar=0 >>'''FAZER TOOLBAR DO PDF SUMIR'''


export const BoxManual= () => {

  pdfjs.GlobalWorkerOptions.workerSrc = 
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  
  /* click botão direito */
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });
    
  /* documento carregado com sucesso */
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  
  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }
  
  function previousPage() {
    changePage(-1);
  }
  
  function nextPage() {
    changePage(1);
  }

  return (
    <>
      <div className='BoxManual-container'>
        {/* <div className='BoxManual-pagec bg-purple-400'>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'} >>'''mostrar quantas páginas tem o pdf e em qual página está'''
        </div> */}
        <div className='BoxManual-pdf'>
          {/* <td><iframe src={PDF+'#toolbar=0'} width='600' height='430'></iframe></td> */}
            <img src={setaesquerda} alt='' className='BoxManual-imgSeta' disabled={pageNumber <= 1} onClick={previousPage}/> 
            <Document file={PDF} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <img src={setadireita} alt='' className='BoxManual-imgSeta'  disabled={pageNumber >= numPages} onClick={nextPage}/>
        </div>
      </div>
    </>
  );
}
