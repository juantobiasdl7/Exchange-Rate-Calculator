function calculate() {
    fetch('item.json')
    .then(res => res.json())
    .then(data => console.log(data));
}

calculate();