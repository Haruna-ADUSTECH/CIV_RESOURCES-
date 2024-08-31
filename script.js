const textbooks = [
    { name: "Open Textbook Library - Civil Engineering", url: "https://open.umn.edu/opentextbooks/subjects/engineering" },
    { name: "MIT OpenCourseWare - Civil and Environmental Engineering", url: "https://ocw.mit.edu/courses/civil-and-environmental-engineering/" },
    { name: "Saylor Academy - Civil Engineering", url: "https://learn.saylor.org/course/CE301" },
    { name: "Free Engineering Books - Civil Engineering", url: "https://www.freeengineeringbooks.com/Civil-Engineering-Books.php" },
    { name: "Engineering Books PDF", url: "https://www.engineeringbookspdf.com/" },
    { name: "Bookboon - Civil Engineering", url: "https://bookboon.com/en/civil-engineering-ebooks" },
    { name: "IntechOpen - Civil Engineering", url: "https://www.intechopen.com/books/subject/civil-engineering" },
    { name: "Textbook Revolution - Civil Engineering", url: "http://textbookrevolution.org/index.php/Engineering#Civil_Engineering" },
    { name: "Civil Engineering Knowledge Base", url: "https://www.aboutcivil.org/" },
    { name: "Library Genesis - Civil Engineering", url: "https://libgen.is/" },
    { name: "Online Civil Engineering Textbooks", url: "https://www.civilengineeringstudy.in/" },
    { name: "Lecture Notes - Civil Engineering", url: "https://lecturenotes.in/subject/291/civil-engineering" },
    { name: "CivilDigital - Free Civil Engineering Books", url: "https://civildigital.com/free-civil-engineering-books/" },
    { name: "NPTEL Civil Engineering Resources", url: "https://nptel.ac.in/courses/105" },
    { name: "Civil Engineering Textbooks - Elsevier", url: "https://www.elsevier.com/books-and-journals/civil-engineering" },
    { name: "eBooks for Civil Engineering Students", url: "https://www.sanfoundry.com/best-reference-books-civil-engineering/" },
    { name: "Coursera - Civil Engineering Specializations", url: "https://www.coursera.org/browse/physical-science-and-engineering/civil-engineering" },
    { name: "edX - Civil Engineering Courses", url: "https://www.edx.org/learn/civil-engineering" },
    { name: "SpringerLink - Civil Engineering", url: "https://link.springer.com/journal/40999" },
    { name: "Wiley Online Library - Civil Engineering", url: "https://onlinelibrary.wiley.com/subject/code/000020" }
];

const journals = [
    { name: "ASCE Library", url: "https://ascelibrary.org/" },
    { name: "Civil Engineering Journal", url: "https://civilejournal.org/" },
    { name: "Elsevier - Journal of Civil Engineering", url: "https://www.journals.elsevier.com/journal-of-civil-engineering" },
    { name: "MDPI - Civil Engineering", url: "https://www.mdpi.com/journal/civileng" },
    { name: "Springer - Journal of Infrastructure Systems", url: "https://www.springer.com/journal/12205" },
    { name: "ResearchGate - Civil Engineering Articles", url: "https://www.researchgate.net/journal/Civil-Engineering-Journal-2676-7605" },
    { name: "ScienceDirect - Civil Engineering", url: "https://www.sciencedirect.com/journal/journal-of-civil-engineering" },
    { name: "Taylor & Francis Online - Civil Engineering", url: "https://www.tandfonline.com/toc/tjce20/current" },
    { name: "ICE Virtual Library", url: "https://www.icevirtuallibrary.com/" },
    { name: "Open Civil Engineering Journal", url: "https://benthamopen.com/TOCIEJ/home/" },
    { name: "Advances in Civil Engineering", url: "https://www.hindawi.com/journals/ace/" },
    { name: "Journal of Civil and Environmental Engineering", url: "https://www.longdom.org/civil-environmental-engineering.html" },
    { name: "Techno-Press Journals", url: "http://www.techno-press.org/?journal=ace" },
    { name: "Canadian Journal of Civil Engineering", url: "https://cdnsciencepub.com/journal/cjce" },
    { name: "Journal of Bridge Engineering", url: "https://ascelibrary.org/journal/jbenf2" },
    { name: "Journal of Geotechnical and Geoenvironmental Engineering", url: "https://ascelibrary.org/journal/jgtlcc" },
    { name: "Journal of Structural Engineering", url: "https://ascelibrary.org/journal/jsendh" },
    { name: "Journal of Hydraulic Engineering", url: "https://ascelibrary.org/journal/jhend8" },
    { name: "Journal of Transportation Engineering", url: "https://ascelibrary.org/journal/jtepbs" },
    { name: "Frontiers in Built Environment", url: "https://www.frontiersin.org/journals/built-environment" }
];

