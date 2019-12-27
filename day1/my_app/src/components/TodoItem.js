import React from 'react';

function TodoItem({data, idx, removeItem, completeItem, selecteItem}) {
    return (
        <tr>
            <td>
                <input type="checkbox" checked={data.selected} onChange={selecteItem.bind(null,data.id)} />
            </td>
            <td>{idx + 1}</td>
            <td>{data.title}</td>
            <td>{data.done ? '是' : '否'}</td>
            <td>
                <button onClick={completeItem.bind(null,data.id)}>完成</button>
                <button onClick={removeItem.bind(null, data.id)}>删除</button>
            </td>

        </tr>
    )
}

export default TodoItem;