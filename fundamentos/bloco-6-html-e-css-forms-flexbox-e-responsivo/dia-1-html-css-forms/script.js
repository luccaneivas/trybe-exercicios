const estados = [
  'AC - Acre',
  'AL - Alagoas',
  'AP - Amapá',
  'AM - Amazonas',
  'BA - Bahia',
  'CE - Ceará',
  'DF - Distrito Federal',
  'ES - Espírito Santo',
  'GO - Goías',
  'MA - Maranhão',
  'MT - Mato Grosso',
  'MS - Mato Grosso do Sul',
  'MG - Minas Gerais',
  'PA - Pará',
  'PB - Paraíba',
  'PR - Paraná',
  'PE - Pernambuco',
  'PI - Piauí',
  'RJ - Rio de Janeiro',
  'RN - Rio Grande do Norte',
  'RS - Rio Grande do Sul',
  'RO - Rondônia',
  'RR - Roraíma',
  'SC - Santa Catarina',
  'SP - São Paulo',
  'SE - Sergipe',
  'TO - Tocantins'
];
const siglas = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
]

const submit = document.getElementById('buttonSubmit');

function geraEstados(estados, siglas) {
  const select = document.getElementById('estado');
  let options = '<option selected>Escolher...</option>';

  for (let i = 0; i < estados.length; i += 1) {
    let option = '<option value=' + siglas[i] + '>' + estados[i] + '</option>';
    options += option;
  }
  select.innerHTML = options;
}
geraEstados(estados, siglas);

function validationSubmit(event) {
  event.preventDefault();
  const dataInicio = document.getElementById('data_inicio');
  if (dataInicio.value.length > 0 && dataInicio.value.length <= 10) {
    let validation = dataInicio.value.replace('-', '');
    let validation2 = validation.replace('-', '');
    let day = '';
    let month = '';
    let year = '';
    for(let i = 0; i < validation2.length; i += 1) {
      if (i < 4) {
        year += validation2[i];
      } else if (i < 6) {
        month += validation2[i];
      } else if (i < 8) {
        day += validation2[i];
      }
    }
    
    if (parseInt(day, 10) > 0 && parseInt(day, 10) <= 31 && parseInt(month, 10) > 0 && parseInt(month, 10) <= 12 && parseInt(year, 10) > 0) {
      criaDiv(day, month, year);
    } else {
      alert('DATA INVÁLIDA!!!!!')
    }
  } else {
    alert('DATA INVÁLIDA!!!!!');
  }
}
submit.addEventListener('click', validationSubmit);

function criaDiv(dia, mes, ano) {
  const div = document.createElement('div');
  div.innerHTML = `<p>${dia + '-' + '-' + mes + '-' + ano}</p>`
  document.body.appendChild(div);
}

// Verificar o formato da data dd/mm/aaaa .
// O dia deve ser > 0 e <= 31.
// O mês deve ser > 0 e <= 12.
// O ano não pode ser negativo.
// Caso alguma das condições seja inválida no momento do envio do formulário, exibir via alert uma mensagem de erro contextualizada.
