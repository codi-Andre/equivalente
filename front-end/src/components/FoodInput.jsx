export function FoodInput(props) {
    return (
        <div className="input-wrapper">
            <input 
                type={props.type} 
                placeholder={props.placeholder} 
                id={props.id} 
                list={props.list} 
                value={props.value} 
                onChange={(e) => props.onChange(e)} 
            />
            {props.help ? <span>{props.help}</span> : ''}
            {props.icon ? props.icon : ''}
        </div>
    )
}