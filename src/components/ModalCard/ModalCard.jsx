import React, {useState} from 'react';
import './ModalCard.scss';
import CardButton from '../Button/CardButton';

const ModalCard = (data) => {

    const [submitData, setSubmitData] = useState([]);
    let mainTitle = data.quizData.modalTitle;
    let mainData = data.quizData.data;

    const nextModalContent = (event) => {
        let clickedCardText = event.target.querySelector('.modal-card__text').textContent;      
        setSubmitData((prevData)=>[
          ...prevData,clickedCardText
        ]);
        data.changeModalData();  //calling parent to chnage modal data      
    }

    const btnActionHandler = () => {
        console.log(submitData);
    }
    

    return (
        <React.Fragment>       
                <div className="modal__cards">
                    <span className="modal__cards-title">{mainTitle}</span>
                    <div className="modal__cards-wrapper">
                        {
                            mainData.map(eachCard => {
                            return(
                                <div className="modal-card" onClick={nextModalContent} >
                                    <div className="modal-card__media">
                                        <img src={eachCard.imgSrc} alt={eachCard.altText} />
                                    </div>
                                    <span className="modal-card__text">{eachCard.title}</span>
                                </div> 
                                )
                            })
                        }     
                    </div>
                </div>
                {
                    data.btnVisible ? <CardButton btnText={"Submit"} btnAction={btnActionHandler}/> : ''
                }
        </React.Fragment>
    )
}

export default ModalCard;