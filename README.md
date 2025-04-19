Voici une version réécrite et améliorée du `README.md` pour ton projet **IpRoxy**, avec une structure claire, un style professionnel, et plus engageant :

---

# IpRoxy

## 🌐 IP Logger & Redirect Server

**IpRoxy** est une application simple en **Node.js** qui permet de journaliser les adresses IP publiques des visiteurs tout en les redirigeant automatiquement vers une URL cible définie au lancement du serveur.

---

## 🚀 Fonctionnalités

- 📌 Enregistre l'adresse IP publique de chaque visiteur avec un horodatage précis.
- 🔁 Redirige les visiteurs vers une URL cible (saisie au démarrage).
- 📝 Stocke les journaux IP dans un fichier local pour une analyse facile.

---

## 🔧 Prérequis

- [Node.js](https://nodejs.org/) installé
- [npm](https://www.npmjs.com/) (fourni avec Node.js)

---

## 📦 Installation

1. Clone le dépôt :
   ```bash
   git clone https://github.com/4lp1ne/Iproxy.git
   cd ip-logger-redirect
   ```

2. Installe les dépendances :
   ```bash
   npm install
   ```

---

## ▶️ Utilisation

1. **Lance le serveur** :
   ```bash
   node server.js
   ```

2. **Entre l'URL de redirection** :
   À l'invite, entre simplement le domaine (sans `https://`).  
   Exemple : `example.com` ➜ redirigera vers `https://example.com`.

3. **Accède à ton serveur** :
   Par défaut, l'application tourne sur :  
   [http://localhost:3000](http://localhost:3000)

   Chaque visite effectuera :
   - L'enregistrement de l'adresse IP publique avec timestamp.
   - Une redirection immédiate vers l’URL choisie.

---

## 📁 Structure du Projet

```
ip-logger-redirect/
├── server.js              # Fichier principal de l'application
├── public/
│   └── uploads/
│       └── log.txt        # Fichier de logs IP
├── package.json           # Dépendances & scripts
└── README.md              # Documentation du projet
```

---

## 🗂️ Détails des Logs

- Les IPs sont enregistrées dans le fichier :  
  `public/uploads/log.txt`

- Format des logs :
  ```
  Timestamp: YYYY-MM-DDTHH:MM:SS.sssZ - IP: xxx.xxx.xxx.xxx
  ```

### 💡 Exemple :
```
Timestamp: 2024-10-25T13:45:30.000Z - IP: 203.0.113.45
```

---

## 📚 Dépendances

- `express` : Framework web rapide pour Node.js.
- `axios` : Client HTTP pour récupérer les IPs publiques.
- `path` : Gestion des chemins de fichiers.
- `fs` : Module système pour lire/écrire dans les fichiers.

---

## ✅ À venir (suggestions d’améliorations)

- Ajout d’une interface web pour visualiser les logs.
- Filtrage ou alerte en fonction de certaines IPs ou plages IP.
- Ajout de logs géolocalisés via API.

---

## 🧠 Avertissement

Ce projet est destiné à des **usages pédagogiques ou expérimentaux uniquement**.  
Assure-toi de respecter la législation locale concernant la collecte d'adresses IP et l'utilisation de redirections automatiques.

---

Tu veux que je mette à jour le README directement dans le dépôt GitHub ou tu préfères copier-coller ce contenu manuellement ?
