import ContactSearch from "./ContactSearch";
import TweetInput from "./TweetInput";
function createProject({ path, name, description, elem }) {
  return {
    path,
    name,
    description,
    dateCreated: new Date(),
    elem,
    imageURL: `${path}.png`, // Now works correctly!
  };
}

const projectData = [
  createProject({
    path: "contact-search",
    name: "Contact Search",
    description: "Search contact from a given list of contacts and returns matching titles or names",
    elem: ContactSearch,
  }),
  createProject({
    path: "tweet-input",
    name: "Tweet Input",
    description: "Tweet-style input box with a 280 char limit, live counter, disabled CTA if count passes 280",
    elem: TweetInput,
  }),
];

export default projectData;
