import React from "react";

class CVDownload extends React.Component {
  // Function to handle the download
  handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://i.imgur.com/YOTUR79.png"; // URL of the image to download
    link.setAttribute("download", "https://i.imgur.com/YOTUR79.png"); // Set the download attribute with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  render() {
    return (
      <div className="cv-download-container">
        <h1> My CV</h1>
        <p>Click the button below to Checkout my CV.</p>
        <button onClick={this.handleDownload}>Download CV</button>
      </div>
    );
  }
}

export default CVDownload;
