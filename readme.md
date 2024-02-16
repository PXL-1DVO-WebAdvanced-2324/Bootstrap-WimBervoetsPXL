# Bootstrap
Maak gebruik van [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/) om onderstaande pagina zo goed mogelijk na te bouwen.
- Gebruik style.css ENKEL om de achtergrondafbeelding van de header in te stellen en de achtergrondkleur van bijhorende heading.
- Maak zowel gebruik van de Bootstrap [componenten](https://getbootstrap.com/docs/4.0/components/alerts/) als van de [utilities](https://getbootstrap.com/docs/4.0/utilities/borders/)
- Voor witruimtes (binnen & buiten het element) kan (en moet) je gebruik maken van de [spacing](https://getbootstrap.com/docs/5.0/utilities/spacing/#notation) utilities.
- **Doe een 'git commit' en een 'git push' voor elk onderdeel!**

<img alt="mobile" src="https://github.com/PXL-1DVO-WebAdvanced/bootstrap/blob/media/images/desktop-orig.png?raw=true">
<img alt="mobile" src="https://github.com/PXL-1DVO-WebAdvanced/bootstrap/blob/media/images/mobile.png?raw=true" width="25%">

## Inhoud (HTML) & opmaak (CSS)

#### Navigatie
- Gebruik het nav structuurelement met de klasse [navbar](https://getbootstrap.com/docs/4.0/components/navbar/)
- De navigatiebalk heeft een donkere achtergrond: [bg-dark](https://getbootstrap.com/docs/4.0/utilities/colors/#background-color)
- De navigatie bevat:
    - een hyperlink (href="#") met als klasse navbar-brand
    - een button die de navigatielinks toont en verbergt in een mobile design
    - een container die kan "expanden" en "collapsen" 
        - een unordered list met
            - 2 disabled navigatie links
            - 1 active navigatie link
            - 1 default navigatie link
- Hou er rekening mee dat de layout van het mobile design verschilt van het desktop design! (werk dus met breakpoints)
- De 2 laatste navigatielinks bevatten een [badge](https://getbootstrap.com/docs/4.0/components/badge/#pill-badges) met een uitroepteken.
- **Doe een commit met message 'added navigation'**

#### Header
- De header bevat enkel een titel (h1) die wordt weergegeven in meerdere lijnen (br) 
- De header heeft een achtergrondafbeelding die horizontaal links en verticaal centraal gealligneerd is
- De titel wordt met behulp van de [flex](https://getbootstrap.com/docs/5.0/utilities/flex/) eigenschappen horizontaal rechts en verticaal centraal gealligneerd
- De header heeft een donkere [rand](https://getbootstrap.com/docs/5.0/utilities/borders/#border-color) met onderaand afgeronde hoeken
- **Doe een commit met message 'added header'**

#### Main
- Het main element bevat een [carousel](https://getbootstrap.com/docs/5.0/components/carousel/#with-controls) met 2 items: semester 1 + semester 2
- De container die de inhoud bevat (carousel-inner) heeft een donkere achtergrond (bg-dark) en heeft bij voldoende witruimte binnen het element.
- Elk carousel-item bevat een heading, een paragraaf en een flex-container met 3 [cards](https://getbootstrap.com/docs/5.0/components/card/#example)
- Elke card heeft een image en een card-body met daarbinnen
    - een card-title
    - een card-text
    - een [progress-bar](https://getbootstrap.com/docs/5.0/components/progress/#backgrounds)
- Elke card-body is een flex-container waarbij de child elementen onder elkaar staan. De card-text neemt alle vrije ruimte in beslag (flex: 1)
- Responsiviteit: Bij een kleiner scherm worden de cards onder elkaar getoond
- **Doe een commit met message 'added main carousel'**

#### Footer
- De footer bevat een paragraaf met daarbinnen een mailto-koppeling naar pxl@grdvo.be
- De footer heeft een lichte achtergrond (bg-light) met donkere tekst (text-dark)
- De footer heeft een donkere rand
- **Doe een commit met message 'added footer'**

<img alt="mobile" src="https://github.com/PXL-1DVO-WebAdvanced/bootstrap/blob/media/images/desktop.png?raw=true">

## Werking (Javascript)
Telkens wanneer op de afbeelding van één van de cards wordt geklikt wordt de bijhorende progress-bar aangepast
- Zorg ervoor dat elke image een eventlistener heeft die naar de functie *imageClick* verwijst
- Zoek aan de hand van het srcElement waarop geklikt wordt de bijhorende progress-bar (gebruik querySelector)
- De inhoud van de progress-bar kan 5 verschillende waardes hebben: 0, 25, 50, 75 en 100. Elke waarde heeft een bijhorende kleur (zie app.js)
- Gebruik de classList.add en de classList.remove functie om de breedte en de achtergrondkleur van een progress-bar aan te passen.
- **Doe een commit met message 'added js for progressbar'**

<a href="http://www.youtube.com/watch?v=-qMHa7Mec5w" target="_blank">![Bootstrap](http://img.youtube.com/vi/-qMHa7Mec5w/0.jpg)]</a>
