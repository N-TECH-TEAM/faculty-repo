import PDFCard from './PDFCard';
import pdfThumbnail from './PDFimageFiles/pdfThumbnail.png'; // Replace with your PDF thumbnail image
import sample from './PDFimageFiles/sample.pdf'; // Replace with your PDF file

const ChempdfFiles = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {/* Repeat this section for each PDF */}
      <PDFCard
        name="gst 101A"
        size="2MB"
        level="100"
        pdfImage={pdfThumbnail}
        pdfFile={sample}
      />
        <PDFCard
        name="Feg 211"
        size="2MB"
        level="200"
        pdfImage={pdfThumbnail}
        pdfFile={sample}
      />
       <PDFCard
        name="Feg 211"
        size="2MB"
        level="200"
        pdfImage={pdfThumbnail}
        pdfFile={sample}
      /> <PDFCard
      name="Feg 211"
      size="2MB"
      level="200"
      pdfImage={pdfThumbnail}
      pdfFile={sample}
    /> <PDFCard
    name="Feg 211"
    size="2MB"
    level="200"
    pdfImage={pdfThumbnail}
    pdfFile={sample}
  /> <PDFCard
  name="Feg 211"
  size="2MB"
  level="200"
  pdfImage={pdfThumbnail}
  pdfFile={sample}
/> <PDFCard
        name="Feg 211"
        size="2MB"
        level="200"
        pdfImage={pdfThumbnail}
        pdfFile={sample}
      /> <PDFCard
      name="Feg 211"
      size="2MB"
      level="200"
      pdfImage={pdfThumbnail}
      pdfFile={sample}
    /> <PDFCard
    name="Feg 211"
    size="2MB"
    level="200"
    pdfImage={pdfThumbnail}
    pdfFile={sample}
  /> <PDFCard
  name="Feg 211"
  size="2MB"
  level="200"
  pdfImage={pdfThumbnail}
  pdfFile={sample}
/> <PDFCard
        name="Feg 211"
        size="2MB"
        level="200"
        pdfImage={pdfThumbnail}
        pdfFile={sample}
      /> <PDFCard
      name="Feg 211"
      size="200MB"
      level="500"
      pdfImage={pdfThumbnail}
      pdfFile={sample}
    />
      
      {/* Repeat this section for each PDF */}
    </div>
    
  );
};

export default ChempdfFiles;
