import ListItem from "./ListItem";

interface IList {
    items: string[];
    onDelete: (index: number) => void
}

const List: React.FC<IList> = ({ items, onDelete }) => {

    if (items.length === 0) {

        return <ul data-testid="todo-list">
            <li>No Items</li>
        </ul>
    }

    return <>
        <ul data-testid='todo-list'>
            {items.map((item, index) => <ListItem key={index + item} text={item} index={index} onDelete={onDelete} />)}
        </ul>
    </>

}

export default List;

