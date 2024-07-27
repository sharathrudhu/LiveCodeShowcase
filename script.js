const htmltextarea = document.getElementById('html-editor');
htmltextarea.value = htmltextarea.value.replace(/^\s+/gm, '');

const csstextarea = document.getElementById('css-editor');
csstextarea.value = csstextarea.value.replace(/^\s+/gm, '');

const jstextarea = document.getElementById('js-editor');
jstextarea.value = jstextarea.value.replace(/^\s+/gm, '');

var htmlEditor = CodeMirror.fromTextArea(document.getElementById('html-editor'), {
    lineNumbers: true,
    mode: "htmlmixed",
    lineWrapping: true,
    readOnly: true
});

var cssEditor = CodeMirror.fromTextArea(document.getElementById('css-editor'), {
    lineNumbers: true,
    mode: "css",
    lineWrapping: true
});

var jsEditor = CodeMirror.fromTextArea(document.getElementById('js-editor'), {
    lineNumbers: true,
    mode: "javascript"
});

function showTab(tabName) {
    document.querySelectorAll('.CodeMirror').forEach(function (cm) {
        cm.style.display = 'none';
    });

    if (tabName === 'html') {
        htmlEditor.getWrapperElement().style.display = 'block';
    } else if (tabName === 'css') {
        cssEditor.getWrapperElement().style.display = 'block';
    } else if (tabName === 'js') {
        jsEditor.getWrapperElement().style.display = 'block';
    }
}

var editors = [htmlEditor, cssEditor, jsEditor];
var editorHeight = '175px'; // Set your desired height here
var editorWidth = '550px';   // Set your desired width here

editors.forEach(function (editor) {
    editor.setSize(editorWidth, editorHeight);
});        