# Basisimage
FROM node:13.12.0-alpine

# Arbeitsverzeichnis im Container erstellen
WORKDIR /app

# Abhängigkeiten kopieren
COPY package.json package-lock.json ./

# Abhängigkeiten installieren
RUN npm install

# Projektdateien kopieren
COPY . .

# Build des React-Projekts
RUN npm run build

# Port 3000 freigeben
EXPOSE 3000

# Anwendung starten
CMD ["npm", "start"]
