let eids=[101,102,103,104]
//create new Array based on existing
/* for loop, while loop,do-while loop, for of 
    [].map()
*/
//let uids=eids.map(eid=>eid)
/* let uids=eids.map(function(eid){
    return eid
}) */

//using MAP function
let uids=eids.map((eid)=>{
    return eid;
})
console.log(uids)