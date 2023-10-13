import '../styles/Paragraph.css';

const Paragraph = () => {
    return (
        <div className="info">
            <div className='titulo'>
                <h1>Informacion para el quiz</h1>
            </div>

            <div className="infocontainer">
                <div className="info1">
                    <h2 className='title' id="left">¿Que es la contaminacion?</h2>
                    <p>La contaminacion es la introduccion de sustancias u otros elementos fisicos en un medio que provocan que este sea inseguro o no apto para su uso. El medio puede ser un ecosistema, un medio fisico o un ser vivo. El contaminante puede ser una sustancia quimica, energia (como sonido, calor, o luz), o incluso genes. A veces el contaminante es una sustancia extrana, o una forma de energia, y otras veces una sustancia natural. La contaminacion es un fenomeno tipicamente antropogenico (causado por el hombre) y se produce cuando algun componente del medio ambiente sobrepasa los niveles establecidos en su estado natural.</p>
                </div>
                <div className="info2">
                    <h2 className='title' id="right">ONGs</h2>
                    <p>Desde hace ya varias decadas, están surgiendo distintas ONGs, cuyo objetivo principal es la lucha contra el cambio climático, sus causas y sus consecuencias. Por otro lado, tienen un fuerte rol en la concientización acerca del cambio climático, promoviento ideas como el recilado, la no contaminación o la disminución de la consumición. La ONG "verde" más reconocida es Green Peace, la cual trabaja en más de 40 países alrededor del mundo. </p>
                </div>
                <div className="info3">
                    <h2 className='title'>Agenda 2030</h2>
                    <p>Los Objetivos de Desarrollo Sostenible (ODS) u Objetivos Globales son 17 objetivos globales interconectados diseñados para ser un «plan para lograr un futuro mejor y más sostenible para todos».1​ Los ODS fueron establecidos en 2015 por la Asamblea General de las Naciones Unidas (AG-ONU) y se pretende alcanzarlos para 2030. Están incluidos en una Resolución de la AG-ONU llamada 2030 Agenda o lo que se conoce coloquialmente como Agenda 2030.2​ Los ODS se desarrollaron en la Agenda de Desarrollo después de 2015 como el futuro marco de desarrollo global para suceder a los Objetivos de Desarrollo del Milenio en 2015.</p>
                </div>
            </div>
        </div>
    );
}
export default Paragraph;
