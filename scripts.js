// Sample Data for Resources
const resources = {
    "Textbooks": [
        { name: "Fundamentals of Civil Engineering", link: "https://example.com/textbook1" },
        { name: "Structural Analysis", link: "https://example.com/textbook2" },
        { name: "Geotechnical Engineering", link: "https://example.com/textbook3" },
        { name: "Hydrology and Hydraulics", link: "https://example.com/textbook4" },
        { name: "Transportation Engineering", link: "https://example.com/textbook5" },
        { name: "Construction Management", link: "https://example.com/textbook6" },
        { name: "Bridge Engineering", link: "https://example.com/textbook7" },
        { name: "Reinforced Concrete Design", link: "https://example.com/textbook8" },
        { name: "Steel Structures", link: "https://example.com/textbook9" },
        { name: "Environmental Engineering", link: "https://example.com/textbook10" },
        { name: "Foundation Engineering", link: "https://example.com/textbook11" },
        { name: "Highway Engineering", link: "https://example.com/textbook12" },
        { name: "Finite Element Analysis", link: "https://example.com/textbook13" },
        { name: "Water Resources Engineering", link: "https://example.com/textbook14" },
        { name: "Surveying and Levelling", link: "https://example.com/textbook15" },
        { name: "Building Materials", link: "https://example.com/textbook16" },
        { name: "Structural Dynamics", link: "https://example.com/textbook17" },
        { name: "Earthquake Engineering", link: "https://example.com/textbook18" },
        { name: "Advanced Soil Mechanics", link: "https://example.com/textbook19" },
        { name: "Pavement Analysis and Design", link: "https://example.com/textbook20" }
    ],
    "Journals": [
        { name: "Journal of Civil Engineering", link: "https://example.com/journal1" },
        { name: "International Journal of Concrete Structures", link: "https://example.com/journal2" },
        { name: "Journal of Structural Engineering", link: "https://example.com/journal3" },
        { name: "ASCE Civil Engineering Journal", link: "https://example.com/journal4" },
        { name: "Journal of Bridge Engineering", link: "https://example.com/journal5" },
        { name: "Journal of Construction Engineering and Management", link: "https://example.com/journal6" },
        { name: "Geotechnical Engineering Journal", link: "https://example.com/journal7" },
        { name: "Journal of Hydraulic Engineering", link: "https://example.com/journal8" },
        { name: "International Journal of Geo-Engineering", link: "https://example.com/journal9" },
        { name: "Journal of Water Resources Planning and Management", link: "https://example.com/journal10" },
        { name: "Journal of Transportation Engineering", link: "https://example.com/journal11" },
        { name: "Journal of Environmental Engineering", link: "https://example.com/journal12" },
        { name: "Journal of Earthquake Engineering", link: "https://example.com/journal13" },
        { name: "International Journal of Pavement Engineering", link: "https://example.com/journal14" },
        { name: "Journal of Sustainable Cement-Based Materials", link: "https://example.com/journal15" },
        { name: "Journal of Advanced Concrete Technology", link: "https://example.com/journal16" },
        { name: "Journal of Structural Fire Engineering", link: "https://example.com/journal17" },
        { name: "Journal of Sustainable Infrastructure", link: "https://example.com/journal18" },
        { name: "International Journal of Structural Stability and Dynamics", link: "https://example.com/journal19" },
        { name: "Journal of Advanced Transportation", link: "https://example.com/journal20" }
    ],
    "AI Tools": [
        { name: "AI Tool for Structural Design", link: "https://example.com/ai-tool1" },
        { name: "Machine Learning for Civil Engineering", link: "https://example.com/ai-tool2" },
        { name: "Civil Engineering AI Predictor", link: "https://example.com/ai-tool3" },
        { name: "Structural Optimization AI", link: "https://example.com/ai-tool4" },
        { name: "AI-Based Site Analysis Tool", link: "https://example.com/ai-tool5" },
        { name: "Automated Quantity Takeoff", link: "https://example.com/ai-tool6" },
        { name: "Geotechnical Data AI Analysis", link: "https://example.com/ai-tool7" },
        { name: "Traffic Flow Prediction AI", link: "https://example.com/ai-tool8" },
        { name: "Bridge Safety Monitoring AI", link: "https://example.com/ai-tool9" },
        { name: "Smart City Planning AI", link: "https://example.com/ai-tool10" },
        { name: "Pavement Condition Prediction AI", link: "https://example.com/ai-tool11" },
        { name: "Reinforced Concrete Design AI", link: "https://example.com/ai-tool12" },
        { name: "Building Information Modeling AI", link: "https://example.com/ai-tool13" },
        { name: "Hydrology Prediction AI", link: "https://example.com/ai-tool14" },
        { name: "AI-Driven Construction Risk Management", link: "https://example.com/ai-tool15" },
        { name: "Earthquake Impact Assessment AI", link: "https://example.com/ai-tool16" },
        { name: "AI for Construction Equipment Optimization", link: "https://example.com/ai-tool17" },
        { name: "Sustainable Construction AI Tool", link: "https://example.com/ai-tool18" },
        { name: "Deep Learning for Structural Health Monitoring", link: "https://example.com/ai-tool19" },
        { name: "AI for Environmental Impact Assessment", link: "https://example.com/ai-tool20" }
    ],
    "Other Resources": [
        { name: "Civil Engineering Resources Hub", link: "https://example.com/resource1" },
        { name: "Online Civil Engineering Courses", link: "https://example.com/resource2" },
        { name: "Civil Engineering Forum", link: "https://example.com/resource3" },
        { name: "Concrete Design Tutorials", link: "https://example.com/resource4" },
        { name: "Engineering Software Downloads", link: "https://example.com/resource5" },
        { name: "Free Civil Engineering Books", link: "https://example.com/resource6" },
        { name: "Structural Engineering Library", link: "https://example.com/resource7" },
        { name: "Geotechnical Engineering Online Resources", link: "https://example.com/resource8" },
        { name: "Bridge Engineering Resources", link: "https://example.com/resource9" },
        { name: "Civil Engineering Calculators", link: "https://example.com/resource10" },
        { name: "Pavement Design Resources", link: "https://example.com/resource11" },
        { name: "Hydraulics and Hydrology Resources", link: "https://example.com/resource12" },
        { name: "Sustainable Building Materials", link: "https://example.com/resource13" },
        { name: "Construction Project Management Resources", link: "https://example.com/resource14" },
        { name: "Civil Engineering Video Tutorials", link: "https://example.com/resource15" },
        { name: "Finite Element Analysis Software", link: "https://example.com/resource16" },
        { name: "Professional Civil Engineering Organizations", link: "https://example.com/resource17" },
        { name: "Urban Planning Resources", link: "https://example.com/resource18" },
        { name: "Construction Safety Guidelines", link: "https://example.com/resource19" },
        { name: "Earthquake Engineering Resources", link: "https://example.com/resource20" }
    ]
};

// Function to populate resources
function populateResources() {
    Object.keys(resources).forEach(category => {
        const listElement = document.getElementById(`${category.toLowerCase().replace(' ', '-')}-list`);
        resources[category].forEach(resource => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = resource.link;
            link.target = "_blank";
            link.textContent = resource.name;
            listItem.appendChild(link);
            listElement.appendChild(listItem);
        });
    });
}

// Call the function to populate resources
populateResources();
