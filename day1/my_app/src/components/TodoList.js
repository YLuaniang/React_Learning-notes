import React,{Component} from 'react';
import TodoForm from './TodoForm'
import TodoContent from './TodoContent'

//往模块对象中添加TodoList
class TodoList extends Component{
    constructor() {
        super();

        this.state = {
            checkedAll: false,
            datalist: [
                {
                    id: Date.now(),
                    title: "明年实现月薪过万",
                    done: false,
                    selected: false
                },
                {
                    id: Date.now() + 10,
                    title: "男同学变成高富帅，迎娶白富美",
                    done: false,
                    selected: false
                },
                {
                    id: Date.now() + 20,
                    title: "女同学变成白富美，迎娶高富帅",
                    done: false,
                    selected: false
                }
            ]
        }

        // 在初始化时改变this的指向（推荐）
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.completeItem = this.completeItem.bind(this);
        this.selecteItem = this.selecteItem.bind(this);        
        this.selectedAll = this.selectedAll.bind(this);
        


    }

    //自定义方法
    // 在这里写的方法，会自动称为原型的方法
    addItem(title) {
        //注意：在react自定义函数中没有this

        //VUE的修改方式
        // this.state.datalist.push()

        //React的修改方式：覆盖
        // this.setState()
        let data = {
            id:Date.now(),
            title,
            done:false,
            selected:false
        }
        let datalist = this.state.datalist;
        datalist.unshift(data)
        this.setState({
            datalist,
            checkedAll: false
        })
        

    }

    removeItem(id) {
        let datalist = this.state.datalist.filter(item=>item.id!==id);
        let checkedAll = this.state.checkedAll;
        if(datalist.length === datalist.filter(item => item.selected).length){
            checkedAll = true;
        };
        console.log(checkedAll)
        console.log(datalist.filter(item => item.selected).length)
        this.setState({
            datalist,
            checkedAll
        })
    }

    completeItem(id){
        let datalist = this.state.datalist.map(item=>{
            if(item.id === id) {
                item.done = true;
            }
            return item;
        })
        this.setState({
            datalist
        })
    }

    selecteItem(id){
        let datalist = this.state.datalist.map(item=>{
            if(item.id === id) {
                item.selected = !item.selected;
            }
            return item;
        })
        this.setState({
            datalist,
            checkedAll:datalist.every(item=>item.selected)
        });
    }


    selectedAll() {
        let checkedAll = !this.state.checkedAll;
        let datalist =this.state.datalist.map(item=>{
            item.selected = checkedAll;
            return item;
        })
        this.setState({
            checkedAll,
            datalist
        })
    }





    render() {
        // 在这里如何获取state数据
        // render中的this指向实例
        return (
            <div>
                <TodoForm 
                addItem={this.addItem}
                />
                <TodoContent 
                datalist={this.state.datalist}
                removeItem={this.removeItem}
                completeItem={this.completeItem}
                selecteItem={this.selecteItem}
                checkedAll={this.state.checkedAll}
                selectedAll={this.selectedAll}
                />
            </div>
        )
    }
}



// 往模块对象中添加default属性
export default TodoList;