export interface ITodoContext {
    todos: string[],
    addTodo: (item: string) => void,
    update: (item: string, index: number) => void,
    remove: (intex: number) => void
}

