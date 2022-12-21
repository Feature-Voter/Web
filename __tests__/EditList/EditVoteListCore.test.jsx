import {render, fireEvent, screen} from '@testing-library/react'
import EditVoteList from '../../components/EditList/EditVoteList/EditVoteList'

describe('EditListCore', () => {
    it("should update titleInput", () => {
        render(<EditVoteList />)

        const titleInput = screen.getByPlaceholderText('new item')
        fireEvent.change(titleInput, {target: {value: "test"}})
        expect(titleInput.value).toBe('test')
    })
    it('should create new Item', () => {
        const { container } = render(<EditVoteList/>)
        const titleInput = screen.getByPlaceholderText('new item')
        fireEvent.change(titleInput, {target: {value: "test"}})
        expect(titleInput.value).toBe('test')

        const addButton = screen.getByDisplayValue('Add New')
        fireEvent.click(addButton)

        let items = screen.getAllByTestId('listItem')
        expect(items.length).toBe(1)
    })
    it('(should delete one element ', () => {
        const { container } = render(<EditVoteList/>)
        const titleInput = screen.getByPlaceholderText('new item')
        fireEvent.change(titleInput, {target: {value: "test"}})
        expect(titleInput.value).toBe('test')

        const addButton = screen.getByDisplayValue('Add New')
        fireEvent.click(addButton)

        fireEvent.change(titleInput, {target: {value: "test"}})
        expect(titleInput.value).toBe('test')
        fireEvent.click(addButton)

        let items = screen.getAllByTestId('listItem')
        expect(items.length).toBe(2)

        const deleteButton = screen.getAllByDisplayValue('Delete')
        fireEvent.click(deleteButton[0])

        let items2 = screen.getAllByTestId('listItem')
        expect(items2.length).toBe(1)
    })
}) 