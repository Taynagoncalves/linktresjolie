/* =========================================================
   Très Jolie Festas — Configurações rápidas
   Troque os valores abaixo para atualizar os links da página.
   ========================================================= */

const SITE_URL = "https://tresjoliefestas.onrender.com";
const WHATSAPP_NUMBER = "5561992378041";
const WHATSAPP_MENSAGEM = "Olá! Vim pelo Instagram da Très Jolie Festas e gostaria de mais informações sobre locação.";
const ID_SECAO_CENARIOS = "#cenarios";
const ID_SECAO_COMO_FUNCIONA = "#como-funciona";

/* --------------------------------------------------------- */

function montarLinkSite(caminho = "") {
  return `${SITE_URL}${caminho}`;
}

function montarLinkWhatsapp() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`;
}

function siteConfigurado() {
  return SITE_URL && SITE_URL !== "[URL DO SITE]";
}

function aplicarLink(id, href) {
  const elemento = document.getElementById(id);
  if (!elemento) return;
  elemento.setAttribute("href", href);
}

function iniciar() {
  aplicarLink("link-site", montarLinkSite());
  aplicarLink("link-whatsapp", montarLinkWhatsapp());
  aplicarLink("link-cenarios", montarLinkSite(ID_SECAO_CENARIOS));
  aplicarLink("link-como-funciona", montarLinkSite(ID_SECAO_COMO_FUNCIONA));

  // Enquanto o site oficial não estiver configurado, os botões que
  // dependem dele continuam clicáveis, mas abrem em nova aba sem
  // travar a navegação dentro do link na bio.
  if (!siteConfigurado()) {
    ["link-site", "link-cenarios", "link-como-funciona"].forEach((id) => {
      const elemento = document.getElementById(id);
      if (elemento) elemento.setAttribute("target", "_blank");
    });
  }

  const anoAtual = document.getElementById("ano-atual");
  if (anoAtual) anoAtual.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", iniciar);
