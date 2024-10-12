import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);


// trying some tests out
const newMap = new Map([["girl", 3], ["boy", 2]]);
console.log(newMap);

updateUniqueItems(newMap)
console.log(newMap);


const newMap2 = new Set([1, 3]);
console.log(newMap2);

updateUniqueItems(newMap2)
console.log(newMap2);


