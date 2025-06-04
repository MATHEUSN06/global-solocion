document.getElementById('quiz-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const respostasCorretas = { q1: 'c', q2: 'a', q3: 'a' };
  let pontuacao = 0;

  for (const [pergunta, respostaCorreta] of Object.entries(respostasCorretas)) {
    const respostaSelecionada = document.querySelector(`input[name="${pergunta}"]:checked`);
    if (respostaSelecionada && respostaSelecionada.value === respostaCorreta) {
      pontuacao++;
    }
  }

  const resultado = document.getElementById('quiz-result');
  if (pontuacao === Object.keys(respostasCorretas).length) {
    resultado.textContent = `Parabéns! Você acertou todas as ${pontuacao} perguntas.`;
  } else {
    resultado.textContent = `Você acertou ${pontuacao} de ${Object.keys(respostasCorretas).length} perguntas. Tente novamente!`;
  }
});