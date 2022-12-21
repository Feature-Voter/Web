import React, { useReducer, useState } from 'react'
import EditListItem from '../EditListItem/EditListItem'
import styles from '../../../styles/EditVoteList.module.scss'
import {Actions, reducer, voteItem } from './EditVoteListCore'

function EditVoteList() {
    const [state, dispatch] = useReducer(reducer, {items: [], newItem: ""})
    const [hasError, setError] = useState(false)

    function handleAddNewButton(){
        if (state.newItem === "") {
            setError(true)
        } else {
            dispatch({type: Actions.addItem, payload: {id: "", title: state.newItem}})
        }
    }

    function handleDelete(item: voteItem){
        dispatch({type: Actions.deleteItem, payload: item})
    }

    const newTitleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setError(false)
        const title = event.target.value
        dispatch({type: Actions.changeEdit, payload: {id: "", title: title}})
    };

    return (
        <div className={styles.voteComponent}>
            <div className={styles.voteList}>
                {
                    state.items.map((item,i) => 
                        <div key={i} data-testid="listItem">
                            <EditListItem item={item} onClickAction={handleDelete} />
                        </div>
                    )
                }
            </div>
            <div>
                <input type="text" value={state.newItem} placeholder="new item" onChange={newTitleChanged} />
                <input type="button" value="add" onClick={handleAddNewButton}/>
                {
                    hasError ? <p className={styles.errorText}>you need to type something!</p> : null
                }
            </div>
        </div>
    )
}

export default EditVoteList