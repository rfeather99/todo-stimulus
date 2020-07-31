import { Controller } from "stimulus"
import tuiEditor from "tui-editor"
import 'codemirror/lib/codemirror.css' // codemirror
import 'tui-editor/dist/tui-editor.css' // editor ui
import 'tui-editor/dist/tui-editor-contents.css' // editor content

export default class extends Controller {
  static targets = ['txt','editor']

  initialize() {
    let editor = new tuiEditor({
      el: this.editorTarget,
      initialEditType: 'markdown',
      language: 'ja-jp',
      initialValue: this.txtTarget.value,
      previewStype: 'tab',
      usageStatistics: false,
    })

    editor.on('change', () => {
      this.txtTarget.innerHTML = editor.getMarkdown()
    })
  }
}
