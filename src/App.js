import React, { useState } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Image from '../src/img/image.jpg';
import { FaChevronDown } from 'react-icons/fa';

function App() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <section id="home" className="home-section">
        <h1 className="title">
          PROTOCOLO PARA LA ATENCIÓN AL DERECHO A MORIR CON DIGNIDAD, EN EL MUNICIPIO DE GIRARDOTA
        </h1>
        <div className="info">
          <p className='description'>
          La Resolución número 971 del 2021 establece el procedimiento de recepción, trámite y reporte de las solicitudes de eutanasia, así como las directrices para la organización y funcionamiento del Comité encargado de hacer efectivo el derecho a morir con dignidad a través de la eutanasia.
          La muerte digna ha sido analizada en la Corte Suprema en diferentes años. La sentencia C-239 de 1997 determinó las condiciones que una persona debe tener para solicitar la eutanasia. Esta decisión se tomó debido a que existen personas que sufren dolores o enfermedades incompatibles con una vida digna y de calidad.
          </p>
          <p className={`description ${showMore ? 'show' : 'hide'}`}>

          En la sentencia T-970 de 2014, la Corte identificó que a pesar de existir un precedente constitucional, la falta de regulación ha impedido que este derecho se materialice realmente. Por lo tanto, establecieron las condiciones, sujetos activos, sujetos pasivos, obligaciones y garantías para el derecho a morir con dignidad.

          </p>
          {!showMore && (
            <button className="read-more" onClick={handleShowMore}>
              Leer más <FaChevronDown className="icon" />
            </button>
          )}
          {showMore && (
            <>
              <p className="description">
              Finalmente, la eutanasia se convirtió en ley el 20 de abril de 2015. Según esta ley, los pacientes pueden solicitar la eutanasia si no tienen una calidad de vida óptima y desean tener una muerte digna. Aunque el derecho a la vida es un tema que se opone a la eutanasia en los países donde es legal, también se considera el derecho a tener una calidad de vida, lo cual es incompatible cuando una persona sufre una enfermedad dolorosa y progresiva.

              El concepto de "buen morir" o calidad de la muerte es importante para garantizar y preservar la dignidad humana hasta el final de la vida. Se refiere a la calidad de vida experimentada por un enfermo en los últimos tres días de su existencia, según los expertos en tanatología.

              Es crucial diferenciar entre la muerte digna, el suicidio asistido y la eutanasia. El suicidio asistido implica que un tercero proporciona intencionalmente los medios o procedimientos para que una persona se suicide, pero este facilitador no es un profesional de la salud. En cambio, la eutanasia implica la ayuda profesional, donde existe una enfermedad o dolencia vital previa y la persona desea una muerte activa asistida. En el suicidio, tanto genérico como asistido, no existe una enfermedad terminal ni una dolencia crónica.

              La ayuda para morir debe ser brindada por un profesional de la medicina, con la autorización de un comité científico-interdisciplinario. Sin embargo, existe la posibilidad de que el profesional se niegue a realizar el procedimiento por razones de libertad de conciencia. Algunos pueden considerar que una muerte digna implica morir de forma natural después de sufrir con valentía, mientras que otros pueden creer que es mejor pedir ayuda para morir y evitar ese sufrimiento.
              </p>
            </>
          )}
            <div className="image-container">
              <img src={Image} alt="Imagen" className="image" />
            </div>
            <section id="relacion" className="relacion-section">
              <h2 className='SubTitle'>RELACIÓN CON EL PLAN DECENAL PÚBLICA</h2>
              <p>Una de las dimensiones que enmarca este proyecto es Convivencia Social y Salud Mental, con esta se busca proteger la salud mental tanto individual como colectiva de la población colombiana, tener una muerte digna no solo ayudara a dar descanso a la persona que está padeciendo una enfermedad dolorosa, sino también a que sus familiares cercanos tengan tranquilidad y no se presente el síndrome del cuidador quemado.

              Parte de la salud mental en este proceso, también es dignificar el tema de la muerte y todas las situaciones que esto conlleva, poder dar un trato especial, con acompañamiento terapéutico y además con diversas especialidades de salud mental que ayuden a dar un trato dignificante para lograr tener una muerte, donde se descanse tal vez de dolores y deterioro que generan perdida de la calidad de vida.
              </p>
            </section>
            <section id="definiciones-dropdown" className="relacion-section">
              <h2 className='SubTitle'>Definiciones</h2>
            </section>
            <section id='agonia'>
            <p ><b>Agonía:</b> Situación que precede a la muerte cuando se produce de forma gradual y en la que existe deterioro físico, debilidad extrema, pérdida de capacidad cognoscitiva, conciencia, capacidad de ingesta de alimentos y pronóstico de vida de horas o de días.
              </p>
            </section>
            <section id='adecuacion'>
            <p ><b>Adecuación de los esfuerzos terapéuticos (AET):</b> Ajuste de los tratamientos y objetivos de cuidado a la situación clínica de la persona, en los casos en que esta padece una enfermedad incurable avanzada, degenerativa o irreversible o enfermedad terminal, cuando estos no cumplen con los principios de proporcionalidad terapéutica o no sirven al mejor interés de la persona y no representan una vida digna para ésta. La AET supone la retirada o no instauración de actividades, intervenciones, insumas, medicamentos, dispositivos, servicios, procedimientos o tratamientos, donde la continuidad de estos pudiera generar daño y sufrimiento, o resultar desproporcionados entre los fines y medios terapéuticos.
              </p>
            </section>
            <section id='consentimiento'>
            <p ><b>Consentimiento Informado:</b> Aceptación libre, voluntaria y consciente de la, persona en pleno uso de sus facultades para que tenga lugar un acto asistencial. - Para tal fin, la persona deberá entender la naturaleza de la decisión tras recibir información sobre los beneficios, riesgos, alternativas e implicaciones del acto asistencial. El consentimiento informado se da en el momento de realización del procedimiento eutanásico, y se da como resultado de un proceso de comunicación, donde el médico y el equipo interdisciplinario han dado información clara objetiva, idónea y oportuna sobre la enfermedad o condición, estadio clínico y pronóstico, así como del proceso de la solicitud y del procedimiento a realizarse, a la persona que expresa la solicitud, así como de su derecho a desistir de la misma.

              </p>
            </section>
            <section id='cuidado'>
            <p ><b>Cuidado paliativo:</b> Cuidados apropiados para el paciente con una enfermedad terminal, enfermedad incurable avanzada, degenerativa e irreversible, 'donde el control del dolor y otros síntomas, requieren atención integral a los elementos físicos, psicológicos, emocionales, sociales y espirituales, durante la enfermedad y el duelo. El objetivo de los cuidados paliativos es lograr la mejor calidad de vida posible para el paciente y su familia.

              </p>
            </section>
            <section id='derecho'>
            <p ><b>Derecho fundamental a morir con dignidad:</b>  Facultades que le permiten a la persona vivir con dignidad el final de su ciclo vital, permitiéndole tomar decisiones sobre cómo enfrentar el momento de muerte. Este derecho no se limita a la muerte anticipada o eutanasia, sino que comprende el cuidado integral del proceso de muerte, incluyendo el cuidado paliativo.


              </p>
            </section>
            <section id='doc'>
            <p ><b>Documento de voluntad anticipada (DVA):</b>  Es el documento en el que toda persona capaz, sana o en estado de enfermedad, en pleno uso de sus facultades legales y mentales y como previsión de no poder tomar decisiones en el futuro, declara, de forma libre, consciente e informada su voluntad sobre las preferencias al final de la vida que sean relevantes para su marco de valores personales, su entorno cultural, las creencias e ideología que lo definen. No suplanta la posibilidad de decidir y expresar su consentimiento actual en el proceso de atención si la persona es capaz y está en pleno uso de sus facultades legales y mentales.
              </p>
            </section>
            <section id='enfermedad'>
            <p ><b>Enfermedad incurable avanzada:</b>  Aquella enfermedad cuyo curso es progresivo y gradual, con diversos grados de afectación, tiene respuesta variable a los tratamientos específicos y evolucionará hacia la muerte a mediano plazo.
              </p>
            </section>
            <section id='enfermedad-ter'>
            <p ><b>Enfermedad terminal:</b>  Enfermedad médicamente comprobada avanzada, progresiva e incontrolable, que se caracteriza por la ausencia de posibilidades razonables de respuesta al tratamiento, por la generación de sufrimiento físico - psíquico a pesar de haber recibido el mejor tratamiento disponible y cuyo pronóstico de vida es inferior a seis (6) meses.

              </p>
            </section>
            <section id='eutanasia'>
            <p ><b>Eutanasia:</b>  Procedimiento médico en el cual se induce activamente la muerte de forma anticipada a una persona con una enfermedad terminal que le genera sufrimiento, tras la solicitud voluntaria, informada e inequívoca de la persona. La manifestación de la voluntad puede estar expresada en un documento de voluntad anticipada de la misma.
              </p>
            </section>
            <section id='eutanasia-soli'>
            <p ><b>Solicitud de eutanasia:</b>   Expresión, verbal o escrita, realizada por un paciente que desea adelantar el momento de muerte al encontrarse frente a sufrimiento provocado por una condición clínica de fin de vida. La solicitud debe ser voluntaria, informada, inequívoca y persistente. El documento de voluntad anticipada se considera una forma válida de expresión de la solicitud de eutanasia.
              </p>
            </section>
        </div>
        </section>
      </div>
    </div>
  );
}

export default App;
