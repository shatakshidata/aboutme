const wrapper = document.getElementById("highlight-effect");
const className = "in-view";

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				wrapper.classList.add(className);
				return;
			}

			wrapper.classList.remove(className);
		});
	},
	{
		threshold: 1
	}
);

observer.observe(wrapper);

//Counting animation
const countUpElements = document.querySelectorAll(".count-up");

const countUp = (element) => {
	const max = parseInt(element.getAttribute("data-max"), 10);
	let current = 0;
	const duration = 1500; // Duration of the animation in milliseconds
	const startTime = performance.now();

	const updateCount = (timestamp) => {
		const elapsed = timestamp - startTime;
		const progress = Math.min(elapsed / duration, 1);
		current = Math.ceil(progress * max);
		element.textContent = current;

		if (progress < 1) {
			requestAnimationFrame(updateCount);
		} else {
			element.textContent = max;
		}
	};

	requestAnimationFrame(updateCount);
};

const countObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				countUp(entry.target);
				observer.unobserve(entry.target);
			}
		});
	},
	{
		threshold: 1
	}
);

countUpElements.forEach((element) => {
	countObserver.observe(element);
});

const skills = [
	{
		name: "Python",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
	},
	{
		name: "R",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg"
	},
	{
		name: "SQL",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
	},
	{
		name: "Power BI",
		icon: "https://github.com/microsoft/PowerBI-Icons/blob/2bf1c982fb24528eee1559a96a25eb534c175cfd/PNG/Power-BI.png?raw=true"
	},
	{
		name: "Google Cloud Platform",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg"
	}
];

const skillsContainer = document.getElementById('skills-container');

skills.forEach(skill => {
	const skillElement = document.createElement('div');
	skillElement.classList.add('skill-item');
	skillElement.innerHTML =
		`
		<img src="${skill.icon}" alt="${skill.name} icon" class="skill-icon" />
		<span class="skill-name">${skill.name}</span>
	`;
	skillsContainer.appendChild(skillElement);
});

document.addEventListener("DOMContentLoaded", () => {
	const navbarItems = document.querySelectorAll(".navbar-item");

	navbarItems.forEach(item => {
		item.addEventListener("click", (event) => {
			event.preventDefault();
			const targetId = item.getAttribute("href").substring(1);
			const targetElement = document.getElementById(targetId);
			const offset = 60;
			window.scrollTo({
				top: targetElement.offsetTop - offset,
				behavior: "smooth"
			});
		});
	});
});

const certifications = [
	"Intro to R, Python, and SQL for Data Analysis",
	"Power BI for Business Intelligence",
	"Machine Learning on Google Cloud Platform",
	"Neural Networks and Deep Learning",
	"Marketing Analytics Certification"
];

const certificationsWrapper = document.getElementById("certifications-wrapper");

certifications.forEach(topic => {
	const certificationWrapper = document.createElement("div");
	certificationWrapper.className = "certification-wrapper";

	const certification = document.createElement("div");
	certification.className = "certification";

	const certificationBackdrop = document.createElement("div");
	certificationBackdrop.className = "certification-backdrop";

	const topicDiv = document.createElement("div");
	topicDiv.className = "topic";

	const topicHeading = document.createElement("h1");
	topicHeading.textContent = topic;

	topicDiv.appendChild(topicHeading);
	certificationBackdrop.appendChild(topicDiv);
	certification.appendChild(certificationBackdrop);
	certificationWrapper.appendChild(certification);
	certificationsWrapper.appendChild(certificationWrapper);
});

const navbarItems = document.querySelectorAll(".navbar-item");

navbarItems.forEach(item => {
	item.addEventListener("click", (event) => {
		event.preventDefault();
		const targetId = item.getAttribute("href").substring(1);
		const targetElement = document.getElementById(targetId);
		const offset = 60;

		window.scrollTo({
			top: targetElement.offsetTop - offset,
			behavior: "smooth"
		});
	});
});

document.querySelector(".menu-btn").addEventListener("click", abc);
function abc() {
  document.querySelector(".main-menu").classList.toggle("show");
}

