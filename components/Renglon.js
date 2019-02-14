import React,{Component} from 'react'
import Swal from 'sweetalert2';

class Renglon extends Component {

    state = {
        activo: '',
        id:''
    }
    
    mostrarResultado = (imagen,desc) => {
        return(
            Swal.fire({
                title: `${desc}`,
                imageUrl: `${imagen}`,
                imageWidth: 300,
                imageHeight: 250,
                imageClass: 'img-fluid',
                imageAlt: 'Custom image',
                animation: false,
                confirmButtonText:'¡Justo así!',
                confirmButtonColor: '#E11C4C',
                showCancelButton: true,
                cancelButtonText: 'Ok',
                cancelButtonColor: '#E11C4C',
            })
            .then((result) => {
                if (result.value) {
                    this.elegirFeeling(desc)
                }
              })
        )
    }

    elegirFeeling = (desc) => {
        this.props.cambiarFeeling(desc)
    }

    render(){
        const buttonStyle = {
            background: '#E11C4C',
        };
        const {id,desc,imgUrl} = this.props.info
        return(
            <tr>
                <th scope="row" >{id}</th>
                <td >{desc}</td>
                <td><button className='btn mr-3 btn-sm mt-1' style={buttonStyle} onClick={()=>this.elegirFeeling(desc)}>Elegir</button><button className='btn btn-sm mt-1' style={buttonStyle} onClick={()=>this.mostrarResultado(imgUrl,desc)}>Detalle</button></td>
            </tr>
        )
    }
    
}

export default Renglon;