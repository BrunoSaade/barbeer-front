<template lang="pug">
.privacy-police
  p.text-sm.mb-2 Esta política de senha define as diretrizes de segurança para os usuários do aplicativo Barbeer e tem como objetivo garantir a proteção adequada das informações do usuário.
  p.text-orange-0.mb-2 Comprimento mínimo
  p.text-sm.mb-2
    span.privacy-police--content 1.1. 
    | As senhas devem ter no mínimo oito caracteres.
  p.text-orange-0.mb-2 Dificuldade
  p.text-sm.mb-2 
    span.privacy-police--content 2.1. 
    | As senhas devem incluir caracteres de diferentes tipos, como letras maiúsculas e minúsculas, números e símbolos.
  p.text-orange-0.mb-2 Não reutilização
  p.text-sm.mb-2 
    span.privacy-police--content 3.1. 
    | Os usuários não devem reutilizar senhas antigas em novas contas.
  p.text-orange-0.mb-2 Bloqueio de tentativas
  p.text-sm.mb-2 
    span.privacy-police--content 4.1. 
    | O Aplicativo bloqueará temporariamente as contas dos usuários após um número específico de tentativas de login sem sucesso para evitar ataques de força bruta.
  p.text-orange-0.mb-2 Autenticação de dois fatores
  p.text-sm.mb-2 
    span.privacy-police--content 5.1. 
    | Os usuários são incentivados a usar a autenticação de dois fatores para aumentar a segurança de suas contas.
  p.text-orange-0.mb-2 Senhas temporárias
  p.text-sm.mb-2 
    span.privacy-police--content 6.1. 
    | Os usuários devem gerar senhas temporárias para uso em dispositivos compartilhados ou ao acessar a conta em computadores públicos, e, em seguida, alterá-las imediatamente após o primeiro login.
  p.text-orange-0.mb-2 Responsabilidade dos usuários
  p.text-sm.mb-2 
    span.privacy-police--content 7.1. 
    | Os usuários são responsáveis por manter suas senhas em segurança e não devem compartilhá-las com outras pessoas.
  p.text-sm.mb-2 
    span.privacy-police--content 7.2. 
    | Os usuários são responsáveis por notificar imediatamente o Aplicativo se suspeitarem que suas senhas foram comprometidas ou se tiverem sido vítimas de uma violação de segurança.
  p.text-orange-0.mb-2 Consequências
  p.text-sm.mb-2 
    span.privacy-police--content 8.1. 
    | A violação desta política de senha pode resultar no bloqueio do acesso à conta ou na rescisão do contrato com o Aplicativo.
  p.text-sm.mb-2 
    span.privacy-police--content 8.2. 
    | O Aplicativo se reserva o direito de alterar esta política de senha a qualquer momento, sem aviso prévio.
  p.text-sm.mb-2 Ao utilizar o Aplicativo, os usuários concordam em cumprir esta política de senha e reconhecem que a não conformidade pode resultar em consequências graves.
</template>
<script>
  export default{
    data() {
      return {};
    },
    props: {},
    computed: {},
    methods: {},
  }
</script>
<style scoped>
  .vmodal--background {
    @apply w-full h-full bg-black fixed z-40 opacity-80;
  }
  .vmodal--panel {
    @apply bg-white w-full z-50 fixed bottom-0 rounded-t-2xl h-5/6 pb-10;
  }
  .vmodal--icon-row {
    @apply  w-full text-right;
  }
  .vmodal--icon {
    @apply text-4xl cursor-pointer pr-4 pt-4;
  }
  .vmodal--content {
    @apply p-8 overflow-scroll h-full;
  }
  .privacy-police--content {
    @apply font-bold;
  }
</style>
  