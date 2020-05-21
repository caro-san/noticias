import React from 'react';
import styles from './Formulario.module.css';
import PropTypes from 'prop-types';
import useSelect from '../hooks/useSelect';

const Formulario = ({guardarCategoria}) => {

    const OPCIONES =[
        {value: 'general', label: 'General'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'science', label: 'Ciencia'},
        {value: 'health', label: 'Salud'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'},
        {value: 'business', label: 'Negocios'},
    ]

    //Utilizar Custom Hook
    const [categoria, SelectNoticias]= useSelect('general', OPCIONES);

    //Submit al form, pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }


    return(
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoria</h2>

                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles.btn_block} btn-large pink darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}

export default Formulario;