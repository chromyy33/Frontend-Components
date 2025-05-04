const BASE_URL = "https://api.dicebear.com/7.x/notionists/svg?seed";

const rawData = [
  { name: "Aarav Kumar", title: "Marketing Manager" },
  { name: "Sanya Gupta", title: "UI/UX Designer" },
  { name: "Kabir Sharma", title: "Frontend Developer" },
  { name: "Tanya Bhatia", title: "Content Strategist" },
  { name: "Rajveer Singh", title: "Product Manager" },
  { name: "Ishita Verma", title: "Graphic Designer" },
  { name: "Nikhil Joshi", title: "Backend Developer" },
  { name: "Riya Kapoor", title: "SEO Specialist" },
  { name: "Yash Thakur", title: "DevOps Engineer" },
  { name: "Ananya Das", title: "Data Analyst" },
  { name: "Arjun Reddy", title: "Mobile Developer" },
  { name: "Priya Nair", title: "QA Engineer" },
  { name: "Dev Mehra", title: "Cloud Architect" },
  { name: "Sneha Iyer", title: "Project Coordinator" },
  { name: "Rohit Khanna", title: "Security Analyst" },
  { name: "Simran Kohli", title: "Social Media Manager" },
  { name: "Manav Jindal", title: "Full Stack Developer" },
  { name: "Avni Chawla", title: "Copywriter" },
  { name: "Zaid Khan", title: "AI Engineer" },
  { name: "Neha Rawat", title: "HR Executive" },
];

const employeeData = rawData.map((emp) => ({
  ...emp,
  profilePicture: `${BASE_URL}=${encodeURIComponent(emp.name)}`,
}));

export default employeeData;
