import parentsImg from '../assets/images/quiz_1.webp';
import siblingImg from '../assets/images/quiz_2.webp';
import friendPartnerImg from '../assets/images/quiz_3.webp';
import ColleagueImg from '../assets/images/quiz_4.webp';
import fitnessImg from '../assets/images/quiz_5.webp';
import loveImg from '../assets/images/quiz_6.webp';
import outdoorImg from '../assets/images/quiz_7.webp';
import bratheImg from '../assets/images/quiz_8.webp';
import tightBudgetImg from '../assets/images/quiz_9.webp';
import closeto3kImg from '../assets/images/quiz_10.webp';
import speacialBudgetImg from '../assets/images/quiz_11.webp';

const modaldata = [
    {
       modalTitle: "Who do you want to gift?",
       data :[
        {
            title: "Parent(s)",
            imgSrc: parentsImg,
            altText: "Parents Image"
        },
        {
            title: "Siblings",
            imgSrc: siblingImg,
            altText: "Siblings Image"
        },
        {
            title: "Friend/Partner",
            imgSrc: friendPartnerImg,
            altText: "Friend and Partner Image"
        },
        {
            title: "Colleague",
            imgSrc: ColleagueImg,
            altText: "Siblings Image"
        }
       ]
    },
    {
       modalTitle: "Which sentence describes them the best?",
       data :[
        {
            title: "They are into fitness",
            imgSrc: fitnessImg,
            altText: "A man running outside "
        },
        {
            title: "They love to binge watch",
            imgSrc: loveImg,
            altText: "A man running outside "
        },
        {
            title: "They love the great outdoors",
            imgSrc: outdoorImg,
            altText: "A women eating a food"
        },
        {
            title: "They breathe and eat music",
            imgSrc: bratheImg,
            altText: "Both Man and woman chiling outside on bicycle"
        }
       ]
    },
    {
       modalTitle: "How much do you want to spend?",
       data :[
        {
            title: "I'm a bit tight on budget",
            imgSrc: tightBudgetImg,
            altText: "Image showing money is divided according to the need"
        },
        {
            title: "I can spend close to 3k",
            imgSrc: closeto3kImg,
            altText: "Image showing cash "
        },
        {
            title: "It's for someone special - budget no bar.",
            imgSrc: speacialBudgetImg,
            altText: "A person is giving gift"
        }
       ]
    }   
]

export default modaldata;