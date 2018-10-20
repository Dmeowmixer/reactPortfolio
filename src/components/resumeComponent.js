import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
 
export default class ResumePDF extends Component {
 
 
  render() {
 
    return (
      <div>
        <Document
          file="../images/RansonNambaResume.pdf"
          onLoadSuccess={this.onDocumentLoad}
        >
        </Document>
      </div>
    );
  }
}