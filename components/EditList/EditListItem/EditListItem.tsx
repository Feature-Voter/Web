import React, { useId } from 'react'
import { voteItem } from '../EditVoteList/EditVoteListCore'

type editItemProps = {
    item: voteItem,
    onClickAction: (item: voteItem) => void
}

function EditListItem({item, onClickAction}: editItemProps) {
    const id = useId()
    const handleClick = () => {
        onClickAction(item)
    }

    return (
        <div id={id} key={id}>
            <span  data-testid="title">{item.title}</span>
            <input type="button" value="Delete" onClick={handleClick}/>
        </div>
    )
}

export default EditListItem