const aiTools = [
    { name: "OpenAI for Civil Engineering", url: "https://openai.com/" },
    { name: "DeepAI", url: "https://deepai.org/" },
    { name: "DataRobot", url: "https://www.datarobot.com/" },
    { name: "Google AI", url: "https://ai.google/" },
    { name: "IBM Watson", url: "https://www.ibm.com/watson" },
    { name: "Azure AI", url: "https://azure.microsoft.com/en-us/services/cognitive-services/" },
    { name: "TensorFlow", url: "https://www.tensorflow.org/" },
    { name: "PyTorch", url: "https://pytorch.org/" },
    { name: "MATLAB AI Toolbox", url: "https://www.mathworks.com/products/matlab.html" },
    { name: "Civils.ai", url: "https://civils.ai/" },
    { name: "Smart Infrastructure AI", url: "https://www.smartinfrastructure.ai/" },
    { name: "Kiwi AI", url: "https://www.kiwi.ai/" },
    { name: "AI for Building Design", url: "https://www.simscale.com/" },
    { name: "DeepMind", url: "https://www.deepmind.com/" },
    { name: "UrbanFootprint AI", url: "https://urbanfootprint.com/" },
    { name: "Archistar AI", url: "https://archistar.ai/" },
    { name: "Bentley AI Tools", url: "https://www.bentley.com/en/products/brands/openai" },
    { name: "Seequent AI", url: "https://www.seequent.com/" },
    { name: "Skydio 3D Scan AI", url: "https://www.skydio.com/" },
    { name: "NVIDIA AI Tools", url: "https://developer.nvidia.com/" }
];

const otherResources = [
    { name: "American Society of Civil Engineers (ASCE)", url: "https://www.asce.org/" },
    { name: "Institution of Civil Engineers (ICE)", url: "https://www.ice.org.uk/" },
    { name: "Concrete Network", url: "https://www.concretenetwork.com/" },
    { name: "Geoengineer.org", url: "https://www.geoengineer.org/" },
    { name: "Civilax", url: "https://www.civilax.com/" },
    { name: "Engineering Toolbox", url: "https://www.engineeringtoolbox.com/" },
    { name: "National Concrete Masonry Association", url: "https://ncma.org/" },
    { name: "Concrete Construction Magazine", url: "https://www.concreteconstruction.net/" },
    { name: "Cement.org", url: "https://www.cement.org/" },
    { name: "Steel Construction.info", url: "https://www.steelconstruction.info/" },
    { name: "Bridge Design & Engineering", url: "https://www.bridgeweb.com/" },
    { name: "The Constructor", url: "https://theconstructor.org/" },
    { name: "Engineering Ethics", url: "https://onlineethics.org/" },
    { name: "Civil Engineering Forum", url: "https://www.civilengineeringforum.me/" },
    { name: "Civil Engineering Community", url: "https://civilengineeringcommunity.com/" },
    { name: "Civil Engineering Resources", url: "https://civilenggworld.com/" },
    { name: "Building Research Establishment (BRE)", url: "https://www.bregroup.com/" },
    { name: "Royal Institute of British Architects (RIBA)", url: "https://www.architecture.com/" },
    { name: "Society of Construction Law", url: "https://www.scl.org.uk/" },
    { name: "Construction Management Association of America (CMAA)", url: "https://www.cmaanet.org/" },
    { name: "American Concrete Institute (ACI)", url: "https://www.concrete.org/" },
    { name: "Global Infrastructure Hub", url: "https://www.gihub.org/" },
    { name: "European Construction Institute", url: "https://www.eci-online.org/" },
    { name: "New Civil Engineer", url: "https://www.newcivilengineer.com/" },
    { name: "Urban Land Institute", url: "https://uli.org/" },
    { name: "US Green Building Council (USGBC)", url: "https://www.usgbc.org/" },
    { name: "National Institute of Building Sciences", url: "https://www.nibs.org/" },
    { name: "Structural Engineers Association", url: "https://www.seaoc.org/" },
    { name: "Construction Industry Institute", url: "https://www.construction-institute.org/" },
    { name: "Council on Tall Buildings and Urban Habitat (CTBUH)", url: "https://www.ctbuh.org/" },
    { name: "International Federation of Consulting Engineers (FIDIC)", url: "https://fidic.org/" },
    { name: "American Railway Engineering and Maintenance-of-Way Association (AREMA)", url: "https://www.arema.org/" },
    { name: "Construction Innovation Hub", url: "https://constructioninnovationhub.org.uk/" },
    { name: "American Council of Engineering Companies (ACEC)", url: "https://www.acec.org/" },
    { name: "International Association for Bridge and Structural Engineering (IABSE)", url: "https://www.iabse.org/" },
    { name: "International Code Council (ICC)", url: "https://www.iccsafe.org/" }
];
// Populate textbooks
const textbookList = document.getElementById('textbook-list');
textbooks.forEach(textbook => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = textbook.url;
    a.textContent = textbook.name;
    a.target = "_blank"; // Open in a new tab
    li.appendChild(a);
    textbookList.appendChild(li);
});

// Populate journals
const journalList = document.getElementById('journal-list');
journals.forEach(journal => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = journal.url;
    a.textContent = journal.name;
    a.target = "_blank";
    li.appendChild(a);
    journalList.appendChild(li);
});

// Populate AI tools
const aiList = document.getElementById('ai-list');
aiTools.forEach(tool => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = tool.url;
    a.textContent = tool.name;
    a.target = "_blank";
    li.appendChild(a);
    aiList.appendChild(li);
});

// Populate other resources
const otherList = document.getElementById('other-list');
otherResources.forEach(resource => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = resource.url;
    a.textContent = resource.name;
    a.target = "_blank";
    li.appendChild(a);
    otherList.appendChild(li);
});
