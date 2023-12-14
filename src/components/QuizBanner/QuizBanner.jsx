import React, {useState} from 'react';
import './QuizBanner.scss'
import QuizModal from '../QuizModal/QuizModal';
import modalCardData from '../../data/modalData';

const QuizBanner = () => {
    const [isVisible, setVisible] = useState(false);

    const quizBannerHandler = (event) => {
        if(event.target.classList.contains('quiz-banner')||event.target.classList.contains('modal-container')||
           event.target.classList.contains('modal__close-btn')) {
            setVisible(!isVisible);
        }
    }

    return (
        <React.Fragment>
            <div className="quiz-banner" onClick={quizBannerHandler}>
                <QuizModal isVisible={isVisible} modalData={modalCardData}></QuizModal>
            </div>
        </React.Fragment>
    );
}

export default QuizBanner;