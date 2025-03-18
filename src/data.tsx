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
	},
	{
		name: "CompTIA Security+",
		icon: "/icons/securityplus-logo.svg",
	},
	{
		name: "AWS CCP",
		icon: "/icons/awsccp-logo.png",
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
		role: "Network Services Intern",
		company: "Southwest Gas",
		duration: "June 2024 - Present",
		details: [
			{
				title: "Enhanced Asset Visibility and Compliance in Tenable",
				description: [
					"Developed a structured approach to identify assets not tracked in Tenable, collaborating with Network, Windows, and Application teams.",
					"Utilized Active Directory, Micorsoft Intune, ZScaler, Solarwinds, Tenable, and Crowdstrike to consolidate asset inventory.",
					"Automated asset discovery with Python, Pandas and the pyTenable API, improving tracking efficiency.",
					"Validated asset status using CrowdStrike for Windows systems and Solarwinds for network devices.",
					"Identified and properly tracked 30 previously unmonitored assets out of over a thousand assets.",
				],
			},
			{
				title: "Enhancing Authenticated Scanning for Vulnerability Management.",
				description: [
					"Resolved credential misconfigurations to enable authenticated Tenable vulnerability scans.",
					"Collaborated with IAM teams to configure proper authentication for security compliance.",
					"Configured credentials for over 60 systems, enhancing security posture visibility.",
				],
			},
			{
				title: "Vulnerability Management, Compliance, and System Hardening",
				description: [
					"Performed vulnerability and compliance scans against CIS benchmarks and remediated over 80 assets per month.",
					"Coordinated with asset owners to apply security patches and compliance configurations.",
					"Assisted in configuring, maintaining, and securing F5 BIG-IP systems.",
					"Handled certificate management via AppViewX, by renewing, enrolling, issuing, and revoking device certificates.",
					"Ensured secure authentication via TACACS+ policies for network devices using Cisco ISE.",
				],
			},
		],
	},
	{
		role: "Software Development Intern",
		company: "NeuroNexum",
		duration: "January 2024 - June 2024",
		details: [
			{
				title: "Developed a Static Website for a University Startup",
				description: [
					"Prior to knowing anything about AWS, I naively deployed a static website onto an AWS EC2 instance.",
					"Designed and developed a responsive frontend using Next.js, React, Framer Motion, and Material-UI.",
					"Utilized UI/UX design tools, including ReadyMag, Inkscape, and Midjourney to craft a web interface.",
				],
			},
		],
	},
	{
		role: "Full Stack Development Intern",
		company: "Mission Services and Test Support",
		duration: "May 2023 - August 2023",
		details: [
			{
				title: "Developed an Internal Applicaton for Internal Affairs",
				description: [
					"Developed an internal application to track physical signs across Mission Support and Test Services sites, streamlining facility management for Internal Affairs and Facilities staff.",
					"Designed and implemented the forntend using jQuery, HTML/CSS, Razor Pages, and Bootstrap 5 for responsive user experience.",
					"Built a scalable backend with .NET 7, C#, and Entity Framework, utilizing the Model-View-Controller pattern.",
					"Utilized SQL Server Management Studio (SSMS) for database management and executed queries using LINQ with Entity Framework.",
					"Followed a Hybrid Agile methodology, working 2-week sprints over 4 months to iteratively refine and enhance the application.",
				],
			},
		],
	},
	{
		role: "IT Services Technician",
		company: "University of Nevada, Las Vegas",
		duration: "August 2022 - August 2024",
		details: [
			{
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
		role: "Tiler",
		company: "Spartan Pools",
		duration: "December 2021 - July 2022",
		details: [
			{
				title: "Installed and Replaced Pool Tiles",
				description: [
					"Perform tile installation and replacement",
					"Measured and cut tile",
					"Laid grout and cement",
					"Worked on 2-3 pools per day",
				],
			},
		],
	},
	{
		role: "Senior Recreation Assistant",
		company: "City of Henderson",
		duration: "August 2018 - August 2020",
		details: [
			{
				title: "Performed Facilities and Front Desk Functions",
				description: [
					"Provided customer service support, including answering calls, assisting members with event sign-ups, and scheduling events.",
					"Trained and mentored front desk staff, ensuring efficient operations and adherence to procedures.",
					"Managed event logistics, including setting up event spaces and coordinating schedules.",
					"Maintained facility cleanliness and organization, including court maintenance and setup for various activities.",
				],
			},
			{
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
		role: "Bagger",
		company: "Smith's Food and Drug",
		duration: "March 2018 - August 2018",
		details: [
			{
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
