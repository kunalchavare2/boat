import './QuizModal.scss';
import React, {useState} from 'react';
import ModalCard from '../ModalCard/ModalCard';



const QuizModal = ({quizBannerHandler, isVisible, modalData}) => {
    
    const [count, setCount] = useState(0);
    const totalStepCount = modalData.length;

    const nextModaldata = () => {
        console.log("called");
        if(count <= 1) {
            setCount((prev)=>prev+1);
        }    
    }



    return (
        <div className= {isVisible ? "modal-container visible":"modal-container"}>
            <div className="modal">
                <div className="modal__steps">
                    <span className="modal__steps-current">{count+1}</span>&nbsp;&#47;&nbsp;
                    <span className="modal__steps-total">{totalStepCount}</span>
                </div>
                <button className="modal__close-btn" onClick={quizBannerHandler}><i className="fa-solid fa-xmark"></i></button>
                <h3 className="modal__heading">
                    Gift with <span className="modal__heading-bold">boAt</span>
                </h3>

                <ModalCard quizData={modalData[count]} btnVisible={count===totalStepCount-1 ? true:false} changeModalData={nextModaldata}></ModalCard>
                

            </div>
        </div>
    )
}

export default QuizModal;