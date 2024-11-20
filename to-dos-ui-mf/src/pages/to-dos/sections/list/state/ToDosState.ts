import { makeAutoObservable } from 'mobx'
import { ToDo } from '../../../../../api-types'

export class ToDosState {
  private _toDos: ToDo[] = []
  private _needToReloadToDos: boolean = false
  private _selectedToDoIds: number[] = []

  constructor() {
    makeAutoObservable(this)
  }

  initialize({
    toDos,
  }: {
    toDos: ToDo[],
  }) {
    this._toDos = toDos
  }

  get toDos() {
    return this._toDos
  }

  get selectedToDoIds() {
    return this._selectedToDoIds
  }

  get needToReloadToDos() {
    return this._needToReloadToDos
  }

  toggleToDoSelection({
    toDoId,
  }: {
    toDoId: number,
  }) {
    const indexOfToDoIdAmongSelected = this._selectedToDoIds.indexOf(toDoId)

    if (indexOfToDoIdAmongSelected === -1) {
      this._selectedToDoIds.push(toDoId)
    }
    else {
      this._selectedToDoIds.splice(indexOfToDoIdAmongSelected, 1)
    }
  }

  clearSelection() {
    this._selectedToDoIds = []
  }

  triggerToDosReload() {
    this._needToReloadToDos = !this._needToReloadToDos
  }
}
