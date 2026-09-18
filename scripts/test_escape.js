const fs = require('fs');

const testText = 'Etiqueta (Tag): Marca sintáctica que delimita el inicio o fin de un dato (ejemplo: `<titulo>` y `</titulo>`). Y un elemento `<modulo>Lenguajes de Marcas</modulo>`.';

function escapeHTML(str) {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatMarkdown(text) {
  if (!text) return '';
  let raw = text.trim();
  const codeTokens = [];

  raw = raw.replace(/```(xml|html|css|javascript)?([\s\S]*?)```/g, (match, lang, code) => {
    const idx = codeTokens.length;
    const htmlBlock = `<pre class="code">${escapeHTML(code.trim())}</pre>`;
    codeTokens.push(htmlBlock);
    return `__LMSGI_CODE_BLOCK_${idx}__`;
  });

  raw = raw.replace(/`([^`]+)`/g, (match, code) => {
    const idx = codeTokens.length;
    const inlineHtml = `<code>${escapeHTML(code)}</code>`;
    codeTokens.push(inlineHtml);
    return `__LMSGI_CODE_INLINE_${idx}__`;
  });

  raw = raw.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  raw = raw.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  codeTokens.forEach((token, idx) => {
    raw = raw.replace(`__LMSGI_CODE_BLOCK_${idx}__`, token);
    raw = raw.replace(`__LMSGI_CODE_INLINE_${idx}__`, token);
  });

  return raw;
}

const result = formatMarkdown(testText);
console.log('RESULT:', result);
if (result.includes('&lt;titulo&gt;') && result.includes('&lt;/titulo&gt;')) {
  console.log('SUCCESS: Tags are properly escaped and visible to students!');
} else {
  console.log('FAILED: Tags are not escaped.');
}
