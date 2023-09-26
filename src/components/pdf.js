
// import "tailwind-pdf-viewer/style.css";
import pdf from "../resume.pdf";

const App = () => {
  return(
    <>
    
        <object data={pdf} 
                width="900"
                height="600"
                className="ml-2">
        </object>
    </>
  );
};

export default App;