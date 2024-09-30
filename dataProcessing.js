function generateContent(data) {
    return `${data.title ? `title: ${data.title}  \n` : ""}${
      data.date ? `date: ${data.date}  \n` : ""
    }
    
    ${data.releaseyear ? `description: ${data.releaseyear}  \n` : ""}
  ${data.locations ? `locations: ${data.locations}  \n` : ""}
  ${data.funfacts ? `funfacts: ${data.funfacts}  \n` : ""}
  ${data.productioncompany ? `productioncompany: ${data.productioncompany}  \n` : ""}
  ${data.distributor ? `distributor: ${data.distributor}  \n` : ""}
  ${data.director ? `director: ${data.director}  \n` : ""}
  ${data.writer ? `writer: ${data.writer}  \n` : ""}
   ${data.actor1 ? `actor1: ${data.actor1}  \n` : ""}
    ${data.actor2 ? `actor2: ${data.actor2}  \n` : ""}
     ${data.actor3 ? `actor3: ${data.actor3}  \n` : ""}
      ${data.sffindneighborhoods ? `sffindneighborhoods: ${data.sffindneighborhoods}  \n` : ""}
       ${data.analysisneighborhoods ? `analysisneighborhoods: ${data.analysisneighborhoods}  \n` : ""}
        ${data.currentsupervisordistricts ? `currentsupervisordistricts: ${data.currentsupervisordistricts}  \n` : ""}
    `;
  }
  
  function generateContentHTML(data) {
    return `${data.title ? `<p><strong>Title:</strong> ${data.title}</p>` : ""}${
      data.date ? `<p><strong>Date:</strong> ${data.date}</p>` : ""
    }
    
    ${
      data.releaseyear ? `<p><strong>ReleaseYear:</strong> ${data.releaseyear}</p>` : ""
    }${
      data.locations ? `<p><strong>Locations:</strong> ${data.locations}</p>` : ""
    }${
      data.funfacts ? `<p><strong>FunFacts:</strong> ${data.funfacts}</p>` : ""
    }
    ${
      data.productioncompany ? `<p><strong>ProductionCompany:</strong> ${data.productioncompany}</p>` : ""
    }${
      data.distributor ? `<p><strong>Distributor:</strong> ${data.distributor}</p>` : ""
    }${
      data.director ? `<p><strong>Director:</strong> ${data.director}</p>` : ""
    }${
      data.writer ? `<p><strong>Writer:</strong> ${data.writer}</p>` : ""
    }
    ${
      data.actor1 ? `<p><strong>Actor1:</strong> ${data.actor1}</p>` : ""
    }
    ${
      data.actor2 ? `<p><strong>Actor2:</strong> ${data.actor2}</p>` : ""
    }
    ${
      data.actor3 ? `<p><strong>Actor3:</strong> ${data.actor3}</p>` : ""
    }
    ${
      data.sffindneighborhoods ? `<p><strong>SfFindNeighborhoods:</strong> ${data.sffindneighborhoods}</p>` : ""
    }
    ${
      data.analysisneighborhoods ? `<p><strong>AnalysisNeighborhoods:</strong> ${data.analysisneighborhoods}</p>` : ""
    }
    ${
      data.currentsupervisordistricts ? `<p><strong>CurrentSupervisorDistricts:</strong> ${data.currentsupervisordistricts}</p>` : ""
    }
    
    `;
  }

  module.exports = {
    generateContent, generateContentHTML
  };