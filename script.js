const textbooks = [
    { name: "Engineering Mechanics: Dynamics", url: "https://dspace.mit.edu/handle/1721.1/33982" },
    { name: "Introduction to Geotechnical Engineering", url: "https://www.geotechpedia.com/Publication" },
    { name: "Civil Engineering Materials", url: "https://www.civildigital.com/civil-engineering-materials-textbooks/" },
    { name: "Structural Analysis Textbooks", url: "https://www.structurespro.info/books" },
    { name: "Fundamentals of Structural Analysis", url: "https://www.ce.memphis.edu/1112/notes/book/Chapters/" },
    { name: "Concrete Design Handbook", url: "https://www.cement.org/docs/default-source/fc_concrete_technology/dictionary.pdf" },
    { name: "Hydraulic Engineering Textbooks", url: "https://openstax.org/subjects/engineering" },
    { name: "Steel Design Guide", url: "https://www.aisc.org/education/design-guides/" },
    { name: "Foundation Design Textbooks", url: "https://b-ok.africa/s/foundation%20design" },
    { name: "Environmental Engineering and Science", url: "https://www.engr.colostate.edu/ce/ce-old/courses/ce421/Syllabus.pdf" },
    { name: "Fluid Mechanics: Fundamentals and Applications", url: "https://www.academia.edu/35478868/" },
    { name: "Transportation Engineering and Planning", url: "https://archive.org/details/TransportationEngineeringAndPlanning" },
    { name: "Building Construction Illustrated", url: "https://www.pdfdrive.com/building-construction-illustrated-pdf-download.html" },
    { name: "Surveying and Levelling", url: "https://www.civilengineering.pk/category/civil-engineering-books/" },
    { name: "Reinforced Concrete Design", url: "https://www.elsevier.com/books/reinforced-concrete-design/standards/978-0-7506-6814-9" },
    { name: "Mechanics of Materials", url: "https://books.google.com/books?id=Mechanics-of-Materials" },
    { name: "Construction Project Management", url: "https://www.coursera.org/learn/construction-management" },
    { name: "Introduction to Structural Analysis", url: "https://www.barnesandnoble.com/w/introduction-to-structural-analysis-john-bentley/1115734382" },
    { name: "Water Resources Engineering", url: "https://archive.org/details/water-resources-engineering" },
    { name: "Geotechnical Engineering Principles", url: "https://www.amazon.com/Geotechnical-Engineering-Principles-Practices-Second/dp/0132368494" }
];

const journals = [
    { name: "Journal of Civil Engineering and Management", url: "https://journals.vgtu.lt/index.php/JCEM" },
    { name: "ASCE Library", url: "https://ascelibrary.org/" },
    { name: "Journal of Structural Engineering", url: "https://ascelibrary.org/journal/jseecc" },
    { name: "International Journal of Civil Engineering", url: "https://www.springer.com/journal/40999" },
    { name: "Journal of Bridge Engineering", url: "https://ascelibrary.org/journal/jbenf2" },
    { name: "Journal of Construction Engineering and Management", url: "https://ascelibrary.org/journal/jcemd4" },
    { name: "Journal of Materials in Civil Engineering", url: "https://ascelibrary.org/journal/jmcee7" },
    { name: "Earthquake Engineering and Structural Dynamics", url: "https://onlinelibrary.wiley.com/journal/10969845" },
    { name: "Journal of Hydraulic Research", url: "https://www.tandfonline.com/toc/tjhr20/current" },
    { name: "Journal of Environmental Engineering", url: "https://ascelibrary.org/journal/joeedu" },
    { name: "Geotechnique", url: "https://www.icevirtuallibrary.com/journal/geot" },
    { name: "Structural Safety", url: "https://www.journals.elsevier.com/structural-safety" },
    { name: "Cement and Concrete Research", url: "https://www.journals.elsevier.com/cement-and-concrete-research" },
    { name: "International Journal of Sustainable Built Environment", url: "https://www.sciencedirect.com/journal/international-journal-of-sustainable-built-environment" },
    { name: "Journal of Geotechnical and Geoenvironmental Engineering", url: "https://ascelibrary.org/journal/jggefk" },
    { name: "Engineering Structures", url: "https://www.journals.elsevier.com/engineering-structures" },
    { name: "Journal of Infrastructure Systems", url: "https://ascelibrary.org/journal/jitse4" },
    { name: "Journal of Transportation Engineering", url: "https://ascelibrary.org/journal/jtepbs" },
    { name: "Journal of Water Resources Planning and Management", url: "https://ascelibrary.org/journal/jwrmd5" },
    { name: "Smart Structures and Systems", url: "https://www.techno-press.org/journals/sst" }
];

