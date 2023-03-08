Problem1();
Problem2();
Problem3();
Problem4();

function Problem1() {
    var x = 5;
    var y = 3;
    [x, y] = [y, x];
    console.log("x = " + x);
    console.log("y = " + y);
}

function Problem2() {
    var array = [5, 8, [2, 150], [200, 600], 3, 372];
    console.log(`Max value is ${getMaxValue(...array)}`);
    console.log(`Min value is ${getMinValue(...array)}`);
}

function getMaxValue(...array) {
    return Math.max(...array.flat());
}

function getMinValue(...array) {
    return Math.min(...array.flat());
}

function Problem3() {
    var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

    for (var item of fruits) {
        if (typeof item !== 'string') {
            console.log("There is an item who is not a string");
            break;
        }
    }

    for (var item of fruits) {
        if (!item.startsWith('a')) {
            console.log("There is an item who does not start with 'a'");
            break;
        }
    }

    var filteredFruits = fruits.filter(function (fruit) {
        return fruit.startsWith('b') || fruit.startsWith('s');
    });

    console.log(filteredFruits);
}

function getTitles(userId) {
    return new Promise(async (resolve, reject) => {
        var titlesRequest = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        var titlesData = await titlesRequest.json();

        if (titlesData) {
            resolve(titlesData);
        } else {
            reject(titlesData);
        }
    });
}

async function Problem4() {
    try {
        var response = await fetch("https://jsonplaceholder.typicode.com/users");
        var data = await response.json();

        var namesTab = document.getElementById("namesTab");
        var tabContent = document.getElementById("tabContent");

        for (var item of data) {
            var listItemTab = document.createElement("li");
            listItemTab.setAttribute("role", "presentation");
            listItemTab.classList.add("nav-item");

            var buttonTab = document.createElement("button");
            buttonTab.setAttribute("data-bs-toggle", "tab");
            buttonTab.setAttribute("type", "button");
            buttonTab.setAttribute("role", "tab");
            buttonTab.setAttribute("data-bs-target", `#${item.name.split(' ')[0]}`);
            buttonTab.setAttribute("data-bs-id", `${item.id}`);
            buttonTab.classList.add("nav-link");
            buttonTab.innerText = `${item.name}`;
            listItemTab.appendChild(buttonTab);
            namesTab.appendChild(listItemTab);

            // Create content for each
            var divContent = document.createElement("div");
            divContent.id = `${item.name.split(' ')[0]}`;
            divContent.innerText = `${item.name}`;
            divContent.setAttribute("role", "tabpanel");
            divContent.setAttribute("tabindex", "0");
            divContent.classList.add("tab-pane", "fade");

            buttonTab.onclick = async function (event) {
                getTitles(buttonTab.getAttribute("data-bs-id"))
                    .then((e) => {
                        for (var titleItem of e) {
                            var titleHeader = document.createElement("h3");
                            titleHeader.innerText = titleItem.title;
                            divContent.appendChild(titleHeader);
                        }
                    }).catch(e => console.error(e));
            };

            tabContent.appendChild(divContent);
        }

    } catch (e) {
        console.error(e);
    }
}