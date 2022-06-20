import './employees-list-item.css'
import { Component } from 'react'


class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            star: false
        }
    }

    onIncrease = () => {
        this.setState(({ increase }) => ({
            increase: !increase
        }))
    }

    likeStar = () => {
        
            this.setState(({star}) => ({
                star: !star
            }))
        
    }
    render() {
        const { name, salary } = this.props;
        const { increase, star } = this.state;

        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += ' increase';
        }

        if (star){
            classNames += ' like'
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label"
                    onClick={this.likeStar}
                >{name}</span>
                <input className="list-group-item-input" type="text" defaultValue={salary + '$'} />
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={this.onIncrease}
                    >
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>

                </div>
            </li>
        )
    }
}


export default EmployeesListItem;