const aiTools = [
    { name: "AI for Structural Analysis", url: "https://www.researchgate.net/publication/327200711_Artificial_Intelligence_in_Structural_Engineering" },
    { name: "Bluebeam Revu", url: "https://www.bluebeam.com/" },
    { name: "Rhino Grasshopper", url: "https://www.rhino3d.com/features/grasshopper/" },
    { name: "MATLAB Civil Engineering Toolbox", url: "https://www.mathworks.com/solutions/civil-engineering.html" },
    { name: "MIDAS Civil", url: "https://www.midasuser.com/products/midas-civil/" },
    { name: "Tekla Structural Designer", url: "https://www.tekla.com/products/tekla-structural-designer" },
    { name: "AutoCAD Civil 3D", url: "https://www.autodesk.com/products/civil-3d/overview" },
    { name: "Dlubal RFEM", url: "https://www.dlubal.com/en/" },
    { name: "ANSYS Civil Engineering", url: "https://www.ansys.com/industries/infrastructure-and-cities" },
    { name: "Plaxis Geotechnical Analysis", url: "https://www.bentley.com/software/plaxis/" },
    { name: "Revit Structure", url: "https://www.autodesk.com/products/revit/overview" },
    { name: "SOFiSTiK", url: "https://www.sofistik.com/" },
    { name: "Artificial Intelligence for Smart City Applications", url: "https://www.mdpi.com/journal/applsci/special_issues/smart_city" },
    { name: "ETABS Structural Analysis Software", url: "https://www.csiamerica.com/products/etabs" },
    { name: "STAAD.Pro", url: "https://www.bentley.com/software/staadpro/" },
    { name: "SAP2000 Structural Analysis", url: "https://www.csiamerica.com/products/sap2000" },
    { name: "DeepEX Excavation Design Software", url: "https://www.deepex.com/" },
    { name: "Geo5 Geotechnical Software", url: "https://www.finesoftware.eu/" },
    { name: "AI for Predictive Maintenance in Civil Infrastructure", url: "https://www.mdpi.com/journal/infrastructures/special_issues/AI_Predictive" },
    { name: "Machine Learning for Structural Health Monitoring", url: "https://link.springer.com/book/10.1007/978-3-030-62193-6" },
    { name: "OpenFOAM CFD Software for Civil Applications", url: "https://www.openfoam.com/" },
    { name: "Digital Twins for Civil Engineering", url: "https://www.ge.com/digital/applications/digital-twin" },
    { name: "ArcGIS for Civil Engineers", url: "https://www.esri.com/en-us/arcgis/products/arcgis-online/overview" }
];

const otherResources = [
    { name: "American Society of Civil Engineers (ASCE)", url: "https://www.asce.org/" },
    { name: "Institution of Civil Engineers (ICE)", url: "https://www.ice.org.uk/" },
    { name: "Structural Engineers Association", url: "https://www.seaoc.org/" },
    { name: "Concrete Society", url: "https://www.concrete.org.uk/" },
    { name: "Building Research Establishment (BRE)", url: "https://www.bregroup.com/" },
    { name: "International Federation for Structural Concrete (fib)", url: "https://www.fib-international.org/" },
    { name: "American Concrete Institute", url: "https://www.concrete.org/" },
    { name: "Engineering Toolbox", url: "https://www.engineeringtoolbox.com/" },
    { name: "Civil Engineering Forum", url: "https://www.civilax.com/" },
    { name: "Society of Civil Engineers", url: "https://www.societyofcivilengineers.com/" },
    { name: "National Institute of Building Sciences", url: "https://www.nibs.org/" },
    { name: "Geoengineer.org", url: "https://www.geoengineer.org/" },
    { name: "Civil Engineering Portal", url: "https://www.engineeringcivil.com/" },
    { name: "Concrete Network", url: "https://www.concretenetwork.com/" },
    { name: "Construction Dive", url: "https://www.constructiondive.com/" },
    { name: "Engineering Ethics", url: "https://onlineethics.org/" },
    { name: "Royal Institute of British Architects (RIBA)", url: "https://www.architecture.com/" },
    { name: "Institute of Transportation Engineers (ITE)", url: "https://www.ite.org/" },
    { name: "Construction Institute", url: "https://www.construction-institute.org/" },
    { name: "National Association of Home Builders (NAHB)", url: "https://www.nahb.org/" }
];

// Function to display links in the respective categories
function displayLinks() {
    const textbooksList = document.getElementById('textbooks-list');
    const journalsList = document.getElementById('journals-list');
    const aiToolsList = document.getElementById('ai-tools-list');
    const otherResourcesList = document.getElementById('other-resources-list');

    // Add textbook links
    textbooks.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.url}" target="_blank">${item.name}</a>`;
        textbooksList.appendChild(li);
    });

    // Add journal links
    journals.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.url}" target="_blank">${item.name}</a>`;
        journalsList.appendChild(li);
    });

    // Add AI tool links
    aiTools.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.url}" target="_blank">${item.name}</a>`;
        aiToolsList.appendChild(li);
    });

    // Add other resources links
    otherResources.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.url}" target="_blank">${item.name}</a>`;
        otherResourcesList.appendChild(li);
    });
}

// Call the displayLinks function when the page loads
document.addEventListener('DOMContentLoaded', displayLinks);
