import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['editModal', 'edit', 'delete']

  edit(e) {
    $(this.editModalTarget).modal('show')
  }

  openBoard(e) {
    if (this.editTarget.contains(e.target))
      return
    if (this.deleteTarget.contains(e.target))
      return
    let id = this.data.get("id")
    Turbolinks.visit(`/boards/${id}`)
  }
}
