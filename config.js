// === CONFIGURE AQUI ===
// Preencha estes 3 campos antes de subir para o GitHub Pages.
window.PELADA_CFG = {
  // Link do Mercado Pago (Checkout Pro) criado no painel
  // *Não precisa mudar se já estiver usando o script do MP no index.html*
  MERCADO_PAGO_LINK: "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=71896558-d60bbf91-0a06-4a04-bdd9-383868794d94",

  // 1) URL do Google Forms (formResponse) que grava o NOME
  //    Ex.: "https://docs.google.com/forms/d/e/FORM_ID/formResponse"
  GOOGLE_FORM_ACTION: "COLE_AQUI_URL_formResponse",

  // 2) Campo do Google Forms correspondente ao NOME (entry.xxxxxxxxx)
  GOOGLE_FORM_ENTRY_NAME: "entry.1234567890",

  // 3) URL do CSV publicado da ABA "Pagamentos" da sua planilha
  //    (Arquivo > Publicar na Web > selecione a aba e formato CSV)
  SHEET_CSV_URL: "COLE_AQUI_URL_CSV_PUBLICADO",

  // Limites e valores
  TITULARES_MAX: 15,
  PRECO: 20,

  // Para onde redirecionar após o pagamento (configure back_urls no MP para esta página)
  POST_PAGAMENTO_REDIRECT: "inserir.html"
};
