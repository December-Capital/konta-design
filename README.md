# konta-design

Cum arată Konta, scris ca date: culorile, literele, colțurile, spațiile și mișcarea, plus
logo-ul și regulile după care se folosesc. Site-ul [konta.md](https://konta.md), aplicația
și, mai târziu, aplicațiile pentru iPhone și Android își iau aspectul de aici, ca să arate la
fel peste tot.

> **Stadiu: marca din 23 octombrie 2026.** Sunt fixate paleta completă cu rolurile pentru tema
> luminoasă și cea întunecată, literele (Literata și IBM Plex Sans), logo-ul cu regulile lui,
> colțurile și mișcarea. Spațierea și regulile pentru fiecare pagină se adaugă pe măsură ce sunt
> hotărâte. Nimic de aici nu schimbă încă site-ul sau aplicația.

## Ce găsiți aici

| Dosar | Ce conține |
| --- | --- |
| `tokens/` | Sursa: valorile, în formatul standard W3C Design Tokens |
| `build/` | Fișierele gata de folosit, făcute din `tokens/`: CSS, TypeScript și JSON |
| `assets/` | Logo-ul (cu fișierele sursă Affinity), iconițele site-ului, fonturile cu licența lor, imaginile pentru rețele |
| `guide/` | Ghidul: ce înseamnă fiecare culoare, cum se folosesc literele, cum se face o schimbare |
| `mockups/` | Machetele fiecărei runde de redesign, păstrate cu data lor |
| `tools/` | Scripturile care fac `build/` și verifică contrastul |

## Cum se schimbă ceva

Orice schimbare de aspect începe aici, nu în site sau în aplicație: se modifică `tokens/`, se
reface `build/`, se verifică, apoi fiecare produs preia versiunea nouă când este pregătit.
Pașii sunt în [guide/redesign-process.md](guide/redesign-process.md).

```bash
npm ci
```

```bash
npm run build
```

```bash
npm run check
```

Verificarea pică dacă `build/` nu corespunde cu `tokens/` sau dacă un text ajunge să fie greu
de citit pe fundalul lui (sub pragul WCAG AA), pe tema luminoasă sau pe cea întunecată.

## Cum ajunge la produse

Produsele nu încarcă nimic de aici în timp ce rulează. Fiecare copiază o versiune publicată în
propriul depozit, așa că browserul nu face cereri decât către konta.md, cum promite site-ul.
Detaliile tehnice sunt în [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md).

## Proiecte înrudite

- [konta](https://github.com/December-Capital/konta): aplicația
- [konta-www](https://github.com/December-Capital/konta-www): site-ul konta.md
- [konta-rulebook](https://github.com/December-Capital/konta-rulebook): regulile fiscale, ca date
- [konta-efactura](https://github.com/December-Capital/konta-efactura): legătura cu e-Factura
