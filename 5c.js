let carro = { marca: "Toyota", modelo: "Corolla", ano: 2020 };
for (let elemento in carro) {
  console.log(`${elemento}: ${carro[elemento]}`);
}