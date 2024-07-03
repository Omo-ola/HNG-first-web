document.addEventListener("DOMContentLoaded", () => {
  const goals = [
    {
      title: "Master React Native",
      description:
        "Dedicate time to thoroughly understand React Native. Build various projects, both small and large, to cover different aspects of mobile development such as navigation, state management, animations, and integrating with native modules.",
    },
    {
      title: "Develop a Mobile App",
      description:
        "Create and publish a fully functional mobile application on both iOS and Android platforms. The app should solve a real-world problem or provide a unique value proposition. This goal will include developing, testing, and deploying the app.",
    },
    {
      title: "Contribute to Open Source",
      description:
        "Find and contribute to open-source projects related to mobile development. This will involve understanding the project’s codebase, understand diverse codebases, contributing features or bug fixes, and participating in the community discussions.",
    },
    {
      title: "Learn Advanced JavaScript",
      description:
        "Deepen my understanding of advanced JavaScript concepts and modern features (ES6+), including but not limited to async/await, closures, higher-order functions, and JavaScript design patterns. This will involve practicing through coding challenges and real-world applications.",
    },
    {
      title: "Explore GraphQL",
      description:
        "Learn GraphQL to efficiently fetch data in mobile applications. This includes understanding the core concepts of GraphQL, setting up a GraphQL server, and integrating GraphQL with React Native. Practice by building projects that utilize GraphQL.",
    },
    {
      title: "Land a Fullstack Job",
      description:
        "To secure a fullstack job by honing my skills in both frontend and backend technologies.Network with professionals, and participate in coding interviews. Focus on improving my problem-solving abilities to excel in technical interviews.",
    },
  ];

  const goalsList = document.getElementById("goals-list");

  goals.forEach((goal) => {
    const listItem = document.createElement("li");

    const goalTitle = document.createElement("h2");
    goalTitle.textContent = goal.title;
    listItem.appendChild(goalTitle);

    const goalDescription = document.createElement("p");
    goalDescription.textContent = goal.description;
    listItem.appendChild(goalDescription);

    goalsList.appendChild(listItem);
  });
});



 function updateTime() {
   const now = new Date();
   const utcTime = now.toUTCString().split(" ")[4];
   const day = now.toLocaleString("en-us", { weekday: "long" });
   document.querySelector("[data-testid='currentTimeUTC']").textContent =
     utcTime;
   document.querySelector("[data-testid='currentDay']").textContent = day;
 }
 setInterval(updateTime, 1000);
updateTime();
 
