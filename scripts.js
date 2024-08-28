// Sample Data for Resources
const resources = {
    "Textbooks": [
        { name: "Fundamentals of Civil Engineering", link: "https://www.civildaily.com/fundamentals" },
        { name: "Structural Analysis", link: "https://www.civildaily.com/structural-analysis" },
        { name: "Geotechnical Engineering", link: "https://www.civildaily.com/geotechnical-engineering" },
        { name: "Hydrology and Hydraulics", link: "https://www.civildaily.com/hydrology-hydraulics" },
        { name: "Transportation Engineering", link: "https://www.civildaily.com/transportation-engineering" },
        { name: "Construction Management", link: "https://www.civildaily.com/construction-management" },
        { name: "Bridge Engineering", link: "https://www.civildaily.com/bridge-engineering" },
        { name: "Reinforced Concrete Design", link: "https://www.civildaily.com/reinforced-concrete-design" },
        { name: "Steel Structures", link: "https://www.civildaily.com/steel-structures" },
        { name: "Environmental Engineering", link: "https://www.civildaily.com/environmental-engineering" },
        { name: "Foundation Engineering", link: "https://www.civildaily.com/foundation-engineering" },
        { name: "Highway Engineering", link: "https://www.civildaily.com/highway-engineering" },
        { name: "Finite Element Analysis", link: "https://www.civildaily.com/finite-element-analysis" },
        { name: "Water Resources Engineering", link: "https://www.civildaily.com/water-resources-engineering" },
        { name: "Surveying and Levelling", link: "https://www.civildaily.com/surveying-levelling" },
        { name: "Building Materials", link: "https://www.civildaily.com/building-materials" },
        { name: "Structural Dynamics", link: "https://www.civildaily.com/structural-dynamics" },
        { name: "Earthquake Engineering", link: "https://www.civildaily.com/earthquake-engineering" },
        { name: "Advanced Soil Mechanics", link: "https://www.civildaily.com/advanced-soil-mechanics" },
        { name: "Pavement Analysis and Design", link: "https://www.civildaily.com/pavement-analysis-design" }
    ],
    "Journals": [
        { name: "Journal of Civil Engineering", link: "https://www.civiljournal.com/journal-of-civil-engineering" },
        { name: "International Journal of Concrete Structures", link: "https://www.civiljournal.com/international-concrete-structures" },
        { name: "Journal of Structural Engineering", link: "https://www.civiljournal.com/journal-of-structural-engineering" },
        { name: "ASCE Civil Engineering Journal", link: "https://www.civiljournal.com/asce-civil-engineering" },
        { name: "Journal of Bridge Engineering", link: "https://www.civiljournal.com/journal-of-bridge-engineering" },
        { name: "Journal of Construction Engineering and Management", link: "https://www.civiljournal.com/construction-engineering-management" },
        { name: "Geotechnical Engineering Journal", link: "https://www.civiljournal.com/geotechnical-engineering" },
        { name: "Journal of Hydraulic Engineering", link: "https://www.civiljournal.com/journal-of-hydraulic-engineering" },
        { name: "International Journal of Geo-Engineering", link: "https://www.civiljournal.com/international-geo-engineering" },
        { name: "Journal of Water Resources Planning and Management", link: "https://www.civiljournal.com/water-resources-planning-management" },
        { name: "Journal of Transportation Engineering", link: "https://www.civiljournal.com/journal-of-transportation-engineering" },
        { name: "Journal of Environmental Engineering", link: "https://www.civiljournal.com/journal-of-environmental-engineering" },
        { name: "Journal of Earthquake Engineering", link: "https://www.civiljournal.com/journal-of-earthquake-engineering" },
        { name: "International Journal of Pavement Engineering", link: "https://www.civiljournal.com/international-pavement-engineering" },
        { name: "Journal of Sustainable Cement-Based Materials", link: "https://www.civiljournal.com/sustainable-cement-based-materials" },
        { name: "Journal of Advanced Concrete Technology", link: "https://www.civiljournal.com/advanced-concrete-technology" },
        { name: "Journal of Structural Fire Engineering", link: "https://www.civiljournal.com/structural-fire-engineering" },
        { name: "Journal of Sustainable Infrastructure", link: "https://www.civiljournal.com/sustainable-infrastructure" },
        { name: "International Journal of Structural Stability and Dynamics", link: "https://www.civiljournal.com/structural-stability-dynamics" },
        { name: "Journal of Advanced Transportation", link: "https://www.civiljournal.com/advanced-transportation" }
    ],
    "AI Tools": [
        { name: "AI Tool for Structural Design", link: "https://www.ai-tools.com/structural-design" },
        { name: "Machine Learning for Civil Engineering", link: "https://www.ai-tools.com/machine-learning-civil-engineering" },
        { name: "Civil Engineering AI Predictor", link: "https://www.ai-tools.com/ai-predictor" },
        { name: "Structural Optimization AI", link: "https://www.ai-tools.com/structural-optimization" },
        { name: "AI-Based Site Analysis Tool", link: "https://www.ai-tools.com/site-analysis" },
        { name: "Automated Quantity Takeoff", link: "https://www.ai-tools.com/quantity-takeoff" },
        { name: "Geotechnical Data AI Analysis", link: "https://www.ai-tools.com/geotechnical-data" },
        { name: "Traffic Flow Prediction AI", link: "https://www.ai-tools.com/traffic-flow-prediction" },
        { name: "Bridge Safety Monitoring AI", link: "https://www.ai-tools.com/bridge-safety-monitoring" },
        { name: "Smart City Planning AI", link: "https://www.ai-tools.com/smart-city-planning" },
        { name: "Pavement Condition Prediction AI", link: "https://www.ai-tools.com/pavement-condition-prediction" },
        { name: "Reinforced Concrete Design AI", link: "https://www.ai-tools.com/reinforced-concrete-design" },
        { name: "Building Information Modeling AI", link: "https://www.ai-tools.com/bim" },
        { name: "Hydrology Prediction AI", link: "https://www.ai-tools.com/hydrology-prediction" },
        { name: "AI-Driven Construction Risk Management", link: "https://www.ai-tools.com/construction-risk-management" },
        { name: "Earthquake Impact Assessment AI", link: "https://www.ai-tools.com/earthquake-impact" },
        { name: "AI for Construction Equipment Optimization", link: "https://www.ai-tools.com/construction-equipment-optimization" },
        { name: "Sustainable Construction AI Tool", link: "https://www.ai-tools.com/sustainable-construction" },
        { name: "Deep Learning for Structural Health Monitoring", link: "https://www.ai-tools.com/structural-health-monitoring" },
        { name: "AI for Environmental Impact Assessment", link: "https://www.ai-tools.com/environmental-impact-assessment" }
    ],
    "Other Resources": [
        { name: "Civil Engineering Resources Hub", link: "https://www.other-resources.com/civil-engineering-hub" },
        { name: "Online Civil Engineering Courses", link: "https://www.other-resources.com/online-courses" },
        { name: "Civil Engineering Forum", link: "https://www.other-resources.com/forum" },
        { name: "Concrete Design Tutorials", link: "https://www.other-resources.com/concrete-design-tutorials" },
        { name: "Engineering Software Downloads", link: "https://www.other-resources.com/software-downloads" },
        { name: "Free Civil Engineering Books", link: "https://www.other-resources.com/free-books" },
        { name: "Structural Engineering Library", link: "https://www.other-resources.com/structural-library" },
        { name: "Geotechnical Engineering Online Resources", link: "https://www.other-resources.com/geotechnical-resources" },
        { name: "Bridge Engineering Resources", link: "https://www.other-resources.com/bridge-resources" },
        { name: "Civil Engineering Calculators", link: "https://www.other-resources.com/calculators" },
        { name: "Pavement Design Resources", link: "https://www.other-resources.com/pavement-design" },
        { name: "Hydraulics and Hydrology Resources", link: "https://www.other-resources.com/hydraulics-hydrology" },
        { name: "Sustainable Building Materials", link: "https://www.other-resources.com/sustainable-building-materials" },
        { name: "Construction Project Management Resources", link: "https://www.other-resources.com/project-management-resources" },
        { name: "Civil Engineering Video Tutorials", link: "https://www.other-resources.com/video-tutorials" },
        { name: "Finite Element Analysis Software", link: "https://www.other-resources.com/fem-software" },
        { name: "Professional Civil Engineering Organizations", link: "https://www.other-resources.com/professional-organizations" },
        { name: "Urban Planning Resources", link: "https://www.other-resources.com/urban-planning" },
        { name: "Construction Safety Guidelines", link: "https://www.other-resources.com/construction-safety-guidelines" },
        { name: "Earthquake Engineering Resources", link: "https://www.other-resources.com/earthquake-engineering" }
    ]
};

// Function to populate resources
function populateResources() {
    Object.keys(resources).forEach(category => {
        const listElement = document.getElementById(`${category.toLowerCase().replace(' ', '-')}-list`);
        if (listElement) {
            resources[category].forEach(resource => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = resource.link;
                link.target = "_blank";
                link.textContent = resource.name;
                listItem.appendChild(link);
                listElement.appendChild(listItem);
            });
        }
    });
}

// Call the function to populate resources
populateResources();
