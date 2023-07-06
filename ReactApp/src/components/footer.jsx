import React from "react"; 

function MyFooter() {
  const footerStyle = {
    backgroundColor: "lightgray",
    padding: "30px",
    textAlign: "center", 
    opacity: 0.7,
  };

  const contentStyle = {
    color: '#444', 
    fontSize: '15px',
  };
  return (
    
    <footer style={footerStyle}>

      <div style={contentStyle}>
        <p>
          Designed by{" "}
          <a
            href="https://github.com/HarunSMetin"
            rel="noopener"
            className="small-link"
            target="_blank"
          >
            Harun Serkan Metin
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/ardaeerol"
            rel="noopener"
            className="small-link"
            target="_blank"
          >
            Arda Erol
          </a>
        </p>
      </div>
    </footer >
    
  );
}
export default MyFooter;