import React from 'react';
import PDF from 'react-pdf-js';
 
export default class ResumePDF extends React.Component {
  state = {}; 
  render() {
    return (
      <div>
        <PDF
          file="../images/RansonNambaResume.PDF"
          onDocumentComplete={this.onDocumentComplete}
          page={this.state.page}
        />
      </div>
    )
  }
}
 
