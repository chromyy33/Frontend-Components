import ContactSearch from "./ContactSearch";
import TweetInput from "./TweetInput";
import Counter from "./Counter";
import ToastSystem from "./ToastSystem";
function createProject({ path, name, description, elem }) {
  return {
    path,
    name,
    description,
    dateCreated: new Date(),
    elem,
    imageURL: `${path}.png`, //correct path
  };
}

const projectData = [
  createProject({
    path: "contact-search",
    name: "Contact Search",
    description:
      "Search contact from a given list of contacts and returns matching titles or names",
    elem: ContactSearch,
  }),
  createProject({
    path: "tweet-input",
    name: "Tweet Input",
    description:
      "Tweet-style input box with a 280 char limit, live counter, disabled CTA if count passes 280",
    elem: TweetInput,
  }),
  createProject({
    path: "counter",
    name: "Counter",
    description: "A Simple counter,also made it persistent with localStorage",
    elem: Counter,
  }),
    createProject({
    path: "toast-system",
    name: "Toast System",
    description: "A Toast System made for all states, messages and postions",
    elem: ToastSystem,
  }),
];

export default projectData;
