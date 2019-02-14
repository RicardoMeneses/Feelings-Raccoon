import React,{Component} from 'react'
import Renglon from './Renglon'

class Feelings extends Component {

    state = {
        feeling: ''
    }

    cambiarFeeling = (feeling) => {
        this.setState({feeling})
    }

    render(){
        const feelingsId = Object.keys(this.props.feelings);
        return(
            <table className='table table-sm text-center'>
                <thead>
                    <tr className='text-center'>
                        <th scope="col">#</th>
                        <th scope="col">Me siento: <span>{this.state.feeling}</span></th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody >
                {feelingsId.map(key=>(
                    <Renglon
                        key={key}
                        info={this.props.feelings[key]}
                        cambiarFeeling={this.cambiarFeeling}
                    />
                ))}
                </tbody>
                <style jsx>{`
                    
                    span{
                        color: #E11C4C;
                    }
                    tr {
                        height: 20px;
                      }
                    
                `}</style>
                
            </table>
        )
    }
}

export default Feelings;