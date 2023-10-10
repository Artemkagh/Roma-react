import React from 'react';
import '../index.css';
import Style from '../Components/Style';
import {hata, cars, office, romcha} from '../images'

function Header(){

    return(
        <div>
            <img src = {romcha} alt = "soska" class="r8img"/>
            
            <div className = "abouttxt">
                <h1>Личный блог</h1>
                <h1>О жизни. О работе. О семье.</h1>
            </div>
        
            <div className="citat">"   Я надеюсь на лучшее, но готовлюсь к худшему. Я не верю, когда слышу: 
                «Ой, этот успех так неожиданно пришел…». Если кому-то везет,
                может, он и заслужил в прошлой жизни. Но успеха не бывает у тех, кто к нему не готовился. "
            </div>

            <div className="maintheme">
                <h2>СТИЛЬ</h2> 
            </div>
        
            <Style items = {[
                {title: "Двухэтажная вилла в стиле модерн на берегу моря в Европе. Бассейн, летняя терасса, шикарные зоны отдыха. Да, это один из объектов моей недвижимости для проживания стоимостью 2 миллиона евро. Здесь я провожу всего пару месяцев в году, когда на побережье необычайно приятная погода, поскольку сильный холод или жестокая жара меня раздражают. К тому же, смена обстановки хорошо вляет на продуктивность работы. Поскольку это моя не самая дорогостоящая недвижимость, несмотря на всю ее красоту, она быстро надоедает.", pic:hata}, 
                {title: "Машины - моя страсть. Особоенно если это быстрые заряженные спорткары или роскошные комфортные авто. Не могу сказать точное количество машин в моём автопарке, поскольку никогда не считал их. Но что могу сказать точно - иногда бывает трудно выбрать на чем поехать сегодня - статный и гордый Майбах или молниеносную Феррари.", pic:cars}, 
                {title: "Я всегда добиваюсь поставленных целей и моя компания тому подтверждение. Когда-то я начинал с небольшой, откровенно маленькой компании, расположенной в гараже у отца. Тогда у меня была только идея и всего один компьютер. Сейчас же я я вляюсь генеральным директором крупной IT корпорации, которую сам и основал, с многоэтажным стильным офисом в центре города. И я не остановлюсь на достигнутом.", pic:office}
            ]}/>
        </div>
        );
}


export default Header;