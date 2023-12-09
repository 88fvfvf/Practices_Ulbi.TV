import React, { useRef, useState } from "react";

const EventExample = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    // Click
    const ClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("Drug");
    }
    // OnDragOver
    const dragWithPreventHander = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }
    // OnDragLeave
    const leaveHeander = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }
    // onDrop
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" />
            <button onClick={ClickHandler}>Button</button>
            <div onDrag={dragHandler} draggable style={{ width: "200px", height: "200px", background: "red" }}></div>
            <div onDrop={dropHandler} onDragLeave={leaveHeander} onDragOver={dragWithPreventHander} style={{ width: "200px", height: "200px", background: isDrag ? "blue" : "red", marginTop: "15px" }}></div>
        </div>
    )
}

export default EventExample