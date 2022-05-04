/* const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
}); */

const {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate, searchEmployee } = require('./script.js');

describe('testa a função sum', () => {
  it('deve retornar o resultado da soma', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('deve disparar um erro caso receba como parâmetro uma string', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })
})

describe('testa a função myRemove', () => {
  it('deve retornar um array removendo o item correto', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('testa a função myFizzBuzz', () => {
  it('Se o um for número divisível por 3 e 5 retorne "fizzbuzz"', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});
it('Se o um for número divisível por 3 "fizz"', () => {
  expect(myFizzBuzz(9)).toBe('fizz');
});
it('Se o um for número divisível por 5 "buzz"', () => {
  expect(myFizzBuzz(10)).toBe('buzz');
});
it('Se o um for número não for divisível por 3 e 5', () => {
  expect(myFizzBuzz(2)).toBe(2);
});
it('Se a entrada não for um numero retorne "false"', () => {
  expect(myFizzBuzz('2')).toBe(false);
});
});

describe ('função encode:', () => {
  it('Verifica se existe a função encode', () => {
    expect(typeof encode).toBe('function')
  })
  it('Verifica se "a" é convertido em 1', () => {
    expect(encode('aaa')).toBe('111')
  })
  it('Verifica se "e" é convertido em 2', () => {
    expect(encode('ee')).toBe('22')
  })
  it('Verifica se "i" é convertido em 3', () => {
    expect(encode('iii')).toBe('333')
  })
  it('Verifica se "o" é convertido em 4', () => {
    expect(encode('olho')).toBe('4lh4')
  })
  it('Verifica se "u" é convertido em 5', () => {
    expect(encode('u')).toBe('5')
  })
  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('trybe').length).toEqual(5)
  })
})

describe ('decode is a function', () => {
  it('Verifica se existe a função decode', () => {
    expect(typeof decode).toBe('function')
  })
  it('Verifica se "a" é convertido em 1', () => {
    expect(decode('1n1')).toBe('ana')
  })
  it('Verifica se "e" é convertido em 2', () => {
    expect(decode('2l2')).toBe('ele')
  })
  it('Verifica se "i" é convertido em 3', () => {
    expect(decode('x3x3')).toBe('xixi')
  })
  it('Verifica se "o" é convertido em 4', () => {
    expect(decode('4v4')).toBe('ovo')
  })
  it('Verifica se "u" é convertido em 5', () => {
    expect(decode('5')).toBe('u')
  })
  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(decode('trybe').length).toEqual(5)
  })
})


describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

// exercise-bonus.test.js

describe('Testa a função searchEmployee', () => {
  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
    const actual = searchEmployee('1256-4', 'firstName');
    const expected = 'Linda';

    expect(actual).toBe(expected);
  });
  it('Testa se searchEmployee(id, "lastName") retorna o segundo nome do usuário da id consultada', () => {
    const actual = searchEmployee('1256-4', 'lastName');
    const expected = 'Bezos';

    expect(actual).toBe(expected);
  });
  it('Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades do id pesquisado', () => {
    const actual = searchEmployee('1256-4', 'specialities');
    expect(actual).toContain('Hooks', 'Context API', 'Tailwind CSS');
  });
  it('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
    expect(() => { searchEmployee('1256-8', 'specialities') }).toThrow();
  });
  it('Testa a mensagem do erro para ID inexistente', () => {
    expect(() => { searchEmployee('1256-8', 'specialities') }).toThrowError(new Error("ID não identificada"));
  });
  it('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
    expect(() => { searchEmployee() }).toThrow();
  });
  it('Testa a mensagem do erro para informação inexistente', () => {
    expect(() => { searchEmployee('4678-2', 'shift') }).toThrowError(new Error("Informação indisponível"));
  });
});


