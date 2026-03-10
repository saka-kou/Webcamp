const inputs = document.querySelectorAll(".input");
console.log(inputs);

let data = {};

inputs.forEach(input => {
    data[input.name] = input.value;
});

localStorage.setItem("formData", JSON.stringify(data));