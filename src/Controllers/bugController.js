import bugModel from "../Models/bugModel";

export function retrieveBugs() {
  let data = [];

  data.push(
    new bugModel({
      _id: 123456679,
      name: "Crash on load",
      details: "Crashes after 3 seconds",
      steps: "Open application and it will crash",
      version: "V2.0",
      assigned: "Grace Akpan",
      creator: "Meg Ryan",
      priority: 1,
      time: "11:38",
    })
  );
  data.push(
    new bugModel({
      _id: 1234568978622,
      name: "Won't load",
      details: "Crashes after 3 seconds",
      steps: "Open application and it will crash",
      version: "V2.0",
      assigned: "Grace Akpan",
      creator: "Meg Ryan",
      priority: 3,
      time: "11:38",
    })
  );

  return data.sort((a, b) => a.priority - b.priority);
}
