// Categories and their respective resources with free and open-source links
const textbooks = [
    { name: "Open Textbook Library - Civil Engineering", url: "https://open.umn.edu/opentextbooks/subjects/civil-engineering" },
    { name: "OpenStax - Engineering", url: "https://openstax.org/subjects/engineering" },
    { name: "FreeTechBooks - Civil Engineering", url: "http://www.freetechbooks.com/civil-engineering-f69.html" },
    { name: "MERLOT - Civil Engineering Textbooks", url: "https://www.merlot.org/merlot/materials.htm?category=370757" },
    { name: "LibreTexts - Engineering Library", url: "https://eng.libretexts.org/" },
    { name: "Engineering LibreTexts - Civil Engineering", url: "https://eng.libretexts.org/Bookshelves/Civil_Engineering" },
    { name: "Bookboon - Free Engineering Books", url: "https://bookboon.com/en/engineering-ebooks" },
    { name: "IntechOpen - Civil Engineering", url: "https://www.intechopen.com/books/subject/civil-engineering" },
    { name: "Saylor Academy - Engineering Mechanics", url: "https://learn.saylor.org/course/view.php?id=61" },
    { name: "MIT OpenCourseWare - Civil and Environmental Engineering", url: "https://ocw.mit.edu/courses/civil-and-environmental-engineering/" },
    { name: "Textbook Revolution - Engineering", url: "http://textbookrevolution.org/index.php/Engineering" },
    { name: "NPTEL - Civil Engineering", url: "https://nptel.ac.in/courses/105" },
    { name: "Virtual University - Civil Engineering", url: "https://www.vu.edu.pk/enggtech/engineering/engineering-books/civil-engineering" },
    { name: "OER Commons - Civil Engineering", url: "https://www.oercommons.org/courses/civil-engineering" },
    { name: "eBooks Directory - Civil Engineering", url: "https://www.e-booksdirectory.com/listing.php?category=149" },
    { name: "BCcampus Open Textbooks - Civil Engineering", url: "https://open.bccampus.ca/find-open-textbooks/?uuid=c465a09d-cff2-433a-9ab5-4fdfc7e25564&contributor=&keyword=" },
    { name: "Global Text Project - Engineering", url: "http://globaltext.terry.uga.edu/books" },
    { name: "ASEE Engineering Education Resources", url: "https://www.asee.org/resources" },
    { name: "Digital Commons - Engineering Texts", url: "https://digitalcommons.bucknell.edu/engineering_books/" },
    { name: "Open Access Books - Civil Engineering", url: "https://www.intechopen.com/open-access-books/civil-engineering" }
];

const journals = [
    { name: "Directory of Open Access Journals (DOAJ)", url: "https://www.doaj.org/" },
    { name: "Open Access Journals - Civil Engineering", url: "https://www.hindawi.com/journals/ace/" },
    { name: "Journal of Civil Engineering Research", url: "https://www.scirp.org/journal/jbcpr/" },
    { name: "Engineering Open Access Journals", url: "https://benthamopen.com/TOCIEJ/home/" },
    { name: "SpringerOpen - Civil and Environmental Engineering", url: "https://civil.springeropen.com/" },
    { name: "Journal of Open Engineering", url: "https://www.degruyter.com/journal/key/eng/html" },
    { name: "Open Science Journal - Civil Engineering", url: "https://osj.journalpress.org/index.php/civil-eng" },
    { name: "Materials Open Access Journal", url: "https://www.mdpi.com/journal/materials" },
    { name: "OAJI - Open Access Journal Index", url: "https://oaji.net/journal-catalog.html" },
    { name: "Open Journal of Civil Engineering", url: "https://www.scirp.org/journal/ojce/" },
    { name: "International Journal of Civil and Structural Engineering", url: "https://www.ipublishing.co.in/jarvol4no12013.html" },
    { name: "ResearchGate - Civil Engineering Publications", url: "https://www.researchgate.net/publication/322930488_Open_Access_Journals_in_Civil_Engineering" },
    { name: "Open Civil Engineering Journal", url: "https://benthamopen.com/TOCIEJ/home/" },
    { name: "Indian Journal of Civil Engineering", url: "https://www.ijcivils.com/" },
    { name: "CiteSeerX - Civil Engineering Papers", url: "http://citeseerx.ist.psu.edu/index" },
    { name: "Research Ideas and Outcomes - Civil Engineering", url: "https://riojournal.com/" },
    { name: "Digital Library of Open Access Journals", url: "http://www.doaj.org/" },
    { name: "PeerJ - Civil Engineering", url: "https://peerj.com/subjects/engineering/civil-engineering/" },
    { name: "Scholarly Open Access - Civil Engineering", url: "https://www.scholarlyoa.com/engineering-journals" },
    { name: "Open Access Texts - Civil Engineering", url: "https://opentextbc.ca/civilengineering/" }
];

const aiTools = [
    { name: "TensorFlow", url: "https://www.tensorflow.org/" },
    { name: "Keras", url: "https://keras.io/" },
    { name: "Scikit-Learn", url: "https://scikit-learn.org/" },
    { name: "OpenAI Codex", url: "https://beta.openai.com/codex/" },
    { name: "Caffe", url: "http://caffe.berkeleyvision.org/" },
    { name: "OpenCV", url: "https://opencv.org/" },
    { name: "Deep Learning for Java (DL4J)", url: "https://deeplearning4j.konduit.ai/" },
    { name: "IBM Watson Studio", url: "https://www.ibm.com/cloud/watson-studio" },
    { name: "H2O.ai", url: "https://www.h2o.ai/" },
    { name: "AutoKeras", url: "https://autokeras.com/" },
    { name: "KNIME", url: "https://www.knime.com/" },
    { name: "RapidMiner", url: "https://rapidminer.com/" },
    { name: "Weka", url: "https://www.cs.waikato.ac.nz/ml/weka/" },
    { name: "Anaconda", url: "https://www.anaconda.com/" },
    { name: "Google Colab", url: "https://colab.research.google.com/" },
    { name: "DataRobot", url: "https://www.datarobot.com/" },
    { name: "Microsoft Azure Machine Learning", url: "https://azure.microsoft.com/en-us/services/machine-learning/" },
    { name: "Jupyter Notebooks", url: "https://jupyter.org/" },
    { name: "Orange Data Mining", url: "https://orangedatamining.com/" },
    { name: "AI for Earth by Microsoft", url: "https://www.microsoft.com/en-us/ai/ai-for-earth" }
];

// Function to dynamically display the links in each category
function displayResources(category) {
    const container = document.getElementById("resourceContainer");
    container.innerHTML = ""; // Clear previous content

    let resources;
    if (category === 'textbooks') {
        resources = textbooks;
    } else if (category === 'journals') {
        resources = journals;
    } else if (category === 'aiTools') {
        resources = aiTools;
    }

    resources.forEach(resource => {
        const linkElement = document.createElement("a");
        linkElement.href = resource.url;
        linkElement.target = "_blank"; // Open link in a new tab
        linkElement.textContent = resource.name;
        linkElement.className = "resource-link";
        container.appendChild(linkElement);
    });
}
