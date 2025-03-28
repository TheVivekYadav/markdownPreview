document.addEventListener('DOMContentLoaded', function () {
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');
    const clearBtn = document.getElementById('clearBtn');

    // Default markdown example
    const defaultMarkdown = `# Hello World

This is a **markdown** _previewer_.

## Features

- Real-time preview
- Support for basic Markdown
- Syntax highlighting

\`\`\`javascript
const greeting = "Hello, world!";
console.log(greeting);
\`\`\`

[Visit GitHub](https://github.com)`;

    // Configure marked with highlight.js
    marked.setOptions({
        highlight: function (code, lang) {
            if (lang && hljs.getLanguage(lang)) {
                return hljs.highlight(code, { language: lang }).value;
            }
            return hljs.highlightAuto(code).value;
        },
        breaks: true,
        gfm: true
    });

    // Set default content
    editor.value = defaultMarkdown;

    // Initial render
    renderMarkdown();

    // Event listeners
    editor.addEventListener('input', renderMarkdown);
    clearBtn.addEventListener('click', clearEditor);

    // Function to render markdown
    function renderMarkdown() {
        const markdown = editor.value;
        preview.innerHTML = marked.parse(markdown);
    }

    // Function to clear editor
    function clearEditor() {
        editor.value = '';
        renderMarkdown();
    }
});