// Array of Textbooks links
const textbooks = [
    { name: "Civil Engineering Handbook by CRC Press", url: "https://www.crcpress.com/Civil-Engineering-Handbook/Chen/p/book/9780849309588" },
    { name: "Structural Analysis by Pearson", url: "https://www.pearson.com/store/p/structural-analysis/P100000063349" },
    { name: "Geotechnical Engineering by Wiley", url: "https://www.wiley.com/en-us/Geotechnical+Engineering%3A+Principles+and+Practices" },
    { name: "Hydraulics in Civil Engineering by McGraw Hill", url: "https://www.mheducation.com/highered/product/hydraulics-civil-environmental-engineering-bruce-w-king-morris-w-levy/M9780073397863.html" },
    { name: "Pavement Engineering: Principles and Practice", url: "https://www.routledge.com/Pavement-Engineering-Principles-and-Practice/Yoder-Witczak/p/book/9780367393075" },
    { name: "Construction Project Management by Wiley", url: "https://www.wiley.com/en-us/Construction+Project+Management%3A+A+Practical+Guide+to+Field+Construction+Management-p-9781119812221" },
    { name: "Structural Concrete: Theory and Design", url: "https://www.wiley.com/en-us/Structural+Concrete%3A+Theory+and+Design%2C+7th+Edition-p-9781119375974" },
    { name: "Principles of Foundation Engineering", url: "https://www.cengage.com/c/principles-of-foundation-engineering-9e-das/9781305081550" },
    { name: "Traffic and Highway Engineering by Cengage", url: "https://www.cengage.com/c/traffic-and-highway-engineering-5e-garber/9781133605157/" },
    { name: "Soil Mechanics in Engineering Practice", url: "https://www.wiley.com/en-us/Soil+Mechanics+in+Engineering+Practice%2C+3rd+Edition-p-9781118478904" },
    { name: "Principles of Structural Design by CRC Press", url: "https://www.routledge.com/Principles-of-Structural-Design-Wood-Steel-and-Concrete-2nd-Edition/Shrikhande-Bhardwaj/p/book/9780367026695" },
    { name: "Environmental Engineering: Fundamentals, Sustainability, Design", url: "https://www.wiley.com/en-us/Environmental+Engineering%3A+Fundamentals%2C+Sustainability%2C+Design-p-9781119721801" },
    { name: "Introduction to Water Resources and Environmental Issues", url: "https://www.cambridge.org/core/books/introduction-to-water-resources-and-environmental-issues/58B35A7B9A987B1FA7EEA875A09C9CB5" },
    { name: "Principles of Geotechnical Engineering by Cengage", url: "https://www.cengage.com/c/principles-of-geotechnical-engineering-9e-das/9781305970953/" },
    { name: "Steel Design by McGraw Hill", url: "https://www.mheducation.com/highered/product/steel-design-segal/M0078023034.html" },
    { name: "Introduction to Civil Engineering Systems by Springer", url: "https://link.springer.com/book/10.1007/978-3-319-67591-4" },
    { name: "Reinforced Concrete Design by Pearson", url: "https://www.pearson.com/store/p/reinforced-concrete-design/P100002202114" },
    { name: "Building Construction Handbook by Routledge", url: "https://www.routledge.com/Building-Construction-Handbook/Chudley-Greeno/p/book/9780367135434" },
    { name: "Fluid Mechanics for Civil Engineers by Wiley", url: "https://www.wiley.com/en-us/Fluid+Mechanics+for+Civil+Engineers%3A+Essentials+of+Engineering+Hydraulics-p-9781119079745" },
    { name: "Construction Materials, Methods, and Techniques by Cengage", url: "https://www.cengage.com/c/construction-materials-methods-and-techniques-5e-spence/9781337632768/" }
];

