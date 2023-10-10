import React from 'react';
import '../index.css';
import { lvl1, lvl2, lvl3, romchasuccess} from '../images';

function Success(){
    const [pointactive, setPointActive] = React.useState(0);
    const pointItems = [0, 1 , 2];
    const sucImg = [lvl1, lvl2, lvl3];
    const sucText = ["История началась в отцовском гараже, где я начал собирать всякие мелкие устройства, помогающие в быту моим родителям. Как то раз у меня была идея собрать механического осла, к которому можно было привязать груз на колесах, чтоб тот тащил его. И у меня вышло... Я продал его богатому коллекционеру за нескромную сумму в 50000$.",
    "Это дало мне огромный толчок в развитии моего дела. Мы с моими друзьями , и основными  помощниками Артемом Трандасиром и Максимом Буценко, открыли свой офис, где началась жизнь частной IT фирмы. Мы работали ночи напролет и не замечали, как быстро росли.",
    "Все пришло к тому, что через пару лет, нам удалось открыть двери в мировой бизнес и выйти на главные строчки топовых фирм. Делая работу с любовью и качественным подходом. Моя компания заслужила всеобщее доверие у людей на глобальном уровне!"];
    const onPointChange = (index) =>{
        setPointActive(index);
    }

    const handleClickScroll = () => {
        const element = document.getElementById('gotoimg');
        if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return(
        <div className='successcontainer'>
            <div className='textimg'>
                <p> Всем привет! Мир знает меня как Роман Лемешев, 
                    и вот моя история. Она облетела весь мир, полная взлетов и падений, 
                    страхов и счастливых моментов.
                    <div className='buttonreadnext' onClick={handleClickScroll}>
                        Читать далее...    
                    </div>
                </p>
                <img src={romchasuccess} alt="" />
            </div>

            <img id='gotoimg' className='mainimg' src={sucImg[pointactive]} alt="" key={sucImg[pointactive]}/>
            <div className='point_container'>
                {pointItems.map( (item, index) => (
                    <div 
                        onClick={() => onPointChange(index)} 
                        className={pointactive === index ? 'point_active' : 'point_disable'} 
                        key={`${item}_${index}`}>
                    </div>
                ))
                }
                
            </div>
            <div className='undertext'>{sucText[pointactive]}</div>
        </div >
        );
}


export default Success;