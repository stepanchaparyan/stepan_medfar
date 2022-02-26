import { v4 as uuidv4 } from 'uuid';
import { uniqueNamesGenerator, animals } from 'unique-names-generator';

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

const getNameFromId = (categoryID) => {
  switch (categoryID) {
    case 1:
        return "Facebook";
    case 2:
      return "Instagram";
    case 3:
      return "Twitter";
    default:
        return "No Category";
  }
};

const generatePost = id => {
  return {
    id: uuidv4(),
    categoryID: id,
    categoryName: getNameFromId(id),
    price: randomIntFromInterval(1, 100),
    name: uniqueNamesGenerator({
      dictionaries: [animals],
      style: 'capital'
    }),
    rate: randomIntFromInterval(1, 10),
  }
};


export const filteredPostsbyCategories = (categoryID) => {
  let mockPosts = [
    generatePost(randomIntFromInterval(1, 3)),
    generatePost(randomIntFromInterval(1, 3)),
    generatePost(randomIntFromInterval(1, 3)),
    generatePost(randomIntFromInterval(1, 3)),
    generatePost(randomIntFromInterval(1, 3))
  ];

  switch (categoryID) {
    case 1:
        return mockPosts.filter(post => post.categoryID === 1)
    case 2:
      return mockPosts.filter(post => post.categoryID === 2)
    case 3:
      return mockPosts.filter(post => post.categoryID === 3)
    default:
        return mockPosts;
  }
}
