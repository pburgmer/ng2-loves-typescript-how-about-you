# ng2 ❤ TypeScript - und du?

## ToDo

* Angular besser mit rein bringen


## Struktur

* Einleitung
  * Warum
    * Besseres, zuverlässigeres Tooling
      * Fehler vermeiden / früher finden
      * Wie sieht die API noch mal aus?
      * Wo ist das noch mal definiert?
    * Große Projekte in ES5 schwierig zu entwickeln und warten
      * Kein Geheimnis, das ES5 nicht für große Anwendungen gemacht
      * Trend immer mehr und immer größere Anwendungen mit ES als Web-Anwendungen zu entwickeln
      * Große Teams
      * Große Code-Basis (Struktur, keine Module)
      * Lange Wartungszeiträume
      * Bisher durch viel Doku und Tests versucht zu beheben 
      * Viel Aufwand für etwas das Compiler besser kann
    * ES6 bringt viel neues und nützliches für größere Apps und zur Fehlervermeidung
      * Klassen
      * Module
      * Arrow-Functions
    * Neue ES6 Features nutzen können (ES5 Laufzeitumgebung)
      * Browser können kein ES6, wird noch lange dauern
      * Bis vor kurzem noch IE8 mit ES3
      * bis dahin längst neue Features wünscheswert (ES7)
      * nicht mit kleinstem Nenner arbeiten -> Transpiler
  * Wie
    * Superset von ES5 / ES6, keine eigene Sprache
    * Open Source, Cross Platform, Cross IDE
    * wird zu ES3 / ES5 / ES6 übersetzt (Transpiler), keine eigene Laufzeitumgebung
    * reines ES6 ohne TypeScript Features -> Transpiler wie Babel oder Traceur
    * mit JS Code interoperabel
    * Alles optional: man kann Features verwenden, muss aber nicht
      * Typen sind optional
      * Module sind optional
      * Klassen sind optional
      * Nutzung der Vorteile beim Tooling ist optional (Navigation im Code)
      * Verwendung von Tooling ist NICHT optional (Compiler, Build-System)
    * Erleichtert Einstieg, gleiche Syntax
    * ES5 Code durch Compiler jagen -> Fehler finden
      * Compiler kennt Browser / DOM API
      * Compiler analysiert eigenen Code (Type Inferencing)
      * Achtung: nicht jeder ES Code ist gültiger TypeScript Code!
  * Beispiel
    * AngularJS 1 Framework und Anwendungen
      * Framework enthielt Bugs, die durch Compiler gefunden wurden
      * Große Anwendungen entwickelt, genannte Probleme
    * Angular 2 Framework und Anwendungen
      * Framework in TS entwickelt
      * Kein Zwang TS zu verwenden (ES Code + Type Definitions ausgeliefert)
      * ES 5 + Module
* Features
  * Typen
    * Warum
      * Fehler früher finden
      * Besseres Tooling, IDE weis mehr über den Code
        * Sinnvolle Autovervollständigung (zeigt an was erwartet wird)
        * Refactoring
        * Navigation
        * Find References
    * Wie
      * ES Basis-Typen (string, number, boolean) + Array
      * any
      * Union-Types, String-Literal-Types
      * Eigene Typen möglich (Klassen, Interfaces, Enums)
      * Typen stehen nicht im Weg
        * any als Bottom-Typ
        * Strukturelles statt nominales Typ-System
        * flexibel wenn wir es wollen
        * sicher wenn wir es wollen 
        * das Beste aus zwei Welten: JS und Java
    * Beispiel: Observable von TrainingService.getAll
  * Generics
    * Warum
      * Wiederverwendbarkeit
      * Typsicherheit
    * Wie
      * Datenstrukturen wie Array von Typ der Daten unabhängig machen
        * Operationen an Struktur hängen nicht von Typ der Daten ab
        * Array#pop unabhängig von string oder number (Implementierung)
      * Trotzdem wissen was in Datenstruktur steckt
        * Was liefert myArray.pop() (Verwendung)
    * Beispiel: Observable<any> in TrainingService.getAll
  * Module
    * Warum
      * Code Strukturieren
    * Wie
      * Wildwuchs: AMD, CommonJS, ES6 Module, ES Module Loader API, ...
      * Unterscheiden zwischen
        * Syntax zum definieren und laden
        * Laden und Einbinden zur Laufzeit
      * TypeScript
        * ES6 Modul Syntax mit import und export Statements
        * Compiler übersetzt Syntax in API Aufrufe eines Module Loaders
        * ES Module Loader API (System.import), AMD (RequireJS), CommonJS (Node), Native ES6 Module Syntax
  * Tooling
    * Warum
      * Editor / IDE rät bei ES Code zu viel, keine verlässlichen Informationen
      * ES Unterstützung je nach Editor sehr unterschiedlich
      * Entwickler sollten möglichst nicht an einen Editor gebunden sein
      * Gute Unterstützung in möglichst vielen Editoren
    * Wie
      * Informationen aus Typen und Modulen
        * Code zu ES übersetzen Reicht nicht aus
        * Typ-Informationen existieren in ES Code nicht mehr
        * Tooling muss TS Code verstehen
      * TSServer läuft im Hintergrund, bietet API für Tooling
      * Compiler Konfiguration über tsconfig.json
    * Beispiel: Visual Studio, Visual Studio Code, Atom, Brackets, WebStorm, IntelliJ, Eclipse, Emacs, Vim
  * Decorators
    * Warum
      * Für Angular 2 in TS eingebaut
      * Framework spezifische Metadaten an Code möglichst Framework unabhängigem Code
    * Wie
      * Transpiler übersetzt Docorators in ES Code
      * Experimental Feature, ES7 Proposal
      * Bibliothek reflect-metadata bietet zur Laufzeit Zugriff
* Zusammenfassung
  * viele coole Features (ES6 + TS)
  * leichter Einstieg, da Superset
  * Modul-System verursacht (noch) viel Aufwand (Konfiguration für Module-Loader)
   
    
## Notizen

* Interfaces
* ES7 Features (Decorators)


## Zitate

* Daniel Rosenwasser - "A fact: Big JavaScript apps are hard"
* Miško Hevery - "My favorite features is that [...] it feels very natural to use."
* John Papa - "If you screw up, it'll tell you!"