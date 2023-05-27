import React, {useState} from 'react'
import Experience from '../model3d/Experence'
import Header from '../Home/Header'
import icon_profile from '../../assets/logo/profile_default.svg';
import Navegator from '../profile/Navegator'
import { Canvas } from '@react-three/fiber'
import ModelVida3D from '../model3d/ModelVida3D';
import closeIcon from '../../assets/item_menu/close.svg';
import backArrrow from '../../assets/item_menu/backArrow.svg';
import {  
    useLocation ,
    useNavigate
} from 'react-router-dom';


const Model3d = () => {

    const history =  useNavigate();
    const [showIn, setShowIn] = useState(false);
    const handleModalIn = () => setShowIn(true);
    const handleCloseIn = () => setShowIn(false);

    React.useEffect(() => {
        document.getElementById('root').classList.add('remove_gap');
    }, []);

    const location = useLocation();
    const pathBack = location.state?.pathBack;

    const handlePathBack = () => {
        history(pathBack);
    }

    return (
        <>
            <Header>
                <div className='_container_profile'>
                    <a>
                        <img src={icon_profile} alt="profile" />
                    </a>
                 </div>
            </Header>
            <div className='_container_primary_profile'>
            <div className='_arrow_left_back'>
                    <a onClick={handlePathBack}>
                        <img src={backArrrow} alt="back" />
                    </a>
            </div>
            <Navegator />
                <Experience title={'Vida'}>
                    <div className='canvas_3d'>
                        <Canvas
                            camera={ {
                                fov: 45,
                                near: 0.1,
                                far: 200,
                                position: [ -4, 30, 7 ]
                            } }
                            //maldita propiedad, 30m perdi de mi vida :3
                            shadows={true}
                        >
                          <ModelVida3D /> 
                                handleModalIn={handleModalIn}
                                handleCloseIn={handleCloseIn}
                          </Canvas>
                        {showIn &&
                        <div className='_popup_3d_'>
                            <div className='_container_popup_3d'>
                                <a onClick={handleCloseIn} className='_close_popup_'>
                                    <img src={closeIcon} alt="close" />
                                </a>
                                <h1>Religión de la cultura Calima</h1>
                                <p>Predominó el culto funerario, donde las personas creían en el más allá. Existieron un alto número de tumbas, de todos los períodos que tuvo la cultura, y que estaban acompañados con objetos hechos a base de oro y amas guerra, las cuales eran construidas en pozos,</p>
                                <p>De igual manera, solían practicar el sacrificio como un ritual funerario y todo esto era parte de una filosofía el fallecido debe de emprender el viaje al otro mundo con los recursos necesarios y en compañía de los seres queridos. Por lo que se debe de analizar los siguientes elementos que solían estar en las tumbas:</p>
                                    <ol>
                                        <li>
                                             <h3>Máscaras de oro</h3>
                                            <p>Permitía saber que la persona que estaba era un dios.</p>
                                        </li>
                                        <li>
                                            <h3>Pectorales</h3>
                                            <p>Asociada con la sabiduría del alma que entablaría una guerra contra las tinieblas para llegar al más allá.</p>
                                        </li>
                                        <li>
                                            <h3>Vasijas de barro</h3>
                                            <p>Exponían el culto a los órganos sexuales femeninos.</p>
                                        </li>
                                        <li>
                                            <h3>Alcazarra</h3>
                                            <p>Representación al trabajo para lograr convertirse en un hombre solar y poder realizar magníficas obras.</p>
                                        </li>
                                    </ol>       
                            </div>
                        </div>
                        }
                    </div>
                </Experience>
            </div>
        </>
    )
}
                   

export default Model3d