// Array of Journal links
const journals = [
    { name: "ASCE Library", url: "https://ascelibrary.org/" },
    { name: "Journal of Civil Engineering and Management", url: "https://www.tandfonline.com/toc/tcem20/current" },
    { name: "Journal of Structural Engineering", url: "https://ascelibrary.org/journal/jstepv" },
    { name: "Geotechnical and Geoenvironmental Engineering Journal", url: "https://ascelibrary.org/journal/geofem" },
    { name: "Construction and Building Materials", url: "https://www.journals.elsevier.com/construction-and-building-materials" },
    { name: "Journal of Environmental Engineering", url: "https://ascelibrary.org/journal/joeedu" },
    { name: "Journal of Bridge Engineering", url: "https://ascelibrary.org/journal/jbenf2" },
    { name: "Journal of Infrastructure Systems", url: "https://ascelibrary.org/journal/jinsef" },
    { name: "Journal of Materials in Civil Engineering", url: "https://ascelibrary.org/journal/jmcee7" },
    { name: "Automation in Construction", url: "https://www.journals.elsevier.com/automation-in-construction" },
    { name: "Journal of Hydraulic Engineering", url: "https://ascelibrary.org/journal/jhyeff" },
    { name: "Earthquake Engineering & Structural Dynamics", url: "https://onlinelibrary.wiley.com/journal/10969845" },
    { name: "Transportation Research Record", url: "https://journals.sagepub.com/home/trr" },
    { name: "Journal of Water Resources Planning and Management", url: "https://ascelibrary.org/journal/jwrmd5" },
    { name: "Journal of Structural Fire Engineering", url: "https://www.emerald.com/insight/publication/issn/2040-2317" },
    { name: "Engineering Structures", url: "https://www.journals.elsevier.com/engineering-structures" },
    { name: "Computers and Geotechnics", url: "https://www.journals.elsevier.com/computers-and-geotechnics" },
    { name: "Structural Safety", url: "https://www.journals.elsevier.com/structural-safety" },
    { name: "Journal of Construction Engineering and Management", url: "https://ascelibrary.org/journal/jcemd4" },
    { name: "Bulletin of Earthquake Engineering", url: "https://www.springer.com/journal/10518" }
];

// Array of AI Tools links
const aiTools = [
    { name: "OpenAI Codex for Structural Design", url: "https://openai.com/research/" },
    { name: "SkyCiv Structural Engineering Software", url: "https://skyciv.com/" },
    { name: "Autodesk Revit", url: "https://www.autodesk.com/products/revit/overview" },
    { name: "CivilGEO GeoHECRAS", url: "https://www.civilgeo.com/products/geohecras/" },
    { name: "MATLAB Civil Engineering Toolkit", url: "https://www.mathworks.com/solutions/civil-engineering.html" },
    { name: "Tekla Structures by Trimble", url: "https://www.tekla.com/products/tekla-structures" },
    { name: "Bluebeam Revu", url: "https://www.bluebeam.com/revu" },
    { name: "Bentley Systems STAAD.Pro", url: "https://www.bentley.com/en/products/product-line/structural-analysis-software/staad-pro" },
    { name: "PlanGrid Construction Productivity Software", url: "https://construction.autodesk.com/products/plangrid/" },
    { name: "Autodesk Civil 3D", url: "https://www.autodesk.com/products/civil-3d/overview" },
    { name: "RISA Structural Analysis Software", url: "https://risa.com/" },
    { name: "MIDAS Civil", url: "https://www.midasoft.com/products/midas-civil" },
    { name: "SAFE Structural Engineering Software", url: "https://www.csiamerica.com/products/safe" },
    { name: "Robot Structural Analysis", url: "https://www.autodesk.com/products/robot-structural-analysis/overview" },
    { name: "Trimble Connect", url: "https://connect.trimble.com/" },
    { name: "CSI ETABS", url: "https://www.csiamerica.com/products/etabs" },
    { name: "AI Concrete Assistant", url: "https://www.ai-concrete.com/" },
    { name: "SimScale for Civil Engineers", url: "https://www.simscale.com/solutions/civil-engineering/" },
    { name: "Deep Learning for Civil Engineers by NVIDIA", url: "https://developer.nvidia.com/deep-learning-civil-engineering" },
    { name: "InfraWorks by Autodesk", url: "https://www.autodesk.com/products/infraworks/overview" }
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
