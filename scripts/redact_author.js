// Derive redaction terms from imported author metadata or optional local configuration.
function redactAuthor(value, authorName = '') {
  const configured = (process.env.AUTHOR_REDACT_TERMS || '').split(',');
  const names = [authorName, ...configured].filter(Boolean);
  const terms = [...new Set(names.flatMap(name => [name.trim(), ...name.trim().split(/\s+/)]))]
    .filter(term => term.length >= 3)
    .sort((a, b) => b.length - a.length);
  let text = value || '';
  for (const term of terms) {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    text = text.replace(new RegExp('\\b' + escaped + '\\b', 'gi'), 'Author');
  }
  return text;
}

module.exports = { redactAuthor };
