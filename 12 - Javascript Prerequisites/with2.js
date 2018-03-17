var metodos = {
  escrever: (nome) => {
    console.log(`Olá ${nome}`);
  },
  gritar: (nome) => {
    console.log(`AEEEEEEWWWWW ${nome}`);
  }
}

with(metodos) {
  escrever('Mussak');
  gritar('Caralhooo');
}
