import { useState, useEffect, useRef } from 'react';
import './App.css';

const items = [
  { imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Armand_Duplantis_%28SWE%29_2019.jpg', description: '(Suecia, salto con pértiga): Ganó oro y estableció récord olímpico y mundial al saltar 6.25 metros.', name: 'Armand Duplantis' },
  { imgSrc: 'https://www.elgrafico.com/__export/1723498713081/sites/prensagrafica/img/2024/08/12/whatsapp_image_2024-08-12_at_3_38_13_pm_crop1723498712726.jpeg_1902800913.jpeg', description: '(Argelia, boxeo): Superó críticas y ataques, ganando oro en los 66 kg y emprendió acciones legales por ciberacoso.', name: 'Imane Khelif' },
  { imgSrc: 'https://s.france24.com/media/display/f0e23316-51e1-11ef-9aee-005056a97e36/w:980/p:16x9/58b45283f0005547fe9e2a0bc6cd9c5be98b0f31.jpg', description: '(EE.UU., natación): Ganó oro en 1500m y 800m libre, plata en relevo 4x100m libre y bronce en 400m libre, igualando el récord de más oros olímpicos para mujeres.', name: 'Katie Ledecky' },
  { imgSrc: 'https://cdn.britannica.com/53/258153-050-88B167D3/kevin-durant-phoenix-suns-shoots-free-throw-against-houston-rockets-2024.jpg', description: '(EE.UU., baloncesto): Alcanzó un récord de cuatro medallas de oro olímpicas.', name: 'Kevin Durant' },
  { imgSrc: 'https://s3.abcstatics.com/abc/www/multimedia/gente/2024/07/30/leon-marchand-oro-piscina-kUPC-U60289809963005G-1200x840@diario_abc.jpg', description: '(Francia, natación): Rompió cuatro récords olímpicos y ganó cinco medallas, incluyendo oro en 200m braza, 200m mariposa, 200m estilos y 400m estilos, y bronce en relevo 4x100m estilos.', name: 'Léon Marchand' },
  { imgSrc: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/ffe7/live/0748eab0-542f-11ef-aebc-6de4d31bf5cd.png.webp', description: '(Cuba, lucha grecorromana): Ganó oro en 130 kg, convirtiéndose en el único atleta en ganar la misma prueba en cinco ediciones y anunció su retiro de forma simbólica.', name: 'Mijaín López' },
  { imgSrc: 'https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w960/f_auto/v1722802202/primary/suihtqevu9qhgswk1qtn', description: '(EE.UU., atletismo): Ganó oro en 100m y bronce en 200m, a pesar de competir con COVID-19, lo que generó polémica.', name: 'Noah Lyles' },
  { imgSrc: 'https://www.claytenis.com/wp-content/uploads/2024/07/Novak-Djokovic-Lacoste.jpg', description: '(Serbia, tenis): Ganó el oro olímpico, completando el Golden Slam, al vencer a Carlos Alcaraz en la final.', name: 'Novak Djokovic' },
  { imgSrc: 'https://media.ambito.com/p/67d607655549ce0544762e1217d271f0/adjuntos/239/imagenes/041/713/0041713361/simone-biles-oro-usa-gymnasticsjpg.jpg', description: '(EE.UU., gimnasia): Ganó oro en equipos, concurso completo individual y salto de potro, y plata en ejercicios de suelo, regresando triunfalmente tras su retirada en Tokyo 2020.', name: 'Simone Biles' },
  { imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mqyM5hxo930TzOZz_9M0PpV3dT95rzjl4OJtDcQeqjT41Yvk', description: '(Turquía, tiro): Ganó plata en los 10m pistola de aire comprimido en equipos mixtos usando solo lentes para miopía y una mano en el bolsillo.', name: 'Yusuf Dikec' },
];

function Carousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const firstChild = carouselRef.current.children[0];
        carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
        carouselRef.current.style.transform = `translateX(-${firstChild.clientWidth}px)`;

        const transitionEnd = () => {
          carouselRef.current.style.transition = 'none';
          carouselRef.current.style.transform = 'translateX(0)';
          carouselRef.current.appendChild(firstChild);
          carouselRef.current.removeEventListener('transitionend', transitionEnd);
        };

        carouselRef.current.addEventListener('transitionend', transitionEnd);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel" ref={carouselRef}>
        <img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/08/08/16284558873970.jpg" alt="Imagen 1" />
        <img src="https://www.semana.com/resizer/v2/UATWRRJX6JFMZIM7QDYKKEGSDQ.jpg?auth=1e65a8f349327fc62c5da561fe6e020124b53f460eed1cda97c4d708257e6336&smart=true&quality=75&width=1280&height=720" alt="Imagen 2" />
        <img src="https://imagenes.eldebate.com/files/new_main_image/uploads/2024/03/17/65f6836e5bdba.jpeg" alt="Imagen 3" />
      </div>
    </div>

  );
}

function ImageGrid() {
  return (
    <section className="image-grid">
      {items.map((item, index) => (
        <div key={index} className="image-card">
          <div className="image-container">
            <img src={item.imgSrc} alt={`Imagen ${index + 1}`} />
          </div>
          <div className="description">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="banner">
        <h1>JUEGOS OLIMPICOS 2024</h1>
      </header>
      <Carousel />
      <p>
        <h1>INFORMACION DE LOS JUEGOS OLIMPICOS</h1>
        Los Juegos Olímpicos de Paris 2024 se llevarán a cabo del 26 de julio al 11 de agosto en Paris, Francia, marcando la tercera vez que la ciudad alberga el evento. La competición se desarrollará en diversos lugares, incluyendo el Stade de France, el Paris La Défense Arena y el centro acuático en Saint-Denis. Se incluirán deportes tradicionales como atletismo y natación, así como nuevas disciplinas como surf, escalada deportiva y skateboarding. Paris 2024 se enfocará en la sostenibilidad, utilizando instalaciones temporales y promoviendo la movilidad sostenible, con el objetivo de dejar un impacto duradero en la infraestructura y el desarrollo deportivo local. El evento contará con una mascota y un logo que reflejarán la identidad cultural de Francia y el espíritu moderno de Paris. La cobertura del evento será amplia, con transmisión en medios internacionales y locales, ofreciendo una experiencia única para atletas y espectadores.
      </p>
      <h1>JUGADORES DE LA OLIMPICA</h1>
      <ImageGrid />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
export default App;
