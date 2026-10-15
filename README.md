# Khouloud Daas - Portfolio

Personal portfolio of Khouloud Daas, 5th-year IT Architecture & Cloud Computing engineering student at ESPRIT (Tunis). I'm looking for an end-of-studies internship (PFE) in Cloud, DevOps or Full-Stack.

## What's inside

- **Home**: introduction, photo, CV download and skills
- **Experience**: Inission Tunis (infrastructure / DevOps), Nefel Education (full-stack), education and CCNA
- **Projects**: ransomware recovery with Proxmox VE, LanceHub (microservices on OpenStack), DevsOnDeck (MERN), academic projects
- **Contact**: contact form and links

## Tech

Angular, TypeScript, CSS (no UI library). Fonts: Fraunces and Instrument Sans.

## Run locally

```bash
npm install
ng serve
```

Then open http://localhost:4200.

To build for production:

```bash
ng build
```

The output is in `dist/`.

## Project structure

```
public/             profile photo and CV (PDF)
src/styles.css      global theme (light green palette)
src/app/layout/     navbar
src/app/pages/      home, experience, projects, contact
src/app/services/   contact service
```

## Contact form

The form sends messages through `ContactService` (`src/app/services/contact.service.ts`). It needs a backend endpoint to work. Without it, the form shows an error message.

## Contact

- Email: daaskhouloud1@gmail.com
- LinkedIn: [linkedin.com/in/khouloud-daas](https://linkedin.com/in/khouloud-daas)
- GitHub: [github.com/khoulouddaas](https://github.com/khoulouddaas)
