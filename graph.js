
let data = {
    Name: "hour",
    test1: "1",
}
data["new"] = 4;
data["new1"] = 5;


let add_element = (dict) => {
    for (key in dict) {
        const template = document.createElement('div');
        template.innerHTML = key + ': ' + dict[key];
        document.body.appendChild(template);
    }

}

add_element(data);
