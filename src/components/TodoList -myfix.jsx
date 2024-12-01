import { TodoCard } from "./TodoCard";

export function TodoList(props){
    const { todos, selectedTab } = props
    const tab = selectedTab

    // const todosWithIndex = todos.map((todo, todoIndex) =>{
    //     input: todo.input
    //     complete: todo.complete
    //     index: todoIndex


    // })
    
    const todosWithIndex = todos.map((todo, todoIndex) => ({
        input: todo.input,
        complete: todo.complete,
        index: todoIndex
    }))


    const filterTodosList = tab === 'All' ? 
    todosWithIndex :
        tab === 'Completed' ?
        todosWithIndex.filter(todo => todo.complete) : 
        todosWithIndex.filter(todo => !todo.complete)


    return(
        <>
           {filterTodosList.map((todo, todoIndex)=>{
                return(
                    <TodoCard 
                        key={todoIndex} 
                        
                        {... props}
                        todo={todo}/>
                )
           })}  
        </>
    )
}