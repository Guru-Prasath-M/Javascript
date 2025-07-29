let eids = [101,102,103,104]
//Create new Array based on existing
let uids = eids; // Alias Name
uids[0] = 100;
console.log(eids);
console.log(uids);