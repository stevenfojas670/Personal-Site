export const tools = [
	{
		name: "Git",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
	},
	{
		name: "Tenable",
		icon: "/icons/tenable-icon.svg",
	},
	{
		name: "AppViewX",
		icon: "/icons/appviewx-logo.svg",
	},
	{
		name: "F5 BIG-IP",
		icon: "/icons/f5-logo.svg",
	},
	{
		name: "Docker",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg",
	},
	{
		name: "AWS",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
	},
]

export const libraries = [
	{
		name: "Tailwind CSS",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
	},
	{
		name: "Bootstrap 5",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
	},
	{
		name: "Material UI",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
	},
]

export const frameworks = [
	{
		name: "React.js",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
	},
	{
		name: "Next.js",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
	},
	{
		name: "Django",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
	},
	{
		name: ".NET",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-plain-wordmark.svg",
	},
]

export const certifications = [
	{
		name: "CompTIA Network+",
		icon: "/icons/networkplus-logo.svg",
		link: "https://www.credly.com/earner/earned/badge/17744d93-a3f8-40f6-a43d-0594f07654e3",
	},
	{
		name: "CompTIA Security+",
		icon: "/icons/securityplus-logo.svg",
		link: "https://www.credly.com/earner/earned/badge/11f6d120-07e6-4eaa-ba14-dcdbf5b02d9b",
	},
	{
		name: "AWS CCP",
		icon: "/icons/awsccp-logo.png",
		link: "https://www.credly.com/earner/earned/badge/d07e2e64-88b1-4e93-ade9-aeb093a61caa",
	},
]

export const languages = [
	{
		name: "C++",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
	},
	{
		name: "C#",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
	},
	{
		name: "JavaScript",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
	},
	{
		name: "HTML5",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
	},
	{
		name: "CSS3",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
	},
	{
		name: "Python",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
	},
]

