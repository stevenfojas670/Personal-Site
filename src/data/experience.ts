export const experiences = [
	{
		id: 1,
		role: "Network Analyst Intern",
		company: "Southwest Gas Corporation",
		duration: "June 2024 - Present",
		etc: "",
		location: "Las Vegas, Nevada",
		tech: [
			"Packet Analysis",
			"Log Analysis",
			"Firewall Configuration",
			"Load Balancing Configuration",
			"Certificate Management",
			"Automation",
			"Network Configuration",
			"Microsoft DNS",
		],
		details: [
			{
				id: 1,
				title: "System Management, Maintenance, and Support",
				description: [
					"Managed, maintained and supported F5 BIG-IP systems performing load balancing configurations for internal and external traffic to our web applications, servers, etc.",
					"Performed Local Traffic Management configurations such as setting up virtual servers for web applications on HTTP/HTTPS with health monitoring, persistence profiles to maintain sessions across servers, SSL encryption and decryption for packet analysis, and URL redirects with iRules.",
					"Troubleshoot infrastructure application or network communication issues using packet analysis with Wireshark, log analysis built-in log systems in infrastructure applications or TCPDUMP, and working with multiple IT infrastructure teams to identify root cause.",
					"Managed, maintained and supported our certificate management application AppViewX through Certificate Service Request (CSR) policy creation, certificate expiry report configurations, and certificate discovery scanning.",
					"Performed troubleshooting across all layers of the OSI model.",
					"Assisted in switch racking and stacking following wiring and rack diagrams.",
					"Configured and managed Microsoft DNS for internal and external domains, including DNS record creation, updates, and troubleshooting.",
				],
			},
			{
				id: 2,
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
				id: 3,
				title: "Enhancing Authenticated Scanning for Vulnerability Management",
				description: [
					"Resolved credential misconfigurations to enable authenticated Tenable vulnerability scans.",
					"Collaborated with IAM teams to configure proper authentication for security compliance.",
					"Configured credentials for over 60 systems including Cisco switches, routers and F5 BIG-IP systems, enhancing security posture visibility.",
				],
			},
			{
				id: 4,
				title: "Vulnerability Management and Security Configuration",
				description: [
					"Performed vulnerability and compliance scans against CIS benchmarks.",
					"Coordinated with asset owners to apply security patches and compliance configurations on Cisco, F5, Arista, Cradlepoint, and Palo Alto devices.",
					"Regularly monitor our network infrastructure security posture using Tenable Vulnerability Management to identify vulnerabilities and triage them to correct team members for remediation.",
				],
			},
		],
	},
	{
		id: 2,
		role: "Web Development Intern",
		company: "NeuroNexum",
		duration: "January 2024 - June 2024",
		etc: "",
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
		etc: "",
		location: "Las Vegas, Nevada",
		tech: ["jQuery", "HTML/CSS", "C#", ".NET-7"],
		details: [
			{
				id: 1,
				title: "Developed an Internal Applicaton for Internal Affairs",
				description: [
					"Developed a multipage internal web application to track physical signage across multiple facilities for the HR department.",
					"Built the frontend using Razor Pages (.NET 7), jQuery, and Bootstrap 5 implementing interactive tables, buttons, modals, accordions and form validation.",
					"Designed and implemented backend logic in C# using .NET 7 and Entity Framework for CRUD operations with a Microsoft SQL Server database.",
					"Integrated SMTP-based email notifications to alert facility managers of assigned signage tasks.",
					"Enabled HR staff to assign tasks to facility managers, who update task statuses and document sign placements through the system.",
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
		etc: "",
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
		etc: "",
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
		etc: "",
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
		etc: "",
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
