let arr = [{"eid":1,"ename":"Farand","gender":"Female"},
{"eid":2,"ename":"Jacquenette","gender":"Female"},
{"eid":3,"ename":"Hermy","gender":"Male"},
{"eid":4,"ename":"Augustin","gender":"Agender"},
{"eid":5,"ename":"Geoffry","gender":"Male"},
{"eid":6,"ename":"Tabbi","gender":"Female"},
{"eid":7,"ename":"Caryl","gender":"Male"},
{"eid":8,"ename":"Sisely","gender":"Female"},
{"eid":9,"ename":"Thorin","gender":"Male"},
{"eid":10,"ename":"Jackqueline","gender":"Female"},
{"eid":11,"ename":"Rozelle","gender":"Agender"},
{"eid":12,"ename":"Gaynor","gender":"Female"},
{"eid":13,"ename":"Luce","gender":"Male"},
{"eid":14,"ename":"Morganne","gender":"Agender"},
{"eid":15,"ename":"Fay","gender":"Female"},
{"eid":16,"ename":"Gweneth","gender":"Female"},
{"eid":17,"ename":"Milly","gender":"Female"},
{"eid":18,"ename":"Rossy","gender":"Male"},
{"eid":19,"ename":"Germain","gender":"Male"},
{"eid":20,"ename":"Shelby","gender":"Female"},
{"eid":21,"ename":"Eddy","gender":"Female"},
{"eid":22,"ename":"Kyla","gender":"Female"},
{"eid":23,"ename":"Karrah","gender":"Female"},
{"eid":24,"ename":"Daphna","gender":"Female"},
{"eid":25,"ename":"Lila","gender":"Agender"},
{"eid":26,"ename":"Lowrance","gender":"Male"},
{"eid":27,"ename":"Skelly","gender":"Male"},
{"eid":28,"ename":"Prent","gender":"Male"},
{"eid":29,"ename":"Trevor","gender":"Male"},
{"eid":30,"ename":"Des","gender":"Male"},
{"eid":31,"ename":"Yvette","gender":"Female"},
{"eid":32,"ename":"Mitzi","gender":"Female"},
{"eid":33,"ename":"Evelina","gender":"Female"},
{"eid":34,"ename":"Armando","gender":"Male"},
{"eid":35,"ename":"Georg","gender":"Male"},
{"eid":36,"ename":"Lettie","gender":"Female"},
{"eid":37,"ename":"Arnaldo","gender":"Male"},
{"eid":38,"ename":"Piotr","gender":"Male"},
{"eid":39,"ename":"Sofie","gender":"Female"},
{"eid":40,"ename":"Lauren","gender":"Male"},
{"eid":41,"ename":"Irita","gender":"Female"},
{"eid":42,"ename":"Trumann","gender":"Male"},
{"eid":43,"ename":"Waite","gender":"Male"},
{"eid":44,"ename":"Kellina","gender":"Female"},
{"eid":45,"ename":"Carmine","gender":"Female"},
{"eid":46,"ename":"Tiphanie","gender":"Female"},
{"eid":47,"ename":"Emmye","gender":"Female"},
{"eid":48,"ename":"Vic","gender":"Male"},
{"eid":49,"ename":"Hasheem","gender":"Male"},
{"eid":50,"ename":"Gerty","gender":"Female"},
{"eid":51,"ename":"Kaleb","gender":"Male"},
{"eid":52,"ename":"Kelley","gender":"Female"},
{"eid":53,"ename":"Dionisio","gender":"Male"},
{"eid":54,"ename":"Phillida","gender":"Female"},
{"eid":55,"ename":"Olly","gender":"Male"},
{"eid":56,"ename":"Tallulah","gender":"Female"},
{"eid":57,"ename":"Brandise","gender":"Polygender"},
{"eid":58,"ename":"Manolo","gender":"Male"},
{"eid":59,"ename":"Zulema","gender":"Female"},
{"eid":60,"ename":"Doll","gender":"Female"},
{"eid":61,"ename":"Gustave","gender":"Male"},
{"eid":62,"ename":"Elsworth","gender":"Male"},
{"eid":63,"ename":"Errick","gender":"Male"},
{"eid":64,"ename":"Lonee","gender":"Female"},
{"eid":65,"ename":"Livvie","gender":"Non-binary"},
{"eid":66,"ename":"Kristine","gender":"Genderqueer"},
{"eid":67,"ename":"Anette","gender":"Female"},
{"eid":68,"ename":"Daloris","gender":"Female"},
{"eid":69,"ename":"Lynette","gender":"Female"},
{"eid":70,"ename":"Hazlett","gender":"Male"},
{"eid":71,"ename":"Anna-diane","gender":"Female"},
{"eid":72,"ename":"Genevra","gender":"Female"},
{"eid":73,"ename":"Katie","gender":"Female"},
{"eid":74,"ename":"Bron","gender":"Male"},
{"eid":75,"ename":"Normy","gender":"Male"},
{"eid":76,"ename":"Anet","gender":"Female"},
{"eid":77,"ename":"Lina","gender":"Female"},
{"eid":78,"ename":"Orelia","gender":"Female"},
{"eid":79,"ename":"Abbe","gender":"Female"},
{"eid":80,"ename":"Florina","gender":"Female"},
{"eid":81,"ename":"Delainey","gender":"Male"},
{"eid":82,"ename":"Marla","gender":"Female"},
{"eid":83,"ename":"Casar","gender":"Male"},
{"eid":84,"ename":"Claudian","gender":"Male"},
{"eid":85,"ename":"Fidole","gender":"Male"},
{"eid":86,"ename":"Aguste","gender":"Male"},
{"eid":87,"ename":"Devina","gender":"Agender"},
{"eid":88,"ename":"Caressa","gender":"Female"},
{"eid":89,"ename":"Jerri","gender":"Male"},
{"eid":90,"ename":"Maje","gender":"Male"},
{"eid":91,"ename":"Charley","gender":"Genderqueer"},
{"eid":92,"ename":"Tildie","gender":"Female"},
{"eid":93,"ename":"Marja","gender":"Female"},
{"eid":94,"ename":"Elie","gender":"Female"},
{"eid":95,"ename":"Eba","gender":"Female"},
{"eid":96,"ename":"Dewie","gender":"Male"},
{"eid":97,"ename":"Jarred","gender":"Male"},
{"eid":98,"ename":"Waldo","gender":"Polygender"},
{"eid":99,"ename":"Irena","gender":"Female"},
{"eid":100,"ename":"Amberly","gender":"Female"}]

let tbody = document.getElementById("emp-body")

for(let i=0; i<arr.length;i++){
    let table = document.createElement("tr")

    let td1 = document.createElement("td");
    td1.textContent = arr[i].eid;

    let td2 = document.createElement("td");
    td2.textContent = arr[i].ename;

    let td3 = document.createElement("td");
    td3.textContent = arr[i].gender;

    table.appendChild(td1);
    table.appendChild(td2);
    table.appendChild(td3);

    tbody.appendChild(table);
}