export const experiences = [
	{
		id: 1,
		role: "Network Analyst Intern",
		company: "Southwest Gas Corporation",
		duration: "June 2024 - Present",
		location: "Las Vegas, Nevada",
		tech: ["Cisco", "F5 BIG-IP", "AppViewX", "Tenable"],
		details: [
			{
				id: 1,
				title: "Enhanced Asset Visibility and Compliance in Tenable",
				description: [
					"Developed a structured approach to identify assets not tracked in our vulnerability management system Tenable.",
					"Utilized Active Directory, Micorsoft Intune, ZScaler, Solarwinds, Tenable, and Crowdstrike to gather an asset inventory.",
					"Automated asset discovery with Python, Pandas and the pyTenable with the Tenable API, improving tracking efficiency.",
					"Validated asset status using CrowdStrike for Windows systems and Solarwinds for network devices.",
					"Identified and properly tracked 30 previously unmonitored assets out of over a thousand assets.",
				],
			},
			{
				id: 2,
				title: "Enhancing Authenticated Scanning for Vulnerability Management",
				description: [
					"Resolved credential misconfigurations to enable authenticated Tenable vulnerability scans.",
					"Collaborated with IAM teams to configure proper authentication for security compliance.",
					"Configured credentials for over 60 systems including Cisco switches, routers and F5 BIG-IP systems, enhancing security posture visibility.",
				],
			},
			{
				id: 3,
				title:
					"Vulnerability Management, System Management and Security Configuration",
				description: [
					"Performed vulnerability and compliance scans against CIS benchmarks and assisted in remediating assets.",
					"Coordinated with asset owners to apply security patches and compliance configurations.",
					"Managed and maintained F5 BIG-IP systems by performing system upgrades, patching, and traffic management configurations to manage internal and external traffic.",
					"Managed the certificate management system AppViewX by developing policies on Certificate Service Requests (CSR), enrolling, revoking, renewing device certificates.",
				],
			},
		],
	},
	{
		id: 2,
		role: "Web Development Intern",
		company: "NeuroNexum",
		duration: "January 2024 - June 2024",
		location: "Las Vegas, Nevada",
		tech: ["React", "AWS", "MUI", "UI/UX"],
		details: [
			{
				id: 1,
				title: "Developed a Website for a University Startup",
				description: [
					"Deployed a website onto an AWS EC2 instance.",
					"Designed and developed a responsive frontend using Next.js, React, Framer Motion, and Material-UI.",
					"Utilized UI/UX design tools, including ReadyMag, Inkscape, and Midjourney to craft a web interface.",
				],
			},
		],
	},
	{
		id: 3,
		role: "Full Stack Development Intern",
		company: "Mission Services and Test Support",
		duration: "May 2023 - August 2023",
		location: "Las Vegas, Nevada",
		tech: ["jQuery", "HTML/CSS", "C#", ".NET-7"],
		details: [
			{
				id: 1,
				title: "Developed an Internal Applicaton for Internal Affairs",
				description: [
					"Developed an internal application to track physical signs across Mission Support and Test Services sites, streamlining facility management for Internal Affairs and Facilities staff.",
					"Designed and implemented the frontend using jQuery, HTML/CSS, Razor Pages, and Bootstrap 5 for responsive user experience.",
					"Built the backend with .NET 7, C#, and Entity Framework ORM, utilizing the Model-View-Controller pattern.",
					"Utilized SQL Server Management Studio (SSMS) for database management and executed database queries using LINQ with Entity Framework.",
					"Followed a Hybrid Agile methodology, working 2-week sprints over 4 months to iteratively refine and enhance the application.",
					"Performed weekly standups within a team of 8 developers.",
				],
			},
		],
	},
	{
		id: 4,
		role: "IT Services Technician",
		company: "University of Nevada, Las Vegas",
		duration: "August 2022 - August 2024",
		location: "Las Vegas, Nevada",
		tech: ["Crestron", "Classroom Support", "AV", "Jira"],
		details: [
			{
				id: 1,
				title: "Performed Device Troubleshooting and Event Setups",
				description: [
					"Diagnosed and resolved network issues for Crestron devices, PCs, displays and projectors within classroom environments, ensuring seamless functionality.",
					"Implemented and updated security policies on workstations to enhance compliance and system protection.",
					"Managed IT service requests by creating, updating, and completing tickets in Jira.",
					"Coordinated and set up laptops for testing environments, ensuring all devices were properly configured and testing applications were installed.",
					"Provided on-site AV/IT support during classes and exams, offering immediate assistance to resolve technical issues and minimize disruptions.",
				],
			},
		],
	},
	{
		id: 5,
		role: "Tiler",
		company: "Spartan Pools",
		duration: "December 2021 - July 2022",
		location: "Las Vegas, Nevada",
		tech: ["Trade Skills"],
		details: [
			{
				id: 1,
				title: "Installed and Replaced Pool Tiles",
				description: [
					"Performed tile installation and replacement",
					"Measured and cut tile",
					"Laid grout and cement",
					"Worked on 2-3 pools per day",
				],
			},
		],
	},
	{
		id: 6,
		role: "Senior Recreation Assistant",
		company: "City of Henderson",
		duration: "August 2018 - August 2020",
		location: "Las Vegas, Nevada",
		tech: ["Customer Service"],
		details: [
			{
				id: 1,
				title: "Performed Facilities and Front Desk Functions",
				description: [
					"Provided customer service support, including answering calls, assisting members with event sign-ups, and scheduling events.",
					"Trained and mentored front desk staff, ensuring efficient operations and adherence to procedures.",
					"Managed event logistics, including setting up event spaces and coordinating schedules.",
					"Maintained facility cleanliness and organization, including court maintenance and setup for various activities.",
				],
			},
			{
				id: 2,
				title: "Coordinated and Led Group Activities as a Summer Camp Lead",
				description: [
					"Organized and facilitated engaging activities and games for 2nd-grade campers (first summer) and 3rd-grade campers (second summer), ensuring a fun and inclusive environment.",
					"Supervised children during indoor and outdoor activities, as well as on field trips, ensuring their safety and engagement.",
					"Assisted in event planning and setup, coordinating logistics for camp-wide activities and special events.",
				],
			},
		],
	},
	{
		id: 7,
		role: "Bagger",
		company: "Smith's Food and Drug",
		duration: "March 2018 - August 2018",
		location: "Las Vegas, Nevada",
		tech: ["Customer Service"],
		details: [
			{
				id: 1,
				title: "Most Valuable Bagger",
				description: [
					"Bagged groceries",
					"Cleaned aisles and bathrooms",
					"Pushed carts",
				],
			},
		],
	},
]
