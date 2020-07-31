import { Controller } from "stimulus"
import marked from 'marked/lib/marked.js'
import hljs from 'highlight.js'
import 'codemirror/lib/codemirror.css'
import CodeMirror from 'codemirror'
import 'codemirror/mode/gfm/gfm'
import 'codemirror/addon/display/autorefresh'

export default class extends Controller {

  static targets = ['viewer', 'txt']

  initialize() {
    let editor = CodeMirror.fromTextArea(this.txtTarget,{
      mode: 'gfm',
      autoRefresh: true,
      lineNumbers: true,
      lineWrapping: true,
      indentUnit: 2,
      height: '100%',
    })
    editor.save()
    editor.refresh()
    marked.setOptions({
        langPrefix: '',
        highlight: function(code, lang) {
          return hljs.highlightAuto(code, [lang]).value
        }
      })
  }

  connect() {
    this.setEditorHeight()
    this.redrawMarkdown(this.txtTarget.value)
  }
  
  edit(e) {
    this.setEditorHeight()
    this.redrawMarkdown(e.target.value)
  }

  redrawMarkdown(markdownTxt) {
    this.viewerTarget.innerHTML = marked(markdownTxt,  {sanitized: true})
  }

  setEditorHeight() {
    this.txtTarget.style.height = `${Math.max(this.txtTarget.scrollHeight, 100)}px`
  }

  previewMode() {
    this.element.classList.toggle('preview-mode', true)
    this.element.classList.toggle('edit-mode', false)
  }

  editMode() {
    this.element.classList.toggle('preview-mode', false)
    this.element.classList.toggle('edit-mode', true)
  }
}