export const data = {
    profile: {
        name: "Ankit Raikwar",
        title: "Senior Business & Data Analyst",
        tagline: "Transforming Raw Data into Strategic Business Growth",
        location: "Pune, India",
        contact: {
            email: "ankit.raikwar2010@gmail.com",
            linkedin: "linkedin.com/in/ankit-raikwar-9310b887",
            phone: "+91 9755665573",
        },
        summary:
            "Accomplished Sr. Analyst with 5+ years of experience bridging the gap between technical data engineering and business strategy. Expert in designing end-to-end analytics solutions using Power BI, SQL, and Python. Proven track record of reducing operational drag by 30% through automation and driving revenue growth through predictive modeling.",
    },
    skills: {
        visualization: [
            "Power BI",
            "Tableau",
            "Google Data Studio",
            "Data Storytelling",
        ],
        engineering: [
            "SQL",
            "PostgreSQL",
            "Google Cloud Platform",
            "ETL Pipelines",
            "Big Data Analytics",
        ],
        analysis: [
            "Python (Pandas/NumPy)",
            "DAX",
            "Predictive Modeling",
            "Advanced Excel",
        ],
        soft_skills: [
            "Stakeholder Management",
            "Client Requirement Gathering",
            "Strategic Planning",
        ],
    },
    experience: [
        {
            company: "Quauto Technologies",
            role: "Senior Analyst",
            period: "Aug 2024 - Present",
            highlights: [
                "Spearheaded end-to-end BI solution development for 10+ client projects, integrating ETL, modeling, and KPI design.",
                "Engineered optimized data models that slashed manual reporting effort by 30%, significantly accelerating turnaround time.",
                "Deployed Big Data analytics techniques to interpret large-scale datasets, directly influencing C-level strategic decisions.",
            ],
        },
        {
            company: "Sakon",
            role: "Business Analyst",
            period: "Aug 2021 - Jul 2024",
            highlights: [
                "Architected robust SQL and DAX data models on MSSQL, serving as the backbone for enterprise-grade reporting.",
                "Utilized Google Cloud Console to query massive datasets, optimizing retrieval speeds for real-time client insights.",
                "Translated multi-dimensional datasets into intuitive Tableau/Power BI dashboards for non-technical stakeholders.",
            ],
        },
        {
            company: "Arham Farms", // Tagging handled in component logic if needed
            role: "Co-Founder | Head of Operations & Analytics",
            period: "Mar 2017 - Apr 2021",
            highlights: [
                "Founded a dairy enterprise and built a proprietary Google Sheets reporting framework to track daily production metrics.",
                "Utilized performance analytics to optimize feed strategies, resulting in higher animal output and operational efficiency.",
                "Secured high-value partnerships (including Amul), driving annual revenue to ₹22 Lakhs through data-backed supply chain management.",
            ],
            isEntrepreneurial: true, // Custom flag for easy identification
        },
    ],
    education: [
        {
            degree: "MBA in Marketing & Analytics",
            school: "IIMT Gurgaon",
            year: "2014",
        },
        {
            degree: "B.B.A",
            school: "Bharti Vidhya Peeth University",
            year: "2011",
        },
    ],
    projects: [
        {
            id: 1,
            title: "Sales Performance Dashboard",
            type: "Dashboard",
            metric: "+15% YoY Growth",
            color: "blue"
        },
        {
            id: 2,
            title: "Supply Chain Optimization",
            type: "Optimization",
            metric: "20% Cost Reduction",
            color: "emerald"
        },
        {
            id: 3,
            title: "Financial Forecasting Model",
            type: "Predictive Model",
            metric: "94% Accuracy",
            color: "purple"
        }
    ]
};
