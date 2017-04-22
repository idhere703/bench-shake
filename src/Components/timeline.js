import React from 'react';


class Timeline extends React.Component {

    render() {
        return (<div>
                  <div className="main__timeline">
                    <h1 className="main__timeline-header">ČASOVÁ<br />OS<br />HYPERLOOPU</h1>
                    <p className="main__timeline-paragraph">Všetko od roku 1867 až po rok 2003. História, postupy, vanálezy...</p>
                  </div>
                  <div className="timeline">
                    <div className="column">
                      <div className="title">
                        <h1> 1867 </h1>
                        <h2> ALFRED ELY BEACH: <br /> BEACH PNEUMATIC TRANSIT </h2>
                      </div>
                      <div className="description">
                        <p> Americký vynálezca v tomto roku prezentoval tunelový systém, v ktorom sa pomocou stlačeného vzduchu pohybovala transportná bunka valcovitého tvaru. Na dráhe
                          premávala kyvadlovým spôsobom jedna transportná kapsula. Pohyb zabezpečoval pneumatický kompresor, ktorý v jednom smere kapsulu “vytláčal” a v druhom smere
                          ”nasával”. Bola vybudovaná aj skúšobná dráha, ktorá istý čas fungovala ale projekt bol zamietnutý a v dôsledku krachu americkej burzy sa ho nepodarilo
                          oživiť. </p>
                      </div>
                    </div>
                    <div className="column">
                      <div className="title">
                        <h1> 1904 </h1>
                        <h2> ROBERT H. GODDARD: <br /> VACUUM TUBE TRANSPORTATION SYSTEM </h2>
                      </div>
                      <div className="description">
                        <p> Prvé zmienky o jeho koncepte sa objavili v roku 1909 ale kompletná dokumnetácia pochádza z roku 1904, ktorá sa objavila až 30 rokov po jeho smrti v opustenom
                          sklade. V tomto koncepte Goddard popisuje hlavné črty konceptu Hyperloop. Spomína použitie lineárneho elektromotora. Opisuje zariadenie na minimalizáciu
                          nepriaznivého prúdenia vzduchu v okolí transportnej kapsuly. Venuje sa aj použitiu vzduchových ložísk. Hovorí o cestovaní rýchlosťou 1900 km/h. </p>
                      </div>
                    </div>
                    <div className="column">
                      <div className="title">
                        <h1> 1909</h1>
                        <h2> BORIS WEINBERG: <br /> POHYB BEZ TRENIA </h2>
                      </div>
                      <div className="description">
                        <p> Boris Weinberg vo svojej práci vydanej v roku 1914, písal o levitujúcich automobiloch na elektromagnetický pohon, pohybujúcich sa v medenom potrubí, z ktorého
                          bol odsatý vzduch. Experimentoval s 10 kg vozňom, ktorý sa pohyboval v medenom potrubí . Tento systém bol kruhový a vožeň dosahoval maximálne 6 km/h. Tvrdil,
                          že na 3km trati vozeň dosiahne až 800-1000 km/h. Projekt nemohli zrealizovať kvôli vysokým finančným nákladom. </p>
                      </div>
                    </div>
                    <div className="column">
                      <div className="title">
                        <h1> 1969 </h1>
                        <h2> JOHN A. VOLPE: <br /> STREAMLINERS WITHOUT WHEELS </h2>
                      </div>
                      <div className="description">
                        <p> Volpe detailne popisuje koncepty, ale aj prototypy dopravných prostriedkov, ktoré sa mali pohybovať na vzduchových „vankúšoch“ či „ložiskách“. A to nad otvorenou
                          traťou alebo v polouzavretom a uzavretom potrubí. Spomína lineárne indukčné motory, pneumatický pohon, transportné potrubné systémy s minimálnou atmosférou
                          či dokonca vákuom. Uvádza, že rýchlosti týchto vozidiel sa môžu pohybovať od 300 do 800 km/h. Ukončenie konceptov majú na svedomí financie alebo technika.
                        </p>
                      </div>
                    </div>
                    <div className="column">
                      <div className="title">
                        <h1> 1972</h1>
                        <h2> ROBERT M. SALTER: <br /> THE VERY HIGH SPEED TRANSIT SYSTEM </h2>
                      </div>
                      <div className="description">
                        <p> Jednalo sa o víziu podzemnej tunelovej prepravy obrovskou rýchlosťou, až 16000 km/h. Technológiu nazval "plávanie po magnetickej dráhe" a prepravný modul
                          "gondolou".Za kľúčové považoval minimalizovanie energie nutnej na prevádzku. Preto navrhol vytvoriť v tuneli atmosféru, aká panuje v maximálnej nadmorskej
                          výške, v ktorej lietajú dopravné lietadlá. Tým by sa minimalizoval odpor vzduchu. Aby ešte ušetril ďalšiu energiu, potreboval eliminovať trenie. Riešením
                          boli „elektromagnetické lôžka. </p>
                      </div>
                    </div>
                    <div className="column">
                      <div className="title">
                        <h1> 1974</h1>
                        <h2> SWISSMETRO </h2>
                      </div>
                      <div className="description">
                        <p> Swissmetro bol/je švajčiarsky vactrain projekt cez 100 km dlhý nízkotlakový tunel. Pomocou lineárnych elektromotorov mala rýchlosť súpravy presahovať 520
                          km/h. Na rozdiel od iných svetových vactrain projektov, plánovali Švajčiari vybudovať tunel pre štandardne veľké vlakové súpravy. Tunel teda musel mať
                          priemer 5 až 6 m. Iniciátorom projektu bol Rodolphe Nieth, ktorý pracoval ako inžinier pre Švajčiarske spolkové dráhy. Projekt bol oficiálne ukončený v
                          roku 2009. </p>
                      </div>
                    </div>
                    <div className="column">
                      <div className="title">
                        <h1> 1997 </h1>
                        <h2> DARYL OSTER: <br /> EVACUATED TUBE TRANSPORT TECHNOLOGIES (ET3) </h2>
                      </div>
                      <div className="description">
                        <p> Opäť sa jedná o nízkotlakový potrubný systém, v ktorom sa pohybuje transportná kapsula, za pomoci lineárnych elektromotorov a magnetickej levitácie (maglev).
                          Tzn., že kapsula nemusí mať žiadne pohyblivé alebo elektricky aktivované komponenty – pasívne supravodiče umožňujú kapsule vznášať sa v trubici, pričom
                          vírivé prúdy indukované vo vodivých materiáloch umožňujú riadenie kapsuly. Na jej rozbeh by sa z veľkej časti využívala energia, ktorá vzniká pri brzdení
                          (rekuperácia). </p>
                      </div>
                    </div>
                    <div className="column">
                      <div className="title">
                        <h1> 2003 </h1>
                        <h2> MICHAEL THALHAMMER: <br /> TUBEWAY </h2>
                      </div>
                      <div className="description">
                        <p> Tubeway podobne ako Hyperloop využíva systém transportného potrubia. Vo vnútri transportného potrubia sa pohybuje kapsula pomocou pneumatického pohonu. Kompresor
                          zabudovaný v kapsule nasáva vzduch z prednej časti kapsuly, ktorý stlačí a uvoľní zo zadnej časti kapsuly. Kapsula v potrubí nelevituje, pohybuje sa pomocou
                          kolies. Jej rýchlosť sa má pohybovať od 40 do 350 km/h. Tubeway je však stále len v rovine teoretickej a experimentálnej práce. </p>
                      </div>
                    </div>
                  </div>
                </div>);
    }
}

export default Timeline;