import { useContext } from "react"
import { ToDosStateContext } from "./state/ToDosStateContext"
import { observer } from "mobx-react-lite"
import { CompleteToDosButton } from "./components/complete-to-dos-button/CompleteToDosButton"

export const ToDosContent = observer(({
  onCompleteClick,
}: {
  onCompleteClick: () => unknown,
}) => {
  const toDosState = useContext(ToDosStateContext)

  return (
    <>
      <CompleteToDosButton
        onClick={onCompleteClick}
      />
      <ul
        data-cy="to-dos"
      >
        {
          toDosState
            .toDos
            .map(({
              id,
              name,
            }) => (
              <li
                key={`to-do-${id}`}
                data-cy="to-do"
              >
                <input
                  id={`to-do-${id}-checkbox`}
                  type="checkbox"
                  onChange={() => toDosState.toggleToDoSelection({
                    toDoId: id, 
                  })}
                  checked={toDosState.selectedToDoIds.includes(id)}
                />
                <label 
                  htmlFor={`to-do-${id}-checkbox`}
                >
                  {name}
                </label>
              </li>
            ))
        }
      </ul>
    </>
  )